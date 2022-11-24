/*1323. Maximum 69 Number
You are given a positive integer num consisting
only of digits 6 and 9.

Return the maximum number you can get by changing 
at most one digit (6 becomes 9, and 9 becomes 6).

slove:*/

// let num = 696 ; let num2 = "";
// num = String(num);
// num = num.replace("6", "9");
// num = Number(num);
// console.log(num);
// console.log(typeof(num));


/* Given an integer array nums, return all the triplets
 [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
 and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

slove:

*/
// arr = [-2,-1,3,2,0,-2,0,-4,1]; 
// for (i = 0; i < arr.length; i++){
//     for (j = i+1; j < arr.length; j++){
//         for (i2 = j+1; i2 < arr.length; i2++){
//             if (arr[i] + arr[j] + arr[i2] == 0 
//                 && arr[i] != arr[j] 
//                 && arr[i] != arr[i2]
//                 && arr[j] != arr[i2])
//             console.log([i,j,i2]); 
//         }  
//     }
// }


// sun three numbers that closest to target
// for loop pass on all the numbers
// let arr = [1,3,1,2,0]; //4,6,3,5,
// let sum = 55, sumo,sumy;
// let target = 0;
// let arry = [];
// for (i = 0; i < arr.length; i++){
//     for (j = i+1; j < arr.length; j++){
//         for (k = j+1; k < arr.length; k++){
//             if (sum == 55){
//             sum = arr[i] + arr[j] + arr[k];
//             arry = [arr[i], arr[j], arr[k]];
//             //console.log(arry);
//             }
//             else {
//                 sumo = arr[i] + arr[j] + arr[k];
//                 //console.log(sumo);
//                 sum = closestNumber(sum, sumo, target);
//                 if (sum == sumo){
//                     arry = [arr[i], arr[j], arr[k]];
//                 }
                
//             }
//         }  
//     }
// }
// console.log(sum);
// console.log(arry);



// // Absolute value function
// function AbsoluteNumber(num){
//     if (num >= 0) return num;
//     else return num*-1;
// }

// // closest function 
// function closestNumber(preSum, curentSum, target){
//     let check = AbsoluteNumber (preSum - target);
//     let checky = AbsoluteNumber (curentSum - target);
//     if (check <= checky){
//         return preSum;
//     }
//     else{
//         return curentSum;
//     }
// }

// obj = {name: "evi",
//         age: 29,
//         namy: function() {console.log(this.age)},
//         fullName: function() {return this.name}
//     };
// obj.lastName = "ifrach";
// obj.learn = "development";
// obj.age = 30;

// console.log(obj);
// console.log(obj.fullName());

// str = "9.33333";
// console.log(str[0] );
// console.log(isNaN(str) );

// let matrix = [[1,1,1,],[2,2,1]];
// let n,sumNum=0,sumN=0, chack = "true";
// n= 4;
// for (i = 1; i <= n; i++){
//    sumN += i;}

// matrix.forEach(myFun);

// function myFun(value) {
//         value.forEach(myFun2);
//         return chack = (chack ==(sumNum == sumN));
//         }

//             function myFun2(value){
//             return sumNum += value;
//         }
// console.log(chack);

// const x = new Set();
// x.add("4");
// x.add("er");
// x.add("4");
// x.delete("4");
// let y = x.has("e");
// console.log(true);

// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// rows = 
// 1 > 3
// cols = {1,3,2}

// var checkValid = function(matrix) {  
//     for(let i =0; i<matrix.length;i++){
//         const cols = new Set(), rows = new Set(matrix[i]);
		
//         for(let j =0; j<matrix.length;j++){
//             if(matrix[j][i] > matrix.length) return false;
//             cols.add(matrix[j][i])
//         }
		
//         if(cols.size < matrix.length || rows.size < matrix.length) return false;
//     }
//     return true;
// };
// let matrix = [[1,2,3],[3,1,2],[2,3,1]];
// console.log(new Set(matrix).length);
//console.log(checkValid([[1,2,3],[3,1,2],[2,3,1]]));

// console.log(Math.floor(121/100));

// - no palindrom
//convert to string
//5 : i == 0; 1 < 3;
//str[i] != str [str.length - (i + 1)]
//length = 3 -> 121%10 == 121%(10*length -1)
//121%100 == 121%(10*(lingth-2))


// function myFun(size, val){
//     let matrix = [];
//     for (let i = 0; i < size; i++){
//         let innerArr = [];
//         for (let j = 0; j < size; j++){
//             innerArr[j] = val;
//         }
//         matrix[i] = innerArr;
//     }
//     matrix = setIndex(1,1,1,matrix);
//     console.log(matrix);

// }

// function setIndex (i, j, val, matrix){
//     matrix[i][j] = val;
//     return matrix;
// }
// myFun(3,0);



// lesson 24 - matrix:

function myFun(size, val = 0){
    let matrix = [];
    for (let i = 0; i < size; i++){
        let innerArr = [];
        for (let j = 0; j < size; j++){
            innerArr[j] = val;
        }
        matrix[i] = innerArr;
    }
    return matrix;

}

function diagonal(m, val = 1){
    for (let i = 0; i < m.length; i++){
        m[i][i] = val;
    }
    return m;
}

function diagonalT(m, val = 1){
    for (let i = 0; i < m.length; i++){
        m[i][m.length-(i+1)] = val;
    }
    return m;
}
function box(m, val = 1){
    for (let i = 0; i < m.length; i++){
        m[0][i] = m[m.length-1][i] = val;
        m[i][0] = m[i][m.length-1] = val;
    }
    return m;
}

function printMat(m){
    for( let i = 0; i < m.length; i++){
        console.log(...m[i]);
    }
}
function matrixToArray(m){
    let arr = [];
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m.length; j++){
            arr.push(m[i][j]);
        }
    }
    return arr;
}
function arrayToMatrix(arr){
    let matrix = myFun(Math.sqrt(arr.length)); //creat matrix
    let x = 0;  // index array
    //tow for loops that run all over the matrix:
    for(let i = 0; i < Math.sqrt(arr.length); i++){  
        for(let j = 0; j < Math.sqrt(arr.length); j++){
            matrix[i][j] = arr[x]; //assignt array value to matrix
            x++;
        }
    } return matrix;
}
function discoverIndex1(x, y, size){
    let counter = 0;
    //tow for loops that run all over the matrix:
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if((x == i)  && (y == j)) return counter; //the counter indicat the index array
            counter++;
        }
    }
    return "the index doesn't exist in the matrix";
}

function discoverIndex2(i, j, size){
    if(i > 3 || j > 3) return "the index doesn't exist in the matrix";
    return size * i + j;
}



//console.log(discoverIndex1(20,3,4));
console.log(discoverIndex2(4,0,4));
//printMat(box(myFun(6,0)));
//console.log(matrixToArray(myFun(3,0)));
//let arr = [1,2,3,4,5,6,7,8,9];
//console.log(arrayToMatrix(arr));






// var commonPrefix = function(s1,s2){
//     for(let i = 0; i < s1.length; i++){
//     if(s1[i] !== s2[i]){
//     return s1.slice(0,i);
//     }
//     }
//     return s1;
//     }
// function chack(arr){

// }


