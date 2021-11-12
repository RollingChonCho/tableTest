const api_url = "https://jsonplaceholder.typicode.com/users";

//fetch function:
async function getData() {
  var response = await fetch(api_url);
  var data = await response.json();
  console.log(user);

  //loop through data base and pull name, phone, and email:
  for (let i = 0; i < data.length; i++) {
    var userNum = i;
    var user = {
      name: data[userNum].name,
      phone: data[userNum].phone,
      email: data[userNum].email,
      id: data[userNum].id
    };
    //find the table:
    var table = document.getElementById("myTable");
    //create an empty row and add it to the top of the table:
    var row = table.insertRow(-1);
    //insert new cells at first, last, and phone:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    //add name, email, and phone from database:
    cell1.innerHTML = user.name;
    cell2.innerHTML = user.email;
    cell3.innerHTML = user.phone;
    row.setAttribute("id", user.id);
    cell1.setAttribute("a", user.id);
    console.log(userNum);
  }
}

getData();

const post_api_url = "https://jsonplaceholder.typicode.com/posts";
//fetch function:
async function getPost() {
  var response = await fetch(post_api_url);
  var postData = await response.json();
  console.log(postData);
}
getPost();
