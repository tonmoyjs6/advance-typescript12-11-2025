const user={
    name:"tonmoy",
    id:12,
    roll:15
}


// !property gule k paite help kore
// !r ai khane amra constraint use kort pari jat kore vul key dile detect korte sahhajjo kore
const valueOfobj=<T>(obj:T,key: keyof T)=>{
    return obj[key]
}

const result=valueOfobj(user,"name")
console.log(result);