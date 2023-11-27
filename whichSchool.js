let bethanyAge = Math.round(Math.random() * 4) + 13
let danyAge = Math.round(Math.random() * 12)
let mariaAge = Math.round(Math.random() * 52) + 18


// Conditions for Bethany
if (bethanyAge < 13) {
  console.log("Bethany should go to Elementary School")
} else if (bethanyAge > 12 && bethanyAge < 19) {
  console.log("Bethany should go to High School")
} else {
  console.log("Bethany should go to Lighthouse Labs")
}

// Conditions for Dany
if (danyAge > 18) {
  console.log("Dany should go to Lighthouse Labs")
} else if (danyAge > 12 && danyAge < 19) {
  console.log("Dany should go to High School")
} else {
  console.log("Dany should go to Elementary School")
}

// Conditions for Maria
if (mariaAge > 12 && mariaAge < 19) {
  console.log("Maria should go to High School")
} else if (mariaAge > 18) {
  console.log("Maria should go to Lighthouse Labs")
} else {
  console.log("Maria should go to Elementary School")
}
