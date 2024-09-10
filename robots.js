// Create a file named robotFactory.js. Complete all of the following tasks in that file. Each task is worth one point unless otherwise noted. NOTE: You may write additional code in robotFactory.js if you like. It will not count against you. For example, it’s probably a good idea to call the functions you make to test them.

//     Declare a function named startUpSequence
//         Parameter(s): n/a
//         Functionality: Uses a loop to log, one by one, the numbers 3, 2, 1, and then log "Start!" at the end.


const startUpSequence = () => {
    for(let i = 3; i >= 1; i--) {
        console.log(i);
    }

    console.log("Start not the other thing");
};



//     Declare a function named chargeBattery
//     Parameter(s): startLevel, endLevel these are numbers
//     Functionality: one by one, the battery levels from startLevel through endLevel should be logged, including both.


const chargeBattery3 = (startLevel, endLevel) => {
    for (let i = startLevel; i <= endLevel; i++){
        console.log(i);
    }
}



const chargeBattery = (startLevel, endLevel) => {
    for (let i = startLevel; i <= endLevel; i++) {
        console.log(i);
    }

    console.log("Battery is fully charged!!!!");

};


const chargeBattery2 = (startLevel, endLevel) => {

    while (startLevel <= endLevel){
        console.log(startLevel);
        startLevel++;
    }

    console.log("Battery is fully charged!!!!");

};




// Declare a function named batteryStatus

//     Parameter(s): batteryLevel
//     Functionality: Logs "Empty" if batteryLevel is 10 or less, 
//     "Low" if batteryLevel is above 10 and below 50, and "Charged" if batteryLevel is 50 or above.

const batteryStatus = (batteryLevel) => {

    if (batteryLevel <= 10){
        console.log("Empty");
    } else if (batteryLevel > 10 && batteryLevel < 50) {
        console.log("Low");
    } else {
        console.log("Charged");
    }
}


// Declare a function named isShort
    // Parameter(s): robotName
    // Functionality: Returns true if robotName has 5 characters or fewer, and false otherwise.

const isShort = (robotName) => {
    return robotName.length <= 5 ? true : false;
}

//yes?

let result = isShort("Walle");
console.log(result);

result = isShort("Megatron");
console.log(result);


/*
Declare a variable named robots that is initialized to an array with the following objects:

    Attributes:
        model: the name of the robot model
        power: battery power in percentage
        cost: the price of the robot
        isAutonomous: whether the robot is autonomous

    Example:

    model        power    cost    isAutonomous
    Alpha        80       1500    false
    Beta         100      2000    true
    Gamma        60       1200    false
    Delta        90       1800    true


    Declare a function named buildRobot

    Parameter(s): robotArray, model, power, cost, isAutonomous
    
    Functionality: Construct an object and add it to the end of the provided array. 
    Use the parameters for the values. 
    The object should have the same properties as the objects already in the array.

*/

let robots = [
    {model: 'Alpha', power: 80, cost: 1500, isAutonomous: false},
    {model: 'Beta', power: 100, cost: 2000, isAutonomous: true},
    {model: 'Gamma', power: 60, cost: 1200, isAutonomous: false},
    {model: 'Delta', power: 90, cost: 1800, isAutonomous: true}
];

function buildRobot (robotArray, model, power, cost, isAutonomous){
    let newRobot = {
        model: model,
        power: power,
        cost: cost,
        isAutonomous: isAutonomous
    };

    robotArray.push(newRobot);
}


buildRobot(robots, 'Johhny 5', 100, 1700, true);
buildRobot(robots, 'Legion', 100, 1000000000, true);
buildRobot(robots, 'Robocop', 100, 100000000000000, true);
buildRobot(robots, 'Markus', 100, 20000000000, true);
buildRobot(robots, 'Chatgpt', 100, 30, false);


console.log(robots);

/*

Declare a function named findAutonomousRobot

    Parameter(s): robotArray
    Functionality: Return the first object in robotArray that is autonomous (isAutonomous: true).


Declare a function named findCheapestRobot

    Parameter(s): robotArray
    Functionality: Return the object that has the lowest cost.



*/
