for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_33")

let Num_array : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

for(var i = 0; i < Num_array.length; i++){
    let num : string;

    if(Num_array[i] === 1){
        num = "1st"
    }else if(Num_array[i] === 2){
        num = "2nd"
    }else if(Num_array[i] === 3){
        num = "3rd"
    }else{
        num = `${Num_array[i]}th`
    }

    console.log(`${Num_array[i]} => ${num}`)
}