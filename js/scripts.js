$(document).ready(function(){
  const height = parseInt(prompt("How tall are you in inches?"));
  if(height >= 53){
   $('#allHeights').show();
   $('#thirtySix').show();
   $('#fortyTwo').show();
   $('#fortyEight').show();
   $('#fiftyThree').show();
  }
  else if(height <= 53 && height > 42) {
    $('#allHeights').show();
    $('#thirtySix').show();
    $('#fortyTwo').show();
    $('#fortyEight').show();
    $('#underFiftyFour').show()
  }
  else if(height <= 42) {
    $('#allHeights').show();
    $('#thirtySix').show();
    $('#fortyTwo').show();
    $('#underFiftyFour').show()
  }
  else if(height <= 36) {
    $('#allHeights').show();
    $('#thirtySix').show();
    $('#underFiftyFour').show()
  }
  else{
  $('#allHeights').show();
}
});
