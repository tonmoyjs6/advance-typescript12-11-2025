


interface FriendList<T,X>{
    name:string;
    mobile:string;
    address: T;
    bike:X
}


type Adreess=
    {
    division:string,
    district:string
}


interface Bike{
    brandName:string
    model:string;


}

const myBestFrinend:FriendList<Adreess,Bike>={
    name:"Tanvir",
    mobile:"04567890-",
    address:{
        district:"manik",
        division:"ffffffff"
    },
    bike:{
        brandName:"ya",
        model:"hjh"
    }
}

// ! what we learn how to dynamically interface genrics use multiple value add