// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

//const { pickPlanet, formSubmission, addDestinationInfo } = require("./scriptHelper");


//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomP = pickPlanet(listedPlanets)
        addDestinationInfo(document,
            randomP.name,
            randomP.diameter,
            randomP.star,
            randomP.distance,
            randomP.moons,
            randomP.imageUrl);

    })

    document.addEventListener("submit", function(event) {
    event.preventDefault();
    const pilotName = document.querySelector("input[name=pilotName]").value;
    const copilotName = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
    const cargoMass = Number(document.querySelector("input[name=cargoMass]").value);
    const faultyItems = document.getElementById("faultyItems");
    formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
    })

});