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
    if(i > size || j > size) return "the index doesn't exist in the matrix";
    return size * i + j;
}



//console.log(discoverIndex1(20,3,4));
console.log(discoverIndex2(4,0,4));
//printMat(box(myFun(6,0)));
//console.log(matrixToArray(myFun(3,0)));
//let arr = [1,2,3,4,5,6,7,8,9];
//console.log(arrayToMatrix(arr));