
function checkIt() {
  // initialize scores
  var doctor = 0;
  var janitor = 0;
  var actor = 0;
  var babysitter = 0;

  //get results from form
  var elements = document.getElementsByClassName('answer');


  for (var e of elements) {

    if (e.checked)  {
      if (e.value == 'doctor') {
        doctor++;
      }
      else if (e.value == 'janitor') {
        janitor++;
      }
      else if (e.value == 'actor') {
        actor++;
      }
      else if (e.value == 'babysitter') {
        babysitter++;
      }

    }
  }

   // make a message
  var counts = "doctor:  " + doctor + ", " +
               "janitor:  " + janitor + ", " +
               "actor: " + actor + ", " +
               "babysitter: " + babysitter;

  var max = Math.max(doctor, janitor, actor, babysitter);

  var message;

  if (max == doctor) {
    message = "Congrats your a future doctor ! You graduate from highschool and go straight into college and work hard to become the best doctor ever :) .";
  }

  else if (max == janitor) {
    message = "Congrats your a future janitor! You graduated from college and decided you dont wanna be a counselor and you want to help clean up floors and trash. ;) ";
  }

  else if (max == actor) {
    message = "You will be the #1 best actor alive ! You drop out of highschool to persue an acting career in hollywood and you get bigggggg in fame . :D .";
  }

  else if (max == babysitter) {
    message = "Well your a future babysitter. You thought things would go right as a lawyer but... You ended up losing every case and decided to babysit kids for a living :/ .";
  }

  var title = "We can guess your future job";

  var heading;



  // Display result
  //document.getElementById('result-text').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
  document.getElementById('result-title').innerHTML = title;
  document.getElementById('result-heading').innerHTML = heading;
}
