
// index.js
console.log('This is a log entry reported in browser console');
console.warn('This is a warning reported with an orange background');
console.error('This time, you see a red background');
//window.alert('JS initialized successfully');



// TP1
// Language: javascript
// Path: index.js
// index.js

// TEST ZONE

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
try {
    console.log(sum());
} catch(e) {
    console.error(e.message);
}
console.log(sum(1)); // prints 1
console.log(sum(1, 2, 3)); // prints 6



// CODE ZONE

// Exo 1
function sum(...args) {
    if (args.length === 0) {
        throw Error('At least one number is expected');
    }
    return args.reduce((total, current) => total + current);
}

// Exo 2

const array = [1, 2, 3, 4, 5];
const filteredArray = filter(array, item => item > 2); // [3, 4, 5]
console.log(filteredArray);

function filter(array, condition) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

// Exo 3

const doubled = map(array, item => item * 2); // [2, 4, 6, 8, 10]
const doubledAndFiltered = filter(doubled, item => item > 5); // [6, 8, 10]

console.log(doubled);
console.log(doubledAndFiltered);

function map(array, condition) {
    const mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        mappedArray.push(condition(array[i]));
    }
    return mappedArray;
}

// Exo 4

// This code downloads a CSV file from my website, reads it as text
// and calls `processData(csvText)` on success. Do not worry about
// the details about `fetch` for now, as we will cover them later.
fetch('https://thomas-veillard.fr/wp-content/uploads/2021/07/apache-contributors-projects.csv')
  .then(res => res.text())
  .then(csvText => {
    processDataImperative(csvText);
    return processData(csvText);
  })
  .then(computeStats)
  .catch(console.log)
  
  
function processDataImperative (csvText) {
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
    console.log(objects);

    return objects;
    
}

function processData (csvText) {
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

    console.log(objects);

    return objects;
    
    
    //const csvArray = csvText.split('\n').map(line => line.split(','));
    //console.log(csvArray);
}

// Exo 5

function computeStats (csvObject) {

    console.log(csvObject);

    // Order the array by "projectName" (ascending)
    csvObject.sort((a, b) => {
        if (a.projectName < b.projectName) {
            return -1;
        }
        if (a.projectName > b.projectName) {
            return 1;
        }
        return 0;
    }
    );

    console.log(csvObject[0]);

    // Count the number of unique contributors
    const uniqueContributors = new Set();
    csvObject.forEach(item => uniqueContributors.add(item.username));
    console.log(uniqueContributors.size);

    // Get the realName of the first unique contributor in uniqueContributors
    const firstUniqueContributor = csvObject.find(item => uniqueContributors.has(item.username)).realName;
    console.log(firstUniqueContributor);


    // Average length of uniqueContributors
    const averageLength = [...uniqueContributors].reduce((total, current) => total + current.length, 0) / uniqueContributors.size;
    console.log(averageLength);

    // Display the contributor having worked on the most of projects
    const contributors = getCountObject(csvObject, 'realName');
    const mostContributor = Object.keys(contributors).reduce((a, b) => contributors[a] > contributors[b] ? a : b);
    console.log(mostContributor);

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

}

function getCountObject(array, key) {
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

