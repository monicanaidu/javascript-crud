// read the data

let users = JSON.parse(localStorage.getItem("usersdata")) || [];

//delete handler
function deleteHandler(id) {
  if (window.confirm(`Are you sure to delete user id=${id}?`)) {
    //check weather data exits or not
    let dataIndex = users.findIndex((item) => item.id == id);
    console.log(`data=`, dataIndex);
    users.splice(dataIndex, 1);
    localStorage.setItem("usersdata", JSON.stringify(users));
    alert(`user data deleted successfuly`);
    window.location.reload();
  }
}

function print() {
  var output = document.querySelector("tbody");
  users.forEach((item) => {
    output.innerHTML += `<tr>
                            <td> ${item.id} </td>
                            <td> ${item.name} </td>
                            <td> ${item.email} </td>
                            <td> ${item.mobile} </td>
                            <td> ${item.address} </td>
                            <td> 
                                <div class="btn-group">
                                     <a href="update.html?id=${item.id}" class="btn btn-success">Edit</a>
                                     <button onclick="deleteHandler('${item.id}')" class="btn btn-danger">Delete</button>
                                </div>
                            </td>
            </tr>`;
  });
}

print();
