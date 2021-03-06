const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((runningTotal, currentDistance) => {
    return runningTotal + currentDistance.distance;
  }, 0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = [];
  this.journeys.forEach((journey) => {
    
    if(!modesOfTransport.includes(journey.transport)) {
      modesOfTransport.push(journey.transport);
    };
  });
    return Array.from(new Set(modesOfTransport));
};

//   const modesOfTransport = [];
//   this.journeys.forEach((journey) => {
//     if (modesOfTransport.includes(journey.transport)) {
//       return
//     } else {
//       modesOfTransport.push(journey.transport)
//     }
//     }); 
//   return modesOfTransport
// };


module.exports = Traveller;
