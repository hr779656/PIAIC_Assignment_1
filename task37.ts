for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_37")

function foo(size : string = "large", msg2 : string = "i loved python"){
    console.log(`size : ${size} \n msg : ${msg2}`)
}

foo()
foo("medium")
foo("small", "i loved pakistan")