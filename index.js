const { bodyParser } = require("json-server");

// Add your code here
function submitData(name, email) {
  const user ={
    name,
    email
  }
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  })
  .then(response => response.json())
  .then(userResponse =>{
    const body=document.querySelector("body")
    const p = document.createElement("p")
    p.textContent = userResponse.id
    body.appendChild(p)
  })
    .catch(error =>{
      const body=document.querySelector("body")
      const p = document.createElement("p")
      p.textContent = error.message
      body.appendChild(p)
    })
}
