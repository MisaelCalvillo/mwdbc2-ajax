// This is the way we did HTTP request back in the old ages

var XHR  = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  if(XHR.readyState == 4) {
    if(XHR.status == 200){
      console.log(XHR.responseText);  
    } else {
      console.log("There was a problem")
    }
    
  }
}

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();