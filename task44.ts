for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_44")

function makeSandwich (...items : string[]){
    console.log("making a Sandwaich! \n")
    for(var i = 0; i < items.length; i++){
        console.log(`-- ${items[i]}`)
    }

    console.log("enjoy your sandwich !! \n")
}

makeSandwich("musawir", "Ali", "Shafiuallah", "luqman")
makeSandwich("Kala", "Atif bhai", "Ubair")
makeSandwich("jawaad", "fahad", "saad", "ahmed", "osama" )
