# Flight Path Tracker Microservice API
Here is a detail doc for the format of the API endpoint

## Overview
The created RESTful API for Flight Path Tracker as a microservice helps track and determine a passenger's flight path based on a list of unordered pair(s) of flight records, source and arrival points.
On a broader sense, the API accepts a request that contains a list of flights defined by source and destination airport codes (IATA), sorts them, and returns the complete, compact, and viable flight path from take-off to the destination arrival airports.

## Flow of Work

A. **Tools Used and Steps of Development** :

[![Tools](https://skillicons.dev/icons?i=nodejs,vscode&theme=light)](https://skillicons.dev)

1. Created a specified folder "JavaScript Flight Path Tracker" on local machine, H:/
2. Opened VS Code via command terminal in the specified folder
3. Initialized the project via 'bash'' terminal running the following commands
    mkdir flight-path-tracker
    cd flight-path-tracker
    npm init -y
Which appeared this at my VS code terminal:
HP@DESKTOP - 9LVHOGF MINGW64 /h/JavaScript Flight Path Tracker/flight-path-tracker

4. Installed 2 following packages using the command below: express and body perser
   npm install express body-parser
5. Created flight path sourcing logic on "findFlightPath.js" on the same directory
6. Created server with express js and set up the '/calculate' API endpoint on "server.js"

B. **Running the server locally (pre-testing)**
1. Installation of the dependancy 'npm' on 'bash' terminal using the below command:
       'npm install'
2. Starting the server:
       'node server.js'
3. 'Flight path tracker listening on port 8080' appears as follows:
![local_output](https://github.com/NavidBinAhmed/JavaScript-flight-path-tracker/assets/45857107/eca41b30-d9a8-4558-adf4-2d55ff213f65)
________________________________________________________________________________________________________________________________________________________


## API Calculating Flight Path 

### API Endpoint: '/calculate'
### Method: 'POST'
### Request Format:
 * __Content Type:__ 'application/json'
 * __Body:__ 'Flights' contains an array of records as pair(s) in IATA format
### Response Format:
 * __Content Type:__ 'application/json'
 * __Body:__ A JSON array with sorted, and compact flight path (as tested and shown below in 'Testing' section)

### Error Response: 400 Bad Request
Checked for various invalid formats, i.e., 'flights' should be of two elements, start and end.
  * __Sample error message:__ 'Invalid input format. Expected an array of flight records.'

## Testing of API : Postman
Checked the performance of API on Postman locally and it worked as expected for different use cases and scenarios:
![flightpathapi](https://github.com/NavidBinAhmed/JavaScript-flight-path-tracker/assets/45857107/5d1f018e-5673-4475-900c-c8f4f1254381)


Airports and cities I typically stepped in taking multiple flights: It worked amazingly as expected! 
![flight path api 2](https://github.com/NavidBinAhmed/JavaScript-flight-path-tracker/assets/45857107/d7f79241-69a9-46e2-b076-e031edc8160b)


1. On Postman, locally installed: name the project or request to be made
2. 'New' > Select 'POST' > Enter URL 'http://localhost:8080/calculate'
3. 'Body' > 'raw' & 'JSON' 

   {
    "flights": [
        ["ATL", "EWR"],
        ["SFO", "ATL"]
    ]
}

With various use cases, this JSON format changes.
 
5. Clicking the 'send' outputs the following, as expected:
   ["SFO", "EWR"]

Tested for various use cases, for example: the direct, multiple, and complex flights.
__________________________________________________________________________________________________________________________________________________________

### References and required links: [^1] [^2] [^3] [^4] [^5] [^6]

[^1]: [JavaScript Map Documentation](https://devdocs.io/javascript/global_objects/map)
[^2]: [Express/Node API Documentation](https://expressjs.com/en/5x/api.html) 
[^3]: [Repo Documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
[^4]: [JIRA Dashboard](https://navidbinahmed.atlassian.net/jira/software/projects/KAN/boards/1/timeline)
[^5]: [Problem Assignment](https://docs.google.com/document/d/1aefinJ_T_D785f6sC2Zg4_c8cY3YWQgEUt0wt8PE9Io/edit#heading=h.rlnlxzzcsgwh)
[^6]: [YouTube, ChatGpt, WWW](https://google.com)
 
