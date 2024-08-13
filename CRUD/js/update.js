// read users data
var users = JSON.parse(localStorage.getItem("usersdata")) || [];

// target all form inputs
var fname = document.getElementById("name");
var femail = document.getElementById("email");
var fmobile = document.getElementById("mobile");
var faddress = document.getElementById("address");

// read the id from url address
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (sp, prop) => sp.get(prop),
});

console.log(`params = `, params.id);

function readData(id) {
  // find the individual user data
  let data = users.find((item) => item.id == id);
  console.log(`single user =`, data);
  fname.value = data.name;
  femail.value = data.email;
  fmobile.value = data.mobile;
  faddress.value = data.address;
}

readData(params.id);

//update handler
function updateHandler(event) {
  event.preventDefault();
  let data = {
    id: Number(params.id),
    name: fname.value,
    email: femail.value,
    mobile: fmobile.value,
    address: faddress.value,
  };
  console.log(`updated user=`, data);
  updateUser(data);
}

function updateUser(data) {
  let exEmail = users.find((item) => item.email === data.email);
  let exMobile = users.find((item) => item.mobile === data.mobile);

  if (exEmail) {
    alert(`email already exists`);
  } else if (exMobile) {
    alert(`mobile number already exists`);
  } else {
    let uIndex = users.findIndex((item) => item.id == data.id); // find the index
    users.splice(uIndex, 1, data); //arr.splice(index,deletecount,newvalue)
    localStorage.setItem("usersdata", JSON.stringify(users));
    alert(`user details updated succesfully`);
    window.location.href = "index.html";
  }
}
