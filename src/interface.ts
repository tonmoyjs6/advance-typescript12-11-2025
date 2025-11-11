

// // // // // // // type User={
// // // // // // //     name:string;

// // // // // // //     roll:number;
// // // // // // //     addres:{
// // // // // // //         name:string;
// // // // // // //         homeno:string[]
// // // // // // //     }
// // // // // // // }

// // // // // // // const profile:User={
// // // // // // //     name:"Tonmoy",
// // // // // // //     roll:12,
// // // // // // //     addres:{
// // // // // // //         name:"kamal ataturk",
// // // // // // //         homeno:["gh","kh"]

// // // // // // //     }
// // // // // // // }

// // // // // // // const {name,roll,addres:{name:kono,homeno}}=profile

// // // // // // // console.log(name,kono,homeno);

// // // // // // // 

// // // // // // type Role={
// // // // // //     name:string;
// // // // // //     description:string;
// // // // // // }
// // // // // // type Manager={
// // // // // //     experince:string
// // // // // // }

// // // // // // // intersection
// // // // // // type ManagerRole= Role & Manager

// // // // // // type IsBollean=boolean

// // // // // // const isLoggedIn:IsBollean=true


// // // // // interface User{
// // // // //     name:string;
// // // // //     roll:number;

// // // // // }

// // // // // interface Profile{
// // // // //     profilePicture:string;

// // // // // }

// // // // // interface Admin extends User,Profile{
// // // // //     address:{
// // // // //         homename:string
// // // // //     }
// // // // // }

// // // // // const myprofile:Admin={
// // // // //     name:"tonmoy",
// // // // //     roll:12,
// // // // //     profilePicture:"xcvb",
// // // // //     address:{
// // // // //         homename:"tyuik"
// // // // //     }

    
// // // // // }

// // // // // type with function

// // // // type Add=(num1:number,num2:number)=>number

// // // // const add:Add=(num1,num2):number=>{
// // // //     return num1+num2
// // // // }

// // // interface Add{
// // //     (num1:number,num2:number):number
// // // }

// // interface FriendS{
// //     [index:number]:string
// // }

// // const friends:FriendS=["h","k"]


// // interface in function


// interface Biyog{
//     (num1:number,num2:number):number
// }


// const biyogmath:Biyog=(num1,num2)=>{
//     return num1-num2
// }


// console.log(biyogmath(10,5));

interface Gun{
    (value1:number,value2:number):number
}

const gunMath:Gun=(value1,value2):number=>value1*value2
const total=gunMath(20,40)
console.log(total);


interface ArrayMaker{
    [index:number]:number
}


const arr1:ArrayMaker=[1200,344]


// not use map in interface 

// ! what we learn function,array use in interface