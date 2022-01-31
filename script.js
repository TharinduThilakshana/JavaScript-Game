document.getElementById("guessCheck").onclick = function(){

    var randomNumber = Math.random();
    randomNumber = randomNumber * 11 ;
    randomNumber = Math.floor(randomNumber);

    if (document.getElementById("guess").value == randomNumber) {

        alert ("Well Done !!");
    }
    else{
        alert("Nope!! Try again !!");
    }
}
