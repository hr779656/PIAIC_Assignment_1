let task : string = "task_3";
console.log(task)


let person_name : string = "hasnain raza"


function capitalize(str: string): string {
    if (str.length === 0) {
      return "";
    }
  
    const words: string[] = str.split(" ");
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

