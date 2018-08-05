let url = "https://jsonplaceholder.typicode.com/comments";
let btn = document.querySelector("#sendRequest");
let section = document.querySelector("#comments");
btn.addEventListener("click", sendRequest);

function sendRequest(){
  axios.get(url, {
    params: {
      postId: 1
    }
  })
  .then(addComments)
  .catch(handleErrors)
}

function addComments(res){
  res.data.forEach((comment) => {
    appendComment(comment)
  });
}

function appendComment(comment){
  let newP = document.createElement("p");
  newP.innerText = comment.email;
  section.appendChild(newP);
}

function handleErrors(err){
  if(err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if(err.request){
    console.log("Problem With Request!");
  } else {
    console.log("Error", err.message);
  }
}