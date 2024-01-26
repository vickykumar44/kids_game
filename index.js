function speak(letter){
    var audio = document.getElementById("audio");
    var image = document.getElementById("img-box");
    if(letter == 'a') {
        audio.src = "apple.mp3";
        document.getElementById("imgClickAndChange").src = "app.jpg";
    }
    else if(letter == 'b') {
        audio.src = "ball.mp3";
        document.getElementById("imgClickAndChange").src = "ball.jpg";
    }
    else if(letter == 'c') {
        audio.src = "cat.mp3";
        document.getElementById("imgClickAndChange").src = "cat.jpeg";
    }
    else if(letter == 'd') {
        audio.src = "dog.mp3";
        document.getElementById("imgClickAndChange").src = "dog.jpeg";
    }
        else if(letter == 'e') {
            audio.src = "elephant.mp3";
            document.getElementById("imgClickAndChange").src = "elephant.jpg";
        }
        else if(letter == 'f') audio.src = "fat.mp3";
    else if(letter == 'g') audio.src = "gun.mp3";
    else if(letter == 'h') audio.src = "hen.mp3";
    else if(letter == 'i') audio.src = "inkpot.mp3";
    else if(letter == 'j') audio.src = "jocker.mp3";
    else if(letter == 'k') audio.src = "king.mp3";
    else if(letter == 'l') audio.src = "lion.mp3";
    else if(letter == 'm') audio.src = "man.mp3";
    else if(letter == 'n') audio.src = "neck.mp3";
    else if(letter == 'o') audio.src = "owl.mp3";
    else if(letter == 'p') audio.src = "parrot.mp3";
    else if(letter == 'q') audio.src = "queen.mp3";
    else if(letter == 'r') audio.src = "rat.mp3";
    else if(letter == 's') audio.src = "sparrow.mp3";
    else if(letter == 't') audio.src = "today.mp3";
    else if(letter == 'u') audio.src = "umbrella.mp3";
    else if(letter == 'v') audio.src = "van.mp3";
    else if(letter == 'w') audio.src = "wonderfull.mp3";
    else if(letter == 'x') audio.src = "xray.mp3";
    else if(letter == 'y') audio.src = ".mp3";
    else if(letter == 'z') audio.src = "kuchuna.mp3";

        audio.play();
}