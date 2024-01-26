function speak(letter){
    var audio = document.getElementById("audio");
    var image = document.getElementById("img-box");
    if(letter == 'a') {
        audio.src = "sound/apple.mp3";
        document.getElementById("imgClickAndChange").src = "app.jpg";
    }
    else if(letter == 'b') {
        audio.src = "sound/ball.mp3";
        document.getElementById("imgClickAndChange").src = "ball.jpg";
    }
    else if(letter == 'c') {
        audio.src = "sound/cat.mp3";
        document.getElementById("imgClickAndChange").src = "cat.jpeg";
    }
    else if(letter == 'd') {
        audio.src = "sound/dog.mp3";
        document.getElementById("imgClickAndChange").src = "dog.jpeg";
    }
        else if(letter == 'e') {
            audio.src = "sound/elephant.mp3";
            document.getElementById("imgClickAndChange").src = "elephant.jpg";
        }
        else if(letter == 'f') audio.src = "sound/fat.mp3";
    else if(letter == 'g') audio.src = "sound/gun.mp3";
    else if(letter == 'h') audio.src = "sound/hen.mp3";
    else if(letter == 'i') audio.src = "sound/inkpot.mp3";
    else if(letter == 'j') audio.src = "sound/jocker.mp3";
    else if(letter == 'k') audio.src = "sound/king.mp3";
    else if(letter == 'l') audio.src = "sound/lion.mp3";
    else if(letter == 'm') audio.src = "sound/man.mp3";
    else if(letter == 'n') audio.src = "sound/neck.mp3";
    else if(letter == 'o') audio.src = "sound/owl.mp3";
    else if(letter == 'p') audio.src = "sound/parrot.mp3";
    else if(letter == 'q') audio.src = "sound/queen.mp3";
    else if(letter == 'r') audio.src = "sound/rat.mp3";
    else if(letter == 's') audio.src = "sound/sparrow.mp3";
    else if(letter == 't') audio.src = "sound/today.mp3";
    else if(letter == 'u') audio.src = "sound/umbrella.mp3";
    else if(letter == 'v') audio.src = "sound/van.mp3";
    else if(letter == 'w') audio.src = "sound/wonderfull.mp3";
    else if(letter == 'x') audio.src = "sound/xray.mp3";
    else if(letter == 'y') audio.src = "sound/.mp3";
    else if(letter == 'z') audio.src = "sound/kuchuna.mp3";

        audio.play();
}