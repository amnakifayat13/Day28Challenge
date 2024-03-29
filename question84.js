"use strict";
/* Replacing Text in a String: Write a function that takes a sentence and replaces all
instances of the word "JavaScript" with "TypeScript".*/
function replaceFunc(Sentence) {
    return Sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceFunc("I love JavaScript and JavaScript is awesome"));
