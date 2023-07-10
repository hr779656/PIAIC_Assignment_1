for(var i = 0; i < 3; i++){
    console.log("/////")
}
console.log("task_45")

function createCar(manufacture : string, model_name : string, ...details : any[]) : any{
     const car : any = {
        manufacture,
        model_name,
     }

     for(var i = 0; i < details.length; i += 2){
        const key = details[i]
        const value = details[i + 1]
        car[key] = value
     }

     return car
}

const car1 = createCar("isuzu","shezore","color","silver")
const car2 = createCar("Honda","125","color","red","year","2018")
const car3 = createCar("toyota","suzuki","color","white","year","2020","speed","220")


console.log(car1)
console.log(car2)
console.log(car3)

