<template>
    <div class="header">
      <a href="#default" class="logo">localhost:8080</a>
      <div class="header-right">
        <a class="active" href="#home">Sign In</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseHeader'
  }
  </script>
  
  <style>
      
    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      background-color: gray;
      color: white;
      text-align: left;
      overflow: hidden;
    }

    /* Style the header links */
    .header a {
      float: left;
      color: white;
      text-align: center;
      padding: 12px;
      text-decoration: none;
      font-size: 18px; 
      line-height: 25px;
      border-radius: 4px;
    }

    /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
    .header a.logo {
      font-size: 25px;
      font-weight: bold;
    }

    /* Change the background color on mouse-over */
    .header a:hover {
      background-color: #ddd;
      color: black;
    }

    /* Style the active/current link*/
    .header a.active {
      background-color: dodgerblue;
      color: white;
    }

    /* Float the link section to the right */
    .header-right {
      float: right;
    }

    /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */ 
    @media screen and (max-width: 500px) {
      .header a {
        float: none;
        display: block;
        text-align: left;
      }
      .header-right {
        float: none;
      }
    }
    
  </style>