

// student: Evyatar Ifrach


//-----------part 1 ----------

// sort by compare consecutive numbers
function bubbleSort (arr){
    let num = 0; //help to save a number without deleting it
    let counter = 1; //condition indicate that we no more need to sort
    while(counter != 0){
        counter = 0; //reset the counter for case that the array is sorted
        for(let i =0; i < arr.length - 1; i++){ //loop goes over all the arry  
            if(arr[i] > arr[i+1]){ //chack who's the bigger betwen consecutive numbers every time 
            // if the numbers don't sorted, swap them
            num = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = num;
            counter++; 
            }
        }
    }
    return arr;
}


// sort by select min value 
function selectionSort(arr){
    for(let j = 0; j < arr.length -1; j++){
        let miNum = arr[j]; //assignt variable for min value
        let index = j; //assignt variable for min value index
        for(let i = j; i < arr.length; i++){ //loop goes over all the arry. start again from the next index.
         if(arr[i] < miNum) {  // finding the lower value in the array and his index
            miNum = arr[i];
            index = i;
            }
        }
        let num = arr[j]; //num is just helper variable to keep value.
        // swap betwen the first value ( from the loop started) to min value:
        arr[j] = miNum; 
        arr[index] = num;
}
return arr;
}


// sort by insert one number each time to own correct index
let insertionSort = (arr) => {
    for (let j = 0; j < arr.length; j++){ //loop goes over all the arry
        let i = j; //Each time the index starts where he left off 
        //Checks whether the new number is smaller than the numbers before it and swap them:
        while(arr[i] > arr[i+1] && i >= 0){ 
            let num = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = num;
            i--; //This causes to while recheck on the current numbers
        }
    } return arr;
}



//-------part 2----------
const capitalizeLeatter = (letter) => {
    //chack which on of letter and return the capitalize letter
    if(letter == "a") return "A";
    if(letter == "b") return "B";
    if(letter == "c") return "C";
    if(letter == "d") return "D";
    if(letter == "e") return "E";
    if(letter == "f") return "F";
    if(letter == "g") return "G";
    if(letter == "h") return "H";
    if(letter == "i") return "I";
    if(letter == "j") return "J";
    if(letter == "k") return "K";
    if(letter == "l") return "L";
    if(letter == "m") return "M";
    if(letter == "n") return "N";
    if(letter == "o") return "O";
    if(letter == "p") return "P";
    if(letter == "q") return "Q";
    if(letter == "r") return "R";
    if(letter == "s") return "S";
    if(letter == "t") return "T";
    if(letter == "u") return "U";
    if(letter == "v") return "V";
    if(letter == "w") return "W";
    if(letter == "x") return "X";
    if(letter == "y") return "Y";
    if(letter == "z") return "Z";
    return false;
}

// 2.1 Capitalize the first letter of a string
let capitalize = (str) => {
    let Letters = capitalizeLeatter(str[0]); //send the first letter to capitalized
    for(let i = 1; i < str.length; i++){ 
        Letters += str[i];  //add to txt the rest letters
    }
    return Letters;
}


// 2.2 Capitalize the first letter of each word in a string
const capitalizeWords = (str) => {
    let txt = "";
    let endTxt = "";
    for (let i = 0; i < str.length; i++){
        txt += str[i];  //add to txt the word's letters 
        if (str[i] == " " || i == str.length-1){  //chack when the word end and send her to capitalize the first letter.
            endTxt += capitalize(txt); // use in previous function
            txt = "";
        }
    }
    return endTxt;
}

// 2.3 Reverse a string 
const reversString = (str) => {
    let txt = "";
    for (let i = 0; i < str.length; i++){
        txt += str[str.length - (i+1)];  //add to txt the letters from the end to the beginning
    }
    return txt;
}


// 2.4 trim a string - remove the white spaces from the beginning and end of a string
// -> -> -> I based that has only on space betwen two words
const trim = (str) => {
    let txt = ""; 
    for (let i = 0; i < str.length; i++){
        if(str[i] != " " || str[i-1] != " " && str[i+1] != " ") // add to txt only letters or space betwen words
        txt += str[i];
    }
    return txt;
}


//--------bonus--------

const pibonachi = (n) => {
    if (n == 1 || n == 2) return 1;
    let prevNum = 1;  //first number
    let piboNum = 1;  //second number
    let num = 0; //helper variable to save piboNum befor he changed
    for (let i = 1; i < n; i++){
        num = piboNum;  
        piboNum += prevNum; //sum every time two consecutive numbers to get new pibonachi number 
        prevNum = num; 
    }
    return prevNum;
}
// 1,1,2,3,5,8,13...
console.log(pibonachi(10));