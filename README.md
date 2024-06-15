# Flight Path Tracker Microservice API Documentation : format of the API endpoint

## Overview
The created API for Flight Path Tracker as a microservice helps track and determine a passenger's flight path based on a list of unordered pair(s) of flight records, source and arrival points.
On a broader sense, the API accepts a request that contains a list of flights defined by source and destination airport codes (IATA), sorts them, and returns the complete, compact, and viable flight path from take-off to the destination arrival airports.

### Calculate Flight Path- API Endpoint: '/calculate'
### Method: 'POST'
### Request Format:
 * Content Type: 'application/json'
 * Body: 'Flights' contains an array of records as pair(s) in IATA format
### Response Format:
 * Content Type: 'application/json'
 * Body: A JSON array with sorted, and compact flight path (as tested and shown below in 'Testing' section)

### Error Response: 400 Bad Request
Checked for various invalid formats, i.e., 'flights' should be of two elements, start and end.
  
__________________________________________________________________________________________________________________________________________________________
## Step of Work

A. **Development** : VS Code, JavaScript

1. Created a specified folder "JavaScript Flight Path Tracker" on local machine, H:/

2.Opened VS Code via command terminal in the specified folder

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

B.**Running the server locally (pre-testing)**
1. Installed dependancy 'npm' on 'bash' terminal using the below command:
     npm install
   
3. Started the server
     node server.js

4. 'Flight path tracker listening on port 8080' appears as follows:
   ![local_output](https://github.com/NavidBinAhmed/JavaScript-flight-path-tracker/assets/45857107/d606b5a7-e779-451a-bcc1-261b987d60f1)


C. **Testing** : Postman

Checked the performance of API on Postman locally and it worked as expected for different use cases and scenarios:
![flightpathapi](https://github.com/NavidBinAhmed/JavaScript-flight-path-tracker/assets/45857107/0d5e10f9-bb41-4d7c-a3bc-a65ac977b42b)

1. On Postman:name the project or request to be made
2. 'New' > Select 'POST' > Enter URL 'http://localhost:8080/calculate'
3. 'Body' > 'raw' & 'JSON' 
   {
    "flights": [
        ["ATL", "EWR"],
        ["SFO", "ATL"]
    ]
}
5. Clicking 'send' output the following as expected:
   ["SFO", "EWR"]

Tested for the direct, multiple, and complex flights.

D. **Versioning & Documentation**
Created README.md, and to track the progress and timing used JIRA documentation.

E. **Time Required:** 
0.5 hours : 7:10 pm to 7:30 pm
0.5 hours : around 7:30 to 8 pm
3:07 hours : 10:54 pm to 2:01 am
__________________________________________________________________________________________________________________________________________________________
## Problem Statement

**Story:** There are over 100,000 flights a day, with millions of people and cargo being transferred worldwide. With so many people and different carrier/agency groups, tracking where a person might be can be hard. To determine a person's flight path, we must sort through all of their flight records.

**Goal:** To create a microservice API to help us understand and track how a particular person’s flight path may be queried. The API should accept a request that includes a list of flights defined by a source and destination airport code. These flights may not be listed in order and must be sorted to find the total flight paths starting and ending at airports.

**Examples:** 
[['SFO', 'EWR']]                                                                    => ['SFO', 'EWR']
[['ATL', 'EWR'], ['SFO', 'ATL']]                                                    => ['SFO', 'EWR']
[['IND', 'EWR'], ['SFO', 'ATL'], ['GSO', 'IND'], ['ATL', 'GSO']]                    => ['SFO', 'EWR']

__________________________________________________________________________________________________________________________________________________________
