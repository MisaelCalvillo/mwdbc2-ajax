# Modern Web Development Bootcamp 2 - AJAX

This repo is intended to explain all the process to consume an API through HTTP Requests. 

### Good old XMLHttpRequest library

We made a simple app in `src/AJAXAp` and it loads a random dog image using an API through a HTTP Request

``` javascript 
let btn = document.querySelector('#btn');
let img = document.querySelector('#photo');

btn.addEventListener('click', function(){
  console.log('clicked');
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState === 4 && XHR.status === 200) {
      let url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  }

  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
});
```

### Coding Excercise

Create a small app that gets the current price of Bitcoin. 
The API we used was:
```
https://www.coindesk.com/api/
```

The link to see the JSON we consumed through an HTTP request.
[Current Bitcoin Price JSON](https://api.coindesk.com/v1/bpi/currentprice.json)

The **finished** app can be found in `src/AJAXBitcoin` folder.
