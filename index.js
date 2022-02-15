var name = prompt("Enter your name");
console.log(name)
var age = Number(prompt("Enter  your  age"));
console.log(age)
var Qul = prompt("Enter your Qualification");
console.log(Qul)

if(Qul === "Matric"){
    console.log("you can apply");
   
}
else if(Qul === "Intermediate"){
    console.log("Good you can Apply")
}
else if(Qul === "Bachlor"){
    console.log("very Good you can Apply")
}
 else{
     console.log("Enter your vailed Qualification")
 }