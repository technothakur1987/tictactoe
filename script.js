console.log("Welcome to tic tac toe ")

confirm("Do you want to enjoy the era of tictactoe")
let music = new Audio("music.mp3");

let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3")








function changeTurnx() {
    console.log("changethe turnx")
    document.getElementById("info").innerText = "  Turn for O  ";
    document.getElementById("info").style.color = "red"
}
function changeTurno() {
    console.log("changethe turno");
    document.getElementById("info").innerText = "  Turn for X   ";
    document.getElementById("info").style.color = "blue"
}



//function to display image
function disImg() {
    document.getElementById("img2").style.display = "block"

}






//function to check the win
let no1 = document.getElementById("no1")

function checkWin() {
    if (no1.innerText == "X" && no2.innerText == "X" && no3.innerText == "X") {
        console.log("x win and ")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();



    } else if (no4.innerText == "X" && no5.innerText == "X" && no6.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();

    } else if (no7.innerText == "X" && no8.innerText == "X" && no9.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no1.innerText == "X" && no5.innerText == "X" && no9.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no3.innerText == "X" && no5.innerText == "X" && no7.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no1.innerText == "X" && no4.innerText == "X" && no7.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no2.innerText == "X" && no5.innerText == "X" && no8.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no3.innerText == "X" && no6.innerText == "X" && no9.innerText == "X") {
        console.log("x win")
        document.getElementById("info").innerText = "  X wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no1.innerText == "0" && no2.innerText == "0" && no3.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no4.innerText == "0" && no5.innerText == "0" && no6.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no7.innerText == "0" && no8.innerText == "0" && no9.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no1.innerText == "0" && no5.innerText == "0" && no9.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no3.innerText == "0" && no5.innerText == "0" && no7.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no1.innerText == "0" && no4.innerText == "0" && no7.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no2.innerText == "0" && no5.innerText == "0" && no8.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    } else if (no3.innerText == "0" && no6.innerText == "0" && no9.innerText == "0") {
        console.log("0 win")
        document.getElementById("info").innerText = "  O wins  ";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.fontSize = "5rem ";
        music.pause();
        gameover.play();
        disImg();
    }

}


//function to reset

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    console.log("reset button clicked")
    /* no1.innerText=" ";
     no2.innerText=" ";
     no3.innerText=" ";
     no4.innerText=" ";
     no5.innerText=" ";
     no6.innerText=" ";
     no7.innerText=" ";
     no8.innerText=" ";
     no9.innerText=" ";*/
    window.location.reload();
})




//logics for the this game 
music.play()
let box = document.getElementsByClassName("box");
//array.form to convert box into array

let obj = Array.from(box);
/*console.log(obj)*/

var x = true;
var boxValue = " ";


/*for (const iterator of obj) {
    /*console.log(iterator);*/

let lis = document.querySelectorAll('.container div span');
for (const iterator of lis) {
    console.log(iterator)
    iterator.addEventListener("click", () => {
        console.log("boxtext is clicked");

        if (x == true) {
            iterator.innerText = "X"
            x = false;
            index = 0;
            console.log(`the value for x is ${x} and index is ${index}`)
            audioTurn.play()
            changeTurnx();
            boxValue = "X"
            checkWin();



        } else {
            iterator.innerText = "0"
            index = 1;


            x = true;
            console.log(`the value for x is ${x} and index is ${index}`)
            audioTurn.play()
            changeTurno();
            boxValue = "0"
            checkWin();



        }

    })

}










