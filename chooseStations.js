
function chooseStations(stations) {
  let goodStations = [];

  for (const station of stations) {
    const [name, capacity, venueType] = station;

    if (capacity >= 20 && (venueType === "school" || venueType === "community centre")) {
      goodStations.push(name);
    }
  }

  return goodStations;
}

// Example usage:
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const result = chooseStations(stations);
console.log(result); 