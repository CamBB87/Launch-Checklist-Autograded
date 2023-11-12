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


    let missionTarget = document.getElementById("missionTarget");
    let missionHTML = `<h2>Mission Destination</h2>
                        <ol>
                            <li>Name: ${name} </li>
                            <li>Diameter: ${diameter} </li>
                            <li>Star: ${star}</li>
                            <li>Distance from Earth: ${distance} </li>
                            <li>Number of Moons: ${moons} </li>
                         </ol>
                        <img src="${imageUrl}">`

    return missionTarget = missionHTML;

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

    if (validateInput(pilot) === "Not a Number" &&
        validateInput(copilot) === "Not a Number" &&
        validateInput(fuelLevel) === "Is a Number" &&
        validateInput(cargoLevel) === "Is a Number") {
        pilotStatus.innerHTML = `${pilot}`;
        copilotStatus.innerHTML = `${copilot}`;
        let swich = true;
        if (fuelLevel < 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            fuelStatus.innerHTML = "sorry kid need more juice";
            swich = false;
        };
        if (cargoLevel > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "you don't need that many things in space";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style = "red";
            swich = false;
        };
        if (swich === true) {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style = "green";
        } else if (swich === false) {
            alert("please check list below for invalid values");
        }

    } else {
        alert("pleasae make sure all fields are filled in");
    }





}

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