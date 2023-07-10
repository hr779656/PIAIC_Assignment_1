for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_32")

let current_user : string[] = ["Sameer", "iqbal", "faheem", "asher", "Ahmed"]
let new_user : string[] = ["Shawaiz", "Iqbal", "Arif", "Asher", "Huzaifa"]

for (let new_username of new_user) {
    let usernameExists: boolean = false;
  
    for (let current_username of current_user) {
      if (current_username.toLowerCase() === new_username.toLowerCase()) {
        usernameExists = true;
        break;
      }
    }
  
    if (usernameExists) {
      console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
      console.log(`The username '${new_username}' is available.`);
    }
  }
  
