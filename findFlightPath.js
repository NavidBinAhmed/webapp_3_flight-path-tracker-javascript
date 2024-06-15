/** Serves as a fuction to sort flight records to determine the path,
by using JS Map object for route identification. */

function findFlightPath(flights) {
    const startMap = new Map();
    const endMap = new Map();


    flights.forEach(([start, end]) => {
        startMap.set(start, end);
        endMap.set(end, start);
    });

    // illustrates the starting airport 
    let start;
    for (let [key] of startMap) {
        if (!endMap.has(key)) {
            start = key;
            break;
        }
    }
    
    // sorts the entire flight path
    const path = [];
    while (start) {
        path.push(start);
        start = startMap.get(start);
    }

    return path;
}

module.exports = findFlightPath;