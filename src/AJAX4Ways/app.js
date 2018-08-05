(function(){

let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

// Buttons 
let xhrBtn = document.querySelector('#xhr');
let fetchBtn = document.querySelector('#fetch');
let jqueryBtn = document.querySelector('#jquery');
let axiosBtn = document.querySelector('#axios');

let quoteP = document.querySelector('#quote');

xhrBtn.addEventListener('click', XHR)
fetchBtn.addEventListener('click', makeFetchRequest)
jqueryBtn.addEventListener('click', jQueryAJAX)
axiosBtn.addEventListener('click', axiosRequest)



function XHR(){
  let request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
      changeQuote(JSON.parse(request.responseText)[0]);
    } 
  }

  request.open('GET', url);
  request.send();
}

function makeFetchRequest(){
  fetch(url)
  .then(handleError)
  .then(parseJSON)
  .then(changeQuote)
  .catch(function(error){
    console.log(error);
  })

  function handleError(request){
    if(!request.ok){
      throw Error(request.status)
    }
    return request;
  }

  function parseJSON(request){
    return request.json().then((res) => res[0]);
  }
}

function jQueryAJAX() {
  $.ajax({
    method: 'GET',
    url: url,
    dataType: 'json',
  })
  .done((data) => changeQuote(data[0]))
  .fail((error) => console.log("There was an error!", error)); 
}

function axiosRequest(){
  axios.get(url)
  .then((req) => changeQuote(req.data[0]))
  .catch((error) => console.log(error));
}


function changeQuote(quote){
  quoteP.innerHTML = quote;
}

})();