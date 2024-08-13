var users = JSON.parse(localStorage.getItem("usersdata")) || [];
// JSON.parse() converts json to array

function createHandler(event) {
  event.preventDefault(); // avoid page refresh
  let fname = document.getElementById("name");
  let femail = document.getElementById("email");
  let fmobile = document.getElementById("mobile");
  let faddress = document.getElementById("address");

  let data = {
    id: Math.round(Math.random() * 1000),
    name: fname.value,
    email: femail.value,
    mobile: fmobile.value,
    address: faddress.value,
  };
  console.log(`user =`, data);
  saveData(data);
}

function saveData(data) {
  let dEmail = users.find((item) => item.email === data.email);
  let dMobile = users.find((item) => item.mobile === data.mobile);

  if (dEmail) {
    alert("Email aleady registered");
  } else if (dMobile) {
    alert("Mobile number already exists.");
  } else {
    users.push(data);
    localStorage.setItem("usersdata", JSON.stringify(users));
    alert("user data created successfully");
    window.location.href = "index.html";
  }
}
