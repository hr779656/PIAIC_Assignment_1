for(let i = 0; i <= 2; i++){
    console.log("/////");
    
}
console.log("task_17")

let guest_list4 : string[] = ["Raju", "Luqman", "Nawaab", "Musawir", "kala", "panda"]

for(var i = 2 ; i <= guest_list4.length; i++){
    let Actual_guest = guest_list4.pop()
    console.log(`${Actual_guest} jani Sorry Dawat Cancel ho gaye \n`)
}

for(var i = 0; i < guest_list4.length; i++){
    console.log(`Dear! ${guest_list4[i]} you are still invited`)
}