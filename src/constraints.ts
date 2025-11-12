
// !extends Diye amra rules set kore dilam j id and session sara kono value add hobe na profile making Function

const profileMaking=<T extends {id:number,session:string}>(people:T)=>{

    return {
        reference:"Tonmoy",
        ...people
    }

}

const firstProfile=profileMaking({
    name:"Rafiq",
    id:12,
    session:"first"
})
console.log(firstProfile);
const secodProfile=profileMaking({
    id:13,
    session:"second",
    name:"tonmoy"
})
console.log(secodProfile);