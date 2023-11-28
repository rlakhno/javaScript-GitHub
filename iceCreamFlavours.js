// Do not modify these first two lines
const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "cookies and cream",
  "rocky road",
  "strawberry",
];
console.log(iceCreamFlavours);

// Add a flavor
const newFlavour = "root beer";
const updatedIceCreamFlavours = [...iceCreamFlavours, newFlavour];
console.log(updatedIceCreamFlavours);

// Get the first flavor
console.log(updatedIceCreamFlavours[0]);

// Get the last flavor
console.log(updatedIceCreamFlavours[updatedIceCreamFlavours.length - 1]);

// Total number of flavors
console.log(updatedIceCreamFlavours.length);
