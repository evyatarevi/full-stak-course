// function myFun(size, val = ""){
//     let matrix = [];
//     for (let i = 0; i < size; i++){
//         let innerArr = [];
//         for (let j = 0; j < size; j++){
//             innerArr[j] = val;
//         }
//         matrix[i] = innerArr;
//     }
//     return matrix;

// }

// function arrayToMatrix(arr){
//     let matrix = myFun(Math.sqrt(arr.length)); //creat matrix
//     let x = 0;  // index array
//     //tow for loops that run all over the matrix:
//     for(let i = 0; i < Math.sqrt(arr.length); i++){  
//         for(let j = 0; j < Math.sqrt(arr.length); j++){
//             matrix[i][j] = arr[x]; //assignt array value to matrix
//             x++;
//         }
//     } return matrix;
// }
// function diagonal(m, val = 1){
//     let counter = 0;
//     for (let i = 0; i < m.length; i++){
//         if(m[i][i].textContent == val) counter++;
//     }
//     if(counter == 3) alert("you win!");
// }

// function diagonalT(m, val = 1){
//     let counter = 0;
//     for (let i = 0; i < m.length; i++){
//         if(m[i][m.length-(i+1)].textContent == val) counter++;
//     }
//     if(counter == 3) alert("you win!");
// }
// function box(m, val = 1){
//     for (let i = 0; i < m.length; i++){
//         m[0][i] = m[m.length-1][i] = val;
//         m[i][0] = m[i][m.length-1] = val;
//     }   
// }
// function chackWin(arr, val){
//     let m = arrayToMatrix(arr);
//     diagonal(m, val);
//     diagonalT(m, val);
// }



// let conter = 0;

// let buttonArray = document.querySelectorAll(".btn");

// for (let i = 0; i < buttonArray.length; i++) {

//     buttonArray[i].addEventListener("click", 
//         function() {
//             if(conter % 2 == 0) {
//             buttonArray[i].textContent = "X";
//             chackWin(buttonArray, "X")
//             conter++;
//             } else {
//                 buttonArray[i].textContent = "O";
//                 chackWin(buttonArray, "O")

//                 conter++;
//             }
//         }
//     );
// }

// const btnClasses = document.getElementsByClassName("btn");
// for (let i = 0; i < btnClasses.length; i++){
//     btnClasses[i].addEventListener("click",
//     function() {this.style.backgroundColor = "red";
//     });
// }



// /**
//  * [b1,b2,b3,b4,b5,b6,b7,b8,b9]
//  * */ 









/**
 * I made a mistake in the last lesson and I'm fixing it here.
 * 
 * 
 * Pass By Value -> Primitive Types (Number, String, Boolean)
 *      - When you pass a primitive type to a function, you are passing a copy of the value      
 *
 * Pass By Reference -> Objects (Array, Object, Function)
 *      - When you pass an object to a function, you are passing a reference to the object
 * 
 * 
 */

// this will be the functions we use to build the game
function reset() {
    // Reset the game
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = "";
    }
    conterGame++;
    document.getElementById("span3").textContent = "game:" + conterGame;
}

function ArrayToMatrix(arr, num) {
    // Convert an array to a matrix for easier mental math
    let matrix = [], i, k;
    // k is the number of columns
    // i is the number of rows

    for (i = 0, k = -1; i < arr.length; i++) { // i is the number of rows and k is the number of columns
        if (i % num == 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}
function diagonal(m, val = 1){
    let counter = 0;
    for (let i = 0; i < m.length; i++){
       if(m[i][i] = val) counter++;
    }
    
}
 
function checkForWin(m, val) {
    // Check for a win
    
    for(let i = 0; i < m.length; i++){
        let Rcounter, Ccounter, Dcounter, DTcounter;
         Rcounter = Ccounter = Dcounter = DTcounter = 0;

        for(let j = 0; j < m.length; j++){
            if (m[i][j].textContent == val) Rcounter++; //1
            if (m[j][i].textContent == val) Ccounter++; //1
            if (m[j][j].textContent == val) Dcounter++; //3
            if (m[j][m.length -1 - j].textContent == val) DTcounter++; //1
        }

        if (Rcounter == m.length ||
            Ccounter == m.length ||
            Dcounter == m.length ||
            DTcounter == m.length) 
            return true;
    }
    return false;
}

function checkforTie(arg) {
    // Check for a tie
}



// Game Logic
let Xwin = 0;
let Owin = 0;
let conterGame = 0;
let conter = 0; // Keep track of the number of turns

let buttonArray = document.querySelectorAll(".btn"); // Get all the buttons

let coArray = []; // Create an array to store the coordinates of the buttons
buttonArray.forEach((button) => {
    coArray.push(button); // Push the buttons to the array
});

let matrix = ArrayToMatrix(coArray, 3); // Convert the array to a matrix




for (let i = 0; i < buttonArray.length; i++) { // Loop through the buttons and add an event listener to each one

    buttonArray[i].addEventListener("click", 
    function() {
        if(conter % 2 == 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "X";
            conter++;
            if(checkForWin(matrix, "X")) {
                alert("X player won!");
                reset();
                Xwin++;
                document.getElementById("span1").textContent = "X player:" + Xwin;
            }

            // checkForWin(matrix); -> This is where we will check for a win
        }else if(conter % 2 != 0 && buttonArray[i].textContent == "") {
            buttonArray[i].textContent = "O";
            conter++;
            if(checkForWin(matrix, "O")) {
                alert("O player won!");
                reset();
                Owin++;
                document.getElementById("span2").textContent = "O player:" + Owin;

            }


            // checkForWin(matrix); -> This is where we will check for a win
        }else{
            alert("This button is already clicked!");
        }
    }
);
}