for(let i = 0; i <= 2; i++){
    console.log("/////");
    
}
console.log("task_21")

interface user_data {
    user_n : string,
    age : number,
    isloggedIn : Boolean
}

let User_data2 : user_data[] = [
    {
        user_n : "shakir",
        age : 24,
        isloggedIn : true
    },

    {
        user_n : "sharukh",
        age : 22,
        isloggedIn : false
    }

]

for(var i = 0; i < User_data2.length; i++){
    let data = User_data2[i]
    console.log(`username: ${data.user_n} \t age: ${data.age} \t isloggedIn: ${data.isloggedIn}`)
}