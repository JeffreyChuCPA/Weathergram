
//*Function to calculate straight line distance from 2 coordinate points
const locationCalc = (userLat, userLong, searchedLat, searchedLong) => {
  let radius = 6371;
  let dLat = toRad(searchedLat - userLat);
  let dLon = toRad(searchedLong - userLong);
  let clientLat = toRad(userLat);
  let searchLat = toRad(searchedLat);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
  Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(clientLat) * Math.cos(searchLat); 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = radius * c;
  return d;

}

const toRad = (value) => {
  return value * Math.PI / 180
}

export default locationCalc