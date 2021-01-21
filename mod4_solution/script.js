(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var firstLetter = "";

  for (var i=0; i<names.length; i++) {

    firstLetter = names[i].charAt().toLowerCase();

    if (firstLetter == "j") {
      window.byeSpeaker.speak(names[i]);
    } else {
      window.helloSpeaker.speak(names[i]);
    }
  }

})();

