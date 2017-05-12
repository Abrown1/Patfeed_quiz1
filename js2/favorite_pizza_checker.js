
function checkIt() {
  // initialize scores
  var pepperoni = 0;
  var sausage = 0;
  var bacon  = 0;
  var macaroni = 0;

  //get results from form
  var elements = document.getElementsByClassName('answer');


  for (var e of elements) {

    if (e.checked)  {
      if (e.value == 'pepperoni') {
        pepperoni++;
      }
      else if (e.value == 'sausage') {
        sausage++;
      }
      else if (e.value == 'bacon') {
        bacon++;
      }
      else if (e.value == 'macaroni') {
        macaroni++;
      }

    }
  }

   // make a message
  var counts = "pepperoni:  " + pepperoni + ", " +
               "sausage:  " + sausage + ", " +
               "bacon: " + bacon + ", " +
               "macaroni: " + macaroni;

  var max = Math.max(pepperoni, sausage, bacon, macaroni);

  var message;

  if (max == pepperoni) {
    message = "You just loveeeee the cheesey pepperoni pizza! Its your number one favorite and you always eat a whole box alone :) .";
  }

  else if (max == sausage) {
    message = "Sausage pizza is your favorite! You just love it so much because it reminds you of breakfast. Ha,  you even eat sausage pizza for breakfast ;) . ";
  }

  else if (max == bacon) {
    message = "mmmm bacon bacon bacon! Your favorite is bacon pizzaaa. You just  love the crunch and the meaty taste :) .";
  }

  else if (max == macaroni) {
    message = "SO CLASSIC :D . You know its never on the menu but,  your favorite is macaroni pizza! Your taste buds are very different from others and you always eat the craziest food combinations :) .";
  }

  var title = "We can guess your favorite pizza";

  var heading;



  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
}
