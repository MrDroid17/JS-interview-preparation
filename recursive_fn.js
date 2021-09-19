/**
 * if a pattern is getting call again and again -- use recursive function strategy
 * 
 * Expected output
{ 
    user_name: 'Akshay Saini',
    user_address_personal_city: 'Dehradun',
    user_address_personal_state: 'Uttrakhand',
    user_address_personal_area: 'Majra',
    user_address_office_city: 'Hyderabad',
    user_address_office_area_landmark: 'Hi Tech' 
}
 */

let user = {
  name: "Akshay Saini",
  address: {
    personal: {
      city: "Dehradun",
      state: "Uttrakhand",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hi Tech",
      }
    }
  }
}
let magic = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key, finalObj);
    }
    else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
}

let finalObj = {};
magic(user, "user", finalObj);

console.log(finalObj);
