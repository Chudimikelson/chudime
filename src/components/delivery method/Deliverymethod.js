


  var residence = document.getElementsByClassName('forms').value;
	  var method = document.getElementById('form')[1][0].value;
	  var getLocation = () => {
		 let location = document.forms[0];
		 
		 let i;
			 for (i = 0; i<location.length; i++) {
			 	if (location[i].value) {
			 		residence = location[i].value;
			 	}
			 }
			 showlocation();
			 getDeliveryMethod();
   };
  var showlocation = ()=> console.log(residence);
  var deliverFee = (location) => {
  let result = "";

  const lookup = {
    "abuja": 1000,
    "lagos": 2000,
    "ibadan": 2000,
    "portharcourt": 2000,
    "benin": 2000,
    "owerri": 2000,
    "asaba": 2000,
    "minna": 2000,
    "jos": 2000,
    "kaduna": 2000,
  };
  result = lookup[location];
  return result;
};


var getDeliveryMethod = () => {
	 var deliveryMethod = document.forms[1];
	 var fee = deliverFee(residence)
	 
	 	if (deliveryMethod[0].checked) {
	 		method = "regular";
	 	} else {
	 		method = "doorstep";
	 	}
	 
	 if (method !== "regular" && residence !== "abuja") {
	 	fee += 2000;
   }
  }
  return (
    <div>
	
</div>
  )