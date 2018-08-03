
$('#btn').click(function(){
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json',
  })
  .done(function(data){
    $('#result').text(data[0]);
  })
  .fail(function(){
    alert("OH NO IT FAILED");
  });
});


$('#getBtn').click(function(){
  $.get("https://api.github.com/users/MisaelCalvillo")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("Error");
  });
});

$('#postBtn').click(function(){
  let data = {
    name: "Misael",
    aga: 21
  }
  $.post("www.catsarecool.mx", data)
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("Error!");
  });
});

$('#getJSONBtn').click(function(){
  $.getJSON("https://api.github.com/users/MisaelCalvillo")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("Error!");
  });
});