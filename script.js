/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
   fname: "Naif",
   lname: "Alhammad",
   _gpa: 4,

   get fullName() {
      return this.fname + " " + this.lname;
   },

   get gpa() {
      return this._gpa;
   },

   set updateGpa(newGpa) {
      if (value >= 0 && value <= 4) {
         this._gpa = value;
      }
   },
}
console.log("Your full name is: " + student.fullName);
console.log("Your GPA is: " + student.gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courseMap = {
   SWE363: "Web Engineering",
   COE301: "Computer Organization",
   ICS202: "Data Structures",
   STAT319: "Probability & Statistics"
 };
 
 for (const code in courseMap) {
   console.log("Key: " + code + ", Value -> " + courseMap[code]);
 }
 

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const greeting = "Hello i'm KFUPMer!";
console.log("Length:", greeting.length);
console.log("First char:", greeting.charAt(0));
console.log("Last char:", greeting.charAt(greeting.length - 1));



// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const now = new Date();
const day = now.getDate();           // 1–31
const monthIdx = now.getMonth();     // 0–11 (0 = Jan)
const year = now.getFullYear();      // e.g., 2025
console.log("Today is " + day + " month: " + monthIdx + "Year: " + year);
console.log(`Today → day=${day}, monthIndex=${monthIdx}, year=${year}`);



// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums10 = [12, 3, 45, 7, 19, 28, 5, 60, 11, 34];
const minVal = Math.min(...nums10);
const maxVal = Math.max(...nums10);
console.log("nums10:", nums10);
console.log("Min:", minVal, "Max:", maxVal);


// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function maxOf(arr) {
   if (!Array.isArray(arr) || arr.length === 0) {
     throw new Error("Array must be non-empty.");
   }
   return arr.reduce((m, v) => (v > m ? v : m), arr[0]);
 }
 
 try {
   console.log("Max of nums10 =", maxOf(nums10));
   console.log("Max of [] =", maxOf([])); // triggers error
 } catch (e) {
   console.log("Caught error:", e.message);
 } finally {
   console.log("Finally block: cleanup or final message.");
 }
 

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const re = /ab/;

words.forEach((w) => {
  if (re.test(w)) {
    console.log("matches!");
  }
});

// End of Advance JavaScript Lab — good luck!
