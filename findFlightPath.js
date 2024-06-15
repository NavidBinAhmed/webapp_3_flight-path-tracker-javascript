function findFlightPath(flights) {
    const startMap = new Map();  //js map for route identification
    const endMap = new Map();


    flights.forEach(([start, end]) => {
        startMap.set(start, end);
        endMap.set(end, start);
    });

    // illustrates the starting airport 
    // source of flight path
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