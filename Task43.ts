for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_43")


function make_great_magicians(magicians_arr3 : string[]){
    let greatMagicians : string[] = []
    for (var i = 0; i <magicians_arr3.length; i++){
        greatMagicians.push("the great " + magicians_arr3[i])
    }
    return greatMagicians
}

function show_magicians2(magicians_arr3 : string[]){
    for(var i = 0; i < magicians_arr3.length; i++){
        console.log(magicians_arr3[i])
    }
}


const magicians_arr3 : string[] = ["juman", "Andrew", "hanby", "watson"]
let greatMagicians : string[] = make_great_magicians(magicians_arr3)

console.log("orignal magicians\n")
show_magicians2(magicians_arr3)

console.log("----------------------")

console.log("great megicians\n")
show_magicians2(greatMagicians)