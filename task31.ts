for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_31")

let user_arr2 : string[] = ["admin", "shahmeer", "salman", "sumail"]

if(user_arr2.length === 0){
    console.log("we find some users")
}else{
    for(var i = 0; i < user_arr2.length; i++){
        if(user_arr2[i] === "admin"){
            console.log("Hello admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${user_arr2[i]}, thank you for logging in again.`)
        }
    }
}

user_arr2 = [];

if(user_arr2.length === 0){
    console.log("we find some users")
}