for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_42")


function great_magicians(magicians_arr2 : string[]){
    for(var i = 0; i < magicians_arr2.length; i++){
        magicians_arr2[i] = "the great " + magicians_arr2[i]
    }
}

function show_magicians(magicians_arr2 : string[]){
    for(var i = 0; i < magicians_arr2.length; i++ ){
        console.log(magicians_arr2[i])
    }
}

const magicians_arr2 : string[] = ["juman", "Andrew", "hanby", "watson"]

show_magicians(magicians_arr2)
great_magicians(magicians_arr2)
