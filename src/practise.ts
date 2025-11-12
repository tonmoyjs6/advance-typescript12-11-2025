const addStudentCourse=<T extends {id:number}>(studentInfo:T)=>{

    return{
        course:"NextWbdevelopment",
        ...studentInfo,
    }



}


const student1=addStudentCourse({
    id:12,
    name:"tonmoy",
    age:22,
    address:{
        home:"manikgonj"
    }
})
console.log(student1);

const student2=addStudentCourse({
    id:12,
    value:"fucking"
})

console.log(student2);
