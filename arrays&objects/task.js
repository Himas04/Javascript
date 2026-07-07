//

let obj = {
  name: "Himas",
  age: 23,
  address: {
    city: "kalmunai",
    houseNo: 13,
  },
};

// for (object in obj) {
//   console.log(object);
// }

//
for (let key in obj) {
  if (typeof obj[key] === "object") {
    for (let subKey in obj[key]) {
      console.log(subKey + " : " + obj[key][subKey]);
    }
  } else {
    console.log(key + " : " + obj[key]);
  }
}