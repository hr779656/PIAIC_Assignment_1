for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_30")

let user_arr : string[] = ["admin", "shahmeer", "salman", "sumail"]

for(var i = 0; i < user_arr.length; i++){
    if(user_arr[i] === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${user_arr[i]}, thank you for logging in again.`)
    }
}