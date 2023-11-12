// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */


    document.getElementById("missionTarget").innerHTML = `<h2>Mission Destination</h2>
                                                            <ol>
                                                                <li>Name: ${name} </li>
                                                                <li>Diameter: ${diameter} </li>
                                                                <li>Star: ${star}</li>
                                                                <li>Distance from Earth: ${distance} </li>
                                                                <li>Number of Moons: ${moons} </li>
                                                            </ol>
                                                            <img src="${imageUrl}">`;




}

function validateInput(testInput) {
    let output = "";
    if (testInput === "") {
        output = "Empty"
    } else if (isNaN(testInput)) {
        output = "Not a Number"
    } else {
        output = "Is a Number"
    }
    return output;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")
    let faultyItems = document.getElementById("faultyItems");


    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("please make sure all fields are filled");
    }
    if (validateInput(cargoLevel) === "Not a Number" || validateInput(fuelLevel) === "Not a Number") {
        alert("cargo or fuel level is a string, and has to be a number")
    }


    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    // let swich = true;

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "green";
    }

    if (fuelLevel < 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        // swich = false;
    } else if (fuelLevel >= 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    };
    if (cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        // swich = false;
    } else if (cargoLevel <= 10000) {
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    };
    // if (swich === true) {
    //     launchStatus.innerHTML = "Shuttle is ready for launch";
    //     launchStatus.style = "green";
    // } else if (swich === false) {
    //     alert("please check list below for invalid values");
    // }

};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let newPlanet = planets[Math.floor(Math.random() * planets.length)];
    return newPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;