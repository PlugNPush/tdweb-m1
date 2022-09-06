// Exo 4
  
export function processDataImperative (csvText) {
    const csvArray = csvText.split('\n').map(line => line.split(','));
    
    // Copy the headers
    const headers = csvArray[0]

    // Rename the headers as:
    // - "svn_id" -> "username"
    // - "real_name" -> "realName"
    // - "web_site" -> "website"
    // - "project_name" -> "projectName"
    headers[0] = 'username';
    headers[1] = 'realName';
    headers[2] = 'website';
    headers[3] = 'projectName'

    // Remove the first line (headers)
    csvArray.shift();

    // Make the 2D array into an array of objects
    const objects = [];
    for (let i = 0; i < csvArray.length; i++) {
        const object = {};
        for (let j = 0; j < headers.length; j++) {
            object[headers[j]] = csvArray[i][j];
            // If the "web_site" column is empty, set it to null
            if (headers[j] === "website" && object[headers[j]] == "") {
                object[headers[j]] = null;
            }
        }
        objects.push(object);
    }
    //console.log(objects);

    return objects;
    
}

export function processData (csvText) {
    // write your code here
    // convert CSV to 2D array
    const csvArray = csvText.split('\n').map(line => line.split(','));

    // Copy the headers, and rename them as:
    // - "svn_id" -> "username"
    // - "real_name" -> "realName"
    // - "web_site" -> "website"
    // - "project_name" -> "projectName"
    const headers = csvArray[0].map(header => {
        switch (header) {
            case 'svn_id':
                return 'username';
            case 'real_name':
                return 'realName';
            case 'web_site':
                return 'website';
            case 'project_name':
                return 'projectName';
            default:
                return header;
        }
    });
    
    // Remove the first line (headers)
    csvArray.shift();
    
    // If the "website" column is empty, set it to null
    csvArray.forEach(line => {
        if (line[headers.indexOf('website')] === '') {
            line[headers.indexOf('website')] = null;
        }
    });
    
    // Make the 2D array into an array of objects
    const objects = csvArray.map(line => {
        const object = {};
        for (let i = 0; i < headers.length; i++) {
            object[headers[i]] = line[i];
        }
        return object;
    });

    //console.log(objects);

    return objects;
    
    
    //const csvArray = csvText.split('\n').map(line => line.split(','));
    //console.log(csvArray);
}

// Exo 5

export function pullAndCompute() {
    // This code downloads a CSV file from my website, reads it as text
    // and calls `processData(csvText)` on success. Do not worry about
    // the details about `fetch` for now, as we will cover them later.
    
    return fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
        .then(res => res.text())
        .then(csvText => {
            processDataImperative(csvText);
            return processData(csvText);
        })
        .then(computeStats)
        .catch(console.log)
    }

export function computeStats (csvObject) {

    //console.log(csvObject);

    // Order the array by "projectName" (ascending) no matter the case
    csvObject.sort((a, b) => {
        if (a.projectName.toLowerCase() < b.projectName.toLowerCase()) {
            return -1;
        }
        if (a.projectName.toLowerCase() > b.projectName.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    //console.log(csvObject);

    const firstUniqueProject = csvObject[0].projectName;

    //console.log(csvObject[0]);

    // Count the number of unique contributors
    const uniqueContributors = new Set();
    csvObject.forEach(item => uniqueContributors.add(item.realName));
    const uniqueContributorsCount = uniqueContributors.size;
    //console.log(uniqueContributorsCount);
     
    // Sort uniqueContributors in alphabetical order (ascending)
    const uniqueContributorsArray = Array.from(uniqueContributors);
    uniqueContributorsArray.sort();
    //console.log(uniqueContributorsArray);

    //console.log(uniqueContributorsArray);

    // Get the the first contributor in uniqueContributorsArray in alphabetical order
    const firstUniqueContributor = uniqueContributorsArray[0];
    // Display its realName


    //console.log(firstUniqueContributor);
    

    // Average length of uniqueContributors
    const averageLength = [...uniqueContributors].reduce((total, current) => total + current.length, 0) / uniqueContributors.size;
    //console.log(averageLength);

    // Display the contributor having worked on the most of projects
    const contributors = getCountObject(csvObject, 'realName');
    const mostContributor = Object.keys(contributors).reduce((a, b) => contributors[a] > contributors[b] ? a : b);
    //console.log(mostContributor);

    // Get the top 10 most contributed projects and the number of contributions for each of them as an array of objects
    const projects = getCountObject(csvObject, 'projectName');
    const top10Projects = Object.keys(projects).sort((a, b) => projects[b] - projects[a]).slice(0, 10);
    const top10ProjectsArray = top10Projects.map(project => {
        return {
            projectName: project,
            contributions: projects[project]
        }
    }
    );
    //console.log(top10ProjectsArray);

    // Get the top 10 Projects name only in an array 
    const top10ProjectsName = top10ProjectsArray.map(project => project.projectName);
    //console.log(top10ProjectsName);

    return {
        "firstUniqueProject": firstUniqueProject,
        "uniqueContributorsCount": uniqueContributorsCount,
        "averageLength": averageLength,
        "mostContributor": mostContributor,
        "top10ProjectsName": top10ProjectsName,
    };

}

export function getCountObject(array, key) {
    const countObject = {};
    array.forEach(item => {
        if (countObject[item[key]]) {
            countObject[item[key]]++;
        } else {
            countObject[item[key]] = 1;
        }
    }
    );
    return countObject;
}


