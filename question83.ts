/* Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to 
lowercase, and logs both.*/

let convertCase = function(str: string) {
    let upperStr = str.toUpperCase();
    let lowerStr = str.toLowerCase();
    console.log("UpperCase:", upperStr, "LowerCase:", lowerStr);
    
}
convertCase("Hello World");
 