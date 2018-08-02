let btnGetUser = document.querySelector('#btn');

let realName = document.querySelector('#fullname');
let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let city = document.querySelector('#city');
let avatar = document.querySelector('#avatar');

btnGetUser.addEventListener('click', function(){
  let url = 'https://randomuser.me/api/';

  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
  .catch(printError)
})

function handleErrors(request){
  if(!request.ok){
    throw Error(request.status);
  }
  return request;
}

function parseJSON(request){
  return request.json();
}

function updateProfile(request){
  let user = request.results[0];
  realName.innerHTML = `${user.name.first} ${user.name.last}`;
  userName.innerHTML = user.login.username;
  email.innerHTML = user.email;
  city.innerHTML = user.location.city;
  avatar.src = user.picture.large;

  console.log(user);
}

function printError(error){
  console.log(error);
}