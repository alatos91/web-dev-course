(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstLetter = "";

  for (var i=0; i<names.length; i++) {

    firstLetter = names[i].charAt().toLowerCase();

    if (firstLetter == "j") {
      byeSpeaker.speak(names[i]); //no need to invoke through window.byeSpeaker.speak- if it can't find byeSpeaker in this function, it'll look for it in global context
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();

