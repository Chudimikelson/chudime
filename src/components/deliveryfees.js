//setup
function deliverFee(location) {
  var result = "";

  var lookup = {
    "Abuja": 1000,
    "lagos": 2000,
    "portharcourt": 3000,
    "benin": 4000,
    "owerri": 2500,
    "asaba": 8000,
    "minna": 2800,
    "jos": 2200,
    "kaduna": 2600,
  };
  result = lookup[location];
  return result;
}

console.log(deliverFee("minna"));
