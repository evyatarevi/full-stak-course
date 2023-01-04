// 1
// let fun = ()=> {
//     let str = document.getElementById("str").value;
//     let newStr = "";
//     for(let i = 0; i < str.length; i++){
//         if((str[i] != "a") && (str[i] != "e") && (str[i] != "o") && (str[i] != "i") && (str[i] != "u"))
//             newStr += str[i]
//     }
//   alert(newStr);
// }
 
//2
// let fun = ()=> {
//     let arr = document.getElementById("str").value;
//     let newArr = [];
//     for (let i =0; i< arr.length; i++){
//         if((arr[i]%2) == 0){
//             newArr.push(arr[i])
//     }}
//     alert(newArr)
// }

//3

// let fun = ()=> {
//     let arr = ["banana", "apple"];
//     let newArr = [];
    
//     for (let i =0; i< arr.length; i++){
//         if(arr[i].length > 5)
//             newArr.push(arr[i]);
//         }
//         alert(newArr)
// }

//4
// let fun = (arr, property, valueProperty)=>{
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let key in arr[i]){
//             if (key == property  &&  arr[i][key] == valueProperty)
//                 newArr.push(arr[i]);
//         }
//     }
//     return newArr;

// }

//5
// let fun = (str,num)=> {
//     let newStr = "";
//     for(let i = 0; i < num; i++){
//         newStr += str;
//     }
//     return newStr;
// }


//Excersice 2
let polindrome = (str)=>{
    let arr = [] //will contain all polindrom strings
    let maxPol = ""; //will be the longer polindrom
    for(let i = 0; i < str.length; i++){ //Goes over the whole str and checking suspicion for polindrom
        for(let j = i+1; j < str.length; j++){
            if(str[j] == str[i]){
               let x = checkPol(str,i,j); // Checking if it really is polindrom
               if(x != undefined) //x is undefined if current str isn't polindrom
                    arr.push(x); //if it is polindrom, push to arr
            }
        }
    }
    for(let i = 0; i < arr.length; i++){ //Goes over the whole arr and check the longer polindrom
        if((arr[i].length) > (arr[i+1].length))
            maxPol = arr[i];
        else 
            maxPol = arr[i+1];
    
    return ("All polindrom strings are: " + arr + " | The longer polindrom is: " + maxPol);
}}

//Checking if it really is polindrom:
let checkPol = (str,i,j)=> {
    let newStr = "";
    let bool = true;
    let x = 0;
    for(let k = i; k <= j; k++){
        newStr += str[k];
        if(str[k] != str[j-x])
            bool = false;
        x++;
    }
    if(bool == true)
        return newStr;
}
