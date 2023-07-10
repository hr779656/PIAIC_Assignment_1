for(let i = 0; i <= 2; i++){
    console.log("/////");
    
}
console.log("task_16")


let guest_list3 : string[] = ["Luqman", "Musawir", "kala"]

console.log("Good news! we Found a bigger dianing table \n")

guest_list3.unshift("Raju")
guest_list3.splice(2, 0, "Nawaab")
guest_list3.push("Panda")

for(var i = 0; i < guest_list3.length; i++){
    console.log(`hellow ${guest_list3[i]} \n you invited for dinner At my place`)
}