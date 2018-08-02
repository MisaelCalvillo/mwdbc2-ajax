let refreshBtn = document.querySelector('#refresh');
let pricePlace = document.querySelector('#price');
let currencySelector = document.querySelector('#currency');

refreshBtn.addEventListener('click', getBitcoinPrice);

currencySelector.addEventListener('change', function(event){
  let currency = event.target.value;
  getBitcoinPrice(currency);
})

window.onload = function() {
  getBitcoinPrice();
}

function getBitcoinPrice(currency) {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200){
      let priceJSON = JSON.parse(XHR.responseText);
      let price = '';
      switch(currency){
        case 'EUR':
          price = `${priceJSON.bpi.EUR.symbol} ${priceJSON.bpi.EUR.rate} ${priceJSON.bpi.EUR.code}`;
        break;
        
        case 'GBP':
          price = `${priceJSON.bpi.GBP.symbol} ${priceJSON.bpi.GBP.rate} ${priceJSON.bpi.GBP.code}`;
        break;
  
        default:
          price = `${priceJSON.bpi.USD.symbol} ${priceJSON.bpi.USD.rate} ${priceJSON.bpi.USD.code}`;
        break;
      }

      pricePlace.innerHTML = price;
    }
  }

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
}