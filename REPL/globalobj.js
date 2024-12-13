console.log(__filename); //for path of file
console.log(__dirname); //for path of directory

// for set time out   (print one time after 1 second)
const text1=()=>{
    console.log("Hi Rose!");
}
setTimeout(text1, 1000);

// // for set time interval (print infinte) 
setInterval(()=>{
    console.log("You are Awesome!");
},1000);

//for clearinterval (for print perticular given time )
let count=1;
let id=()=>{
    console.log("You are Blessed!");
    if (count==5){
        clearInterval(text);
    }
    count++;
}
let text=setInterval(id,1000);