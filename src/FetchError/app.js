let btn = document.querySelector('#bad');

btn.addEventListener('click', function(){
  let url = 'https://api.github.com/users/MisaelCalvillodf';
  fetch(url)
  .then(handleError)
  .then(function(request){
    console.log('EVERYTHING IS FINE !!');
  })
  .catch(function(error){
    console.log(error);
  })
})

function handleError(request){
  if(!request.ok){
    throw Error(request.status);
  }
  return request;
}