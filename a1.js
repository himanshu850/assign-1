/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Himanshu Parmar Student ID: 146708235  Date: 5/17/2024
*
********************************************************************************/


serverVerbs = ["GET","GET","GET","POST","GET","POST"];
serverPaths = ["/","/about","/contact","/login","/panel","/logout"];
serverResponses = ["Welcome to WEB700 Assignment 1","This assignment was prepared by Himanshu","Himanshu Parmar: hpparmar1@myseneca.ca","User Logged In","Main Panel","Logout Complete"];


// function httpRequest(httpVerb,path){
//     var count = serverPaths.length;
//     var code = 200;
//     var errorCode =404;
//     for(var i=0; i < count; i++){
//         if (serverVerbs[i] == httpVerb && serverPaths[i] == path) {
//             var response = `${code}: ${serverResponses[i]}`
//             return response
//         } else {
//             return (`${errorCode} : Unable to process ${httpVerb} request for ${path}` )
//         }
//     }
// }
// console.log(httpRequest("PUT", "/login"))

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
    function automateTests(){
        testVerbs = ["GET","POST"]
        testPaths = ["/","/about","/contact","/login","/panel","/logout","/randomPath1","/randomPath2"]

        function randomRequest(){
            setInterval(1000);
            var randVerb = testVerbs[0];
            var randPath = testPaths[7];

    } 
}    
console.log(automateTests())
