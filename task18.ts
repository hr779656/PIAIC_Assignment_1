for(let i = 0; i <= 2; i++){
    console.log("/////");
    
}
console.log("task_18")

let cities : string[] = ["liyari", "Baldia", "Saddar", "Bansroad"]

console.log("orignal order: \t" + cities)
let Alphabetical_or = [...cities].sort();
console.log("Alphabetical Order: \t" + Alphabetical_or)
console.log("orignal order: \t" + cities)
let reverse_alphabatical = [...cities].sort().reverse();
console.log("reverse Alphabetical Order: \t" + reverse_alphabatical)
console.log("orignal order: \t" + cities)
console.log("reverse order: \t" + cities.reverse())
console.log("restored order:\t" + cities.reverse())
console.log("sorted in Alphabetical Order: \t" + cities.sort())
console.log("sorted in reverse Alphabetical Order: \t" + cities.sort().reverse())

