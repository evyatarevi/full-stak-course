// let Data;
// let json = fetch('data_base_l1.json')
//             .then(respons => respons.json())
//             .then(data => Data = data);


//             async function get_users(){
//                 const obUsers =  await fetch("data_base_l1.json")
//                                     .then(response => response.json());
//                 let names =[];
//                 let counter = 0;
//                 for (let key in obUsers) {
//                     names.push(obUsers[key].name);
//                     counter++;
//                 }
//              return `${names} \n counter of users  ${counter}`;
//             }
//             get_users()
//             .then (x => console.log(x));



//             async function get_users_age(){
//                 const response = await fetch("./data_base_l2.json");
//                 const data_a = await response.json();
//                 let arru = [];
//                 // let arra = [];
//                 for (let key in data_a.users){
//                     arru.push([data_a.users[key].name,data_a.users[key].age])
//                 } return arru;
//             }
//             get_users_age()
//             .then(y => console.log(y))

//             // Pratice 2 - Fill in the empty functions 


// // Q1: instanceOf counts the number of instances of e in a collection
// let instanceOf = (element, collection) => {}

// //instanceOf(1, [1, 2, 3, 1, 1, 4]) // 3
// //instanceOf("a", "banana") // 3
// //instanceOf(5, {a: 5, b: 5}) // 2


// // Q2: 
//     // 1.
//     //count the number of users in "data_base_l1.json" 
//     //and return a list of their names

//     // 2.
//     // in "data_base_l2.json" and return a list of lists with size 2  -> [[name, age], [name, age], ...]
//     // each list contains the name and the age of the user

    // 3.
    // in "data_base_l3.json"
    // return a list of emails that are created from name+_+last_name + "@gmail.com" 

    // for example: "john doe" -> john_doe@gmail.com

    // async function get_mail(){
    //                     const response = await fetch("./data_base_l3.json");
    //                     const data_a = await response.json();
    //                     let arru = [];
    //                     // let arra = [];
    //                     for (let key in data_a.users){
    //                         arru.push(data_a.users[key].name + "_" + data_a.users[key].last_name + "@gmail.com")
    //                     } return arru;
    //                 }
    //                 get_mail()
    //                 .then(y => console.log(y))


// 







// Q3:
    // 1. create a login page (you can reuse the code from the previous lesson)
    // 2. assume that the user is logged in if the user name is "admin" and the password is "1234"
    // 3. if the user is logged in, show a welcome message and table of all users in "data_base_l3.json" and their emails
  
let Data;

//more option don't waite to fetch: use in fetch when the html page load.

const buildTable = async () => {
    await fetch("data_base_l3.json")
           .then(res => res.json())
            .then(res => Data = res);
            console.log(Data)
    for(let key in Data.users){
    let tr = document.createElement("tr");
        for(let key2 in Data.users[key]){
           console.log(Data.users[key][key2])
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(Data.users[key][key2]));
        tr.appendChild(td);
        }
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(Data.users[key].name +"_" + Data.users[key].last_name + "@gmail.com"));
        tr.appendChild(td);
        document.getElementById("tab").appendChild(tr);
    }
    document.getElementById("tab").style.display = "block";    
}
function login() {
    if((document.getElementById("firstName").value == "admin") && 
    (document.getElementById("lastName").value == 1234))
        buildTable();
    else alert("wrong name or password, try again")
}


  
