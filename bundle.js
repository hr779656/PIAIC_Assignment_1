"use strict";
let task01 = "task_2";
console.log(task01.toUpperCase());
let p_name = "Eric";
let massage = `Hello ${p_name}, would you like to learn some Python today?`;
console.log(massage);
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
let task = "task_3";
console.log(task);
let person_name = "hasnain raza";
function capitalize(str) {
    if (str.length === 0) {
        return "";
    }
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        const firstChar = word.charAt(0).toUpperCase();
        const restOfString = word.slice(1).toLowerCase();
        return firstChar + restOfString;
    });
    return capitalizedWords.join(" ");
}
const capitalized = capitalize(person_name);
console.log("uppercase :" + person_name.toUpperCase());
console.log("lowercase :" + person_name.toLowerCase());
console.log("titlecase :" + capitalized);
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_4");
let author = "Albert Einstein";
let quots = "A person who never made a mistake never tried anything new.";
console.log(`${author} once said "${quots}"`);
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_5");
let famous_person = "Albert Einstein";
let quots2 = "A person who never made a mistake never tried anything new.";
let msg = `${author} once said "${quots}"`;
console.log(msg);
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_6");
const p_name2 = "\t   Hasnain Raza \n";
console.log("Name with whitespace" + p_name2);
const use_method = p_name2.trim();
console.log("Name Without whitespace " + use_method);
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_7");
console.log("Addtion: " + (5 + 3));
console.log("Subtraction: " + (15 - 7));
console.log("Multiplication: " + (4 * 2));
console.log("Division: " + (16 / 2));
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_8");
for (let i = 0; i <= 3; i++) {
    console.log(8);
}
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_9");
let fav_number = 0.1;
console.log(`this is my favourite Number ${fav_number}`);
for (var i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_10");
//  Name : Hasnain Raza
//  Date : 8-jul-2023
//  the program show massage for user 
let username = "sameer";
let user_msg = `Helloe ${username} !welcome my programe`;
console.log(user_msg);
//  the program calculate 2 values four opreations
let num_1 = 5;
let num_2 = 7;
console.log("Addition: " + (num_1 + num_2));
console.log("subtraction: " + (num_1 - num_2));
console.log("multiplication: " + (num_1 * num_2));
console.log("divsion: " + (num_1 / num_2));
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_11");
let friends_arr = ["luqman", "Kala", "Musawir"];
for (var i = 0; i < friends_arr.length; i++) {
    console.log(friends_arr[i]);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_12");
let friends_arr1 = ["luqman", "Kala", "Musawir"];
for (var i = 0; i < friends_arr1.length; i++) {
    console.log(`hellow! How are you ${friends_arr1[i]}?`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_13");
let transportationmodes = ["car", "motorcycle", "truck"];
for (var i = 0; i < transportationmodes.length; i++) {
    console.log(`I would like to own a ${transportationmodes[i]}`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_14");
let guest_list = ["Luqman", "Musawir", "kala"];
for (var i = 0; i < guest_list.length; i++) {
    console.log(`Hellow ${guest_list[i]}! \n you invited for dinner At my place`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_15");
let guest_list2 = ["Luqman", "Musawir", "kala"];
console.log(`${guest_list2[1]} is unable today dinner \n`);
guest_list2[1] = "Baber";
for (var i = 0; i < guest_list2.length; i++) {
    console.log(`Hellow ${guest_list2[i]}! \n you invited for dinner At my place`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_16");
let guest_list3 = ["Luqman", "Musawir", "kala"];
console.log("Good news! we Found a bigger dianing table \n");
guest_list3.unshift("Raju");
guest_list3.splice(2, 0, "Nawaab");
guest_list3.push("Panda");
for (var i = 0; i < guest_list3.length; i++) {
    console.log(`hellow ${guest_list3[i]} \n you invited for dinner At my place`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_17");
let guest_list4 = ["Raju", "Luqman", "Nawaab", "Musawir", "kala", "panda"];
for (var i = 2; i <= guest_list4.length; i++) {
    let Actual_guest = guest_list4.pop();
    console.log(`${Actual_guest} jani Sorry Dawat Cancel ho gaye \n`);
}
for (var i = 0; i < guest_list4.length; i++) {
    console.log(`Dear! ${guest_list4[i]} you are still invited`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_18");
let cities = ["liyari", "Baldia", "Saddar", "Bansroad"];
console.log("orignal order: \t" + cities);
let Alphabetical_or = [...cities].sort();
console.log("Alphabetical Order: \t" + Alphabetical_or);
console.log("orignal order: \t" + cities);
let reverse_alphabatical = [...cities].sort().reverse();
console.log("reverse Alphabetical Order: \t" + reverse_alphabatical);
console.log("orignal order: \t" + cities);
console.log("reverse order: \t" + cities.reverse());
console.log("restored order:\t" + cities.reverse());
console.log("sorted in Alphabetical Order: \t" + cities.sort());
console.log("sorted in reverse Alphabetical Order: \t" + cities.sort().reverse());
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_19");
let total_guest = ["sameer", "Kala", "musawir"];
console.log(`inviting ${total_guest.length} people at dinner`);
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_20");
console.log("list of languages");
let languages = ["pashto", "urdu", "balochi", "sindhi"];
for (var i = 0; i < languages.length; i++) {
    console.log(languages[i]);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_21");
let User_data2 = [
    {
        user_n: "shakir",
        age: 24,
        isloggedIn: true
    },
    {
        user_n: "sharukh",
        age: 22,
        isloggedIn: false
    }
];
for (var i = 0; i < User_data2.length; i++) {
    let data = User_data2[i];
    console.log(`username: ${data.user_n} \t age: ${data.age} \t isloggedIn: ${data.isloggedIn}`);
}
for (let i = 0; i <= 2; i++) {
    console.log("/////");
}
console.log("task_21");
const Arr = [1, 2, 3, 4,];
//  intentional error index number value undefind 
console.log(Arr[10]);
//  correct this error 
console.log(Arr[2]);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_23");
let car = "surf";
console.log("Is car == 'surf'? this opreator simply checked equal values");
console.log(`${car == "surf"} \t "this is true"`);
console.log(`${car == "honda"} \t "this is False"`);
console.log("Is car === 'surf'? this Opreator is Checked Value datatype and letter small and capital");
console.log(`${car === "surf"} \t "this is true"`);
console.log(`${car === "Surf"} \t "this is false"`);
console.log("Is car != 'surf'? this Not opreator this worked true condition false and false condition true");
console.log(`${car != "surf"} \t "this is false"`);
console.log(`${car != "honda"} \t "this is true"`);
console.log("Is car !== 'surf' this not opreator checked data type");
console.log(`${car !== "surf"} \t "this is false"`);
console.log(`${car !== "honda"} \t "this is true"`);
console.log("Is car < 'toyota' this is greaterthen and lessthe < > ");
console.log(`${car < "toyota"} \t "this is  true"`);
console.log(`${car > "toyota"} \t "this is  false"`);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_24");
let equality = "apple";
console.log("test for equality string");
console.log("'apple' == 'apple':", equality == "apple");
console.log("'apple' == 'orange':", equality == "orange");
console.log("test for inequality string");
console.log("'apple' != 'apple':", equality != "apple");
console.log("'apple' != 'orange':", equality != "orange");
console.log("test using for lowercase method");
console.log("'HELLOW' == 'hellow':", "HELLOW".toLowerCase() == "hellow");
console.log("'WORLD' == 'world':", "WORLD".toLowerCase() == "world");
console.log("Numerical Test");
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 <= 10:", 10 <= 5);
console.log("10 >= 5:", 10 >= 5);
console.log("Test using 'and' And 'or' opreator");
console.log("true && true:", true && true);
console.log("[] && false:", false && []);
console.log("false || true:", false || true);
console.log("fasle || '':", "" || false);
let fruits = ["apple", "Mango"];
console.log("Test whether an item is in an array");
console.log("'apple' in fruits", fruits.includes("apple"));
console.log("'grapes' in fruits", fruits.includes("grapes"));
console.log("Test whether an item is in an array");
console.log("'apple' is not in fruits", !fruits.includes("apple"));
console.log("'grapes' is not in fruits", !fruits.includes("grapes"));
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_25");
const color = "green";
//  Pass Condition =========
if (color === "green") {
    console.log("you earned 5 Coins");
}
//  Fail Condition ============
if (color === "yellow") {
    console.log("you loss 5 Coins");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_26");
let t_shirt = "blue";
if (t_shirt === "blue") {
    console.log("this blue t_shirt price 2$");
}
else {
    console.log("No it's shirt is not avalaible");
}
let dish = "Biryani";
if (dish === "Biryani") {
    console.log("IS so Delishez");
}
else {
    console.log("but Bakra");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_27");
let milk_sahke = "Banana";
if (milk_sahke === "Banana") {
    console.log("yummi");
}
else if (milk_sahke === "Mango") {
    console.log("bHot Awla");
}
else if (milk_sahke === "strawberry") {
    console.log("one more jug");
}
let milk_sahke2 = "strawberry";
if (milk_sahke2 === "Banana") {
    console.log("yummi");
}
else if (milk_sahke2 === "Mango") {
    console.log("bHot Awla");
}
else if (milk_sahke2 === "strawberry") {
    console.log("one more jug");
}
let milk_sahke3 = "Mango";
if (milk_sahke3 === "Banana") {
    console.log("yummi");
}
else if (milk_sahke3 === "Mango") {
    console.log("bHot Awla");
}
else if (milk_sahke3 === "strawberry") {
    console.log("one more jug");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_28");
let person_age = 28;
if (person_age < 2) {
    console.log("the person is a baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("the person is a toddler");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("the person is a kid");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("the person is a teenager");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("the person is an Adult");
}
else {
    console.log("the person is an elder");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_29");
let fav_fruits = ["apple", "mango", "Banana"];
if (fav_fruits.includes("apple")) {
    console.log("you realy like apples!");
}
if (fav_fruits.includes("mango")) {
    console.log("you realy like mangoes!");
}
if (fav_fruits.includes("strawberry")) {
    console.log("you realy like strawberries!");
}
if (fav_fruits.includes("Banana")) {
    console.log("you realy like Bananas!");
}
if (fav_fruits.includes("peach")) {
    console.log("you realy like peachies!");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_30");
let user_arr = ["admin", "shahmeer", "salman", "sumail"];
for (var i = 0; i < user_arr.length; i++) {
    if (user_arr[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user_arr[i]}, thank you for logging in again.`);
    }
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_31");
let user_arr2 = ["admin", "shahmeer", "salman", "sumail"];
if (user_arr2.length === 0) {
    console.log("we find some users");
}
else {
    for (var i = 0; i < user_arr2.length; i++) {
        if (user_arr2[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user_arr2[i]}, thank you for logging in again.`);
        }
    }
}
user_arr2 = [];
if (user_arr2.length === 0) {
    console.log("we find some users");
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_32");
let current_user = ["Sameer", "iqbal", "faheem", "asher", "Ahmed"];
let new_user = ["Shawaiz", "Iqbal", "Arif", "Asher", "Huzaifa"];
for (let new_username of new_user) {
    let usernameExists = false;
    for (let current_username of current_user) {
        if (current_username.toLowerCase() === new_username.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username '${new_username}' is available.`);
    }
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_33");
let Num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var i = 0; i < Num_array.length; i++) {
    let num;
    if (Num_array[i] === 1) {
        num = "1st";
    }
    else if (Num_array[i] === 2) {
        num = "2nd";
    }
    else if (Num_array[i] === 3) {
        num = "3rd";
    }
    else {
        num = `${Num_array[i]}th`;
    }
    console.log(`${Num_array[i]} => ${num}`);
}
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_34");
let pizzas = ["Pepperoni", "Margherita", "Supreme"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(`i like ${pizzas[i]} pizza`);
}
console.log("---------------------\n");
console.log("i really like Ande wala burger");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_35");
let pets = ["Dog", "Cat", "Horse"];
for (var i = 0; i < pets.length; i++) {
    console.log(`A ${pets[i].toLowerCase()} would make a great pet.`);
}
console.log("----------------------\n");
console.log("Any of these animals would make a great pet!");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_36");
function make_shirt(size, msg) {
    console.log(`size : ${size} \n msg : ${msg}`);
}
make_shirt("xl", "i like t-shirts");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_37");
function foo(size = "large", msg2 = "i loved python") {
    console.log(`size : ${size} \n msg : ${msg2}`);
}
foo();
foo("medium");
foo("small", "i loved pakistan");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_37");
function Describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
Describe_city("karachi");
Describe_city("Dubai", "UAE");
Describe_city("pishawar");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_39");
function myFunc(city, country) {
    return `${city} ${country}`;
}
console.log(myFunc("karachi", "pakistan"));
console.log(myFunc("lahore", "pakistan"));
console.log(myFunc("pishawar", "pakistan"));
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_40");
function make_album(artist, title, tracks) {
    const album = {
        artist,
        title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("sikander sanam", "album1", 6);
const album2 = make_album("umer shareef", "album2", 3);
const album3 = make_album("shakeel siddiqe", "album3");
console.log(album1);
console.log(album2);
console.log(album3);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_41");
function megicians(megicians_arr) {
    for (var i = 0; i < megicians_arr.length; i++) {
        console.log(megicians_arr[i]);
    }
}
let megicians_arr = ["juman", "Andrew", "hanby", "watson"];
megicians(megicians_arr);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_42");
function great_magicians(magicians_arr2) {
    for (var i = 0; i < magicians_arr2.length; i++) {
        magicians_arr2[i] = "the great " + magicians_arr2[i];
    }
}
function show_magicians(magicians_arr2) {
    for (var i = 0; i < magicians_arr2.length; i++) {
        console.log(magicians_arr2[i]);
    }
}
const magicians_arr2 = ["juman", "Andrew", "hanby", "watson"];
show_magicians(magicians_arr2);
great_magicians(magicians_arr2);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_43");
function make_great_magicians(magicians_arr3) {
    let greatMagicians = [];
    for (var i = 0; i < magicians_arr3.length; i++) {
        greatMagicians.push("the great " + magicians_arr3[i]);
    }
    return greatMagicians;
}
function show_magicians2(magicians_arr3) {
    for (var i = 0; i < magicians_arr3.length; i++) {
        console.log(magicians_arr3[i]);
    }
}
const magicians_arr3 = ["juman", "Andrew", "hanby", "watson"];
let greatMagicians = make_great_magicians(magicians_arr3);
console.log("orignal magicians\n");
show_magicians2(magicians_arr3);
console.log("----------------------");
console.log("great megicians\n");
show_magicians2(greatMagicians);
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_44");
function makeSandwich(...items) {
    console.log("making a Sandwaich! \n");
    for (var i = 0; i < items.length; i++) {
        console.log(`-- ${items[i]}`);
    }
    console.log("enjoy your sandwich !! \n");
}
makeSandwich("musawir", "Ali", "Shafiuallah", "luqman");
makeSandwich("Kala", "Atif bhai", "Ubair");
makeSandwich("jawaad", "fahad", "saad", "ahmed", "osama");
for (var i = 0; i < 3; i++) {
    console.log("/////");
}
console.log("task_45");
function createCar(manufacture, model_name, ...details) {
    const car = {
        manufacture,
        model_name,
    };
    for (var i = 0; i < details.length; i += 2) {
        const key = details[i];
        const value = details[i + 1];
        car[key] = value;
    }
    return car;
}
const car1 = createCar("isuzu", "shezore", "color", "silver");
const car2 = createCar("Honda", "125", "color", "red", "year", "2018");
const car3 = createCar("toyota", "suzuki", "color", "white", "year", "2020", "speed", "220");
console.log(car1);
console.log(car2);
console.log(car3);
