let catsAPI = "https://aws.random.cat/meow";

$('#getCatBtn').click(function(){
  $.get(catsAPI)
  .done(function(data){
    $("#catImage").attr({
      src: data.file,
    })
  })
  .fail(function(){
    console.log("There was an Error");
  })
})