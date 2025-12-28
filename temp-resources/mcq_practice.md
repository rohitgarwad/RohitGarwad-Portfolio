# 📝 MERN Stack MCQ Practice Questions

## Table of Contents
- [JavaScript MCQs (20 Questions)](#javascript-mcqs)
- [Node.js MCQs (10 Questions)](#nodejs-mcqs)
- [Express.js MCQs (10 Questions)](#expressjs-mcqs)
- [MongoDB MCQs (10 Questions)](#mongodb-mcqs)
- [React.js MCQs (15 Questions)](#reactjs-mcqs)
- [Answers & Explanations](#answers--explanations)

---

## JavaScript MCQs

### Q1. What is the output?
```javascript
console.log(typeof null);
```
A) `null`  
B) `undefined`  
C) `object`  
D) `NaN`

---

### Q2. What is the output?
```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a.length);
```
A) `3`  
B) `4`  
C) `undefined`  
D) Error

---

### Q3. What is the output?
```javascript
console.log(1 + "2" + 3);
```
A) `6`  
B) `123`  
C) `"123"`  
D) `"33"`

---

### Q4. What is the output?
```javascript
console.log([] == false);
console.log([] === false);
```
A) `true, true`  
B) `true, false`  
C) `false, false`  
D) `false, true`

---

### Q5. What is the output?
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
```
A) `0, 1, 2`  
B) `3, 3, 3`  
C) `undefined, undefined, undefined`  
D) `0, 0, 0`

---

### Q6. Which is NOT a valid way to create a function?
A) `function foo() {}`  
B) `const foo = function() {}`  
C) `const foo = () => {}`  
D) `function = foo() {}`

---

### Q7. What is the output?
```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);
```
A) `2`  
B) `1`  
C) `undefined`  
D) Error

---

### Q8. What is a closure?
A) A function that is declared inside another function  
B) A function that has access to variables from its outer scope even after the outer function returns  
C) A way to close a browser window  
D) A method to end a loop

---

### Q9. What is the output?
```javascript
console.log("5" - 3);
console.log("5" + 3);
```
A) `2, 8`  
B) `"53", "53"`  
C) `2, "53"`  
D) `NaN, "53"`

---

### Q10. What does `Array.prototype.reduce()` return?
A) A new array  
B) A boolean  
C) A single accumulated value  
D) undefined

---

### Q11. What is the output?
```javascript
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length);
```
A) `3`  
B) `4`  
C) `10`  
D) `11`

---

### Q12. Which statement about `let` is FALSE?
A) `let` is block-scoped  
B) `let` can be redeclared in the same scope  
C) `let` is not hoisted to the top like `var`  
D) `let` creates a Temporal Dead Zone

---

### Q13. What is the output?
```javascript
Promise.resolve(1)
    .then(x => x + 1)
    .then(x => { throw new Error('Error!') })
    .catch(() => 1)
    .then(x => x + 1)
    .then(x => console.log(x));
```
A) `3`  
B) `2`  
C) `Error`  
D) `undefined`

---

### Q14. What is the output?
```javascript
console.log(0.1 + 0.2 === 0.3);
```
A) `true`  
B) `false`  
C) `NaN`  
D) Error

---

### Q15. What is the output of the event loop example?
```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
```
A) `1, 2, 3, 4`  
B) `1, 4, 2, 3`  
C) `1, 4, 3, 2`  
D) `1, 3, 4, 2`

---

### Q16. What does `===` check?
A) Value only  
B) Type only  
C) Value and type  
D) Reference only

---

### Q17. What is the output?
```javascript
const func = (a, b = a * 2) => a + b;
console.log(func(5));
```
A) `NaN`  
B) `15`  
C) `10`  
D) `undefined`

---

### Q18. Which method creates a new array?
A) `push()`  
B) `pop()`  
C) `map()`  
D) `splice()`

---

### Q19. What is the output?
```javascript
const person = { name: 'John' };
const { name: myName } = person;
console.log(myName);
```
A) `undefined`  
B) `John`  
C) `{ name: 'John' }`  
D) Error

---

### Q20. Arrow functions do NOT have:
A) Parameters  
B) Return statement  
C) Their own `this`  
D) Curly braces

---

## Node.js MCQs

### Q21. Node.js is:
A) A programming language  
B) A JavaScript runtime environment  
C) A database  
D) A web browser

---

### Q22. Which module is used to handle file operations?
A) `http`  
B) `fs`  
C) `path`  
D) `url`

---

### Q23. What is the purpose of `package.json`?
A) Store application data  
B) Define project metadata and dependencies  
C) Configure the database  
D) Define routing

---

### Q24. Which is TRUE about Node.js?
A) It is multi-threaded by default  
B) It uses synchronous I/O  
C) It is single-threaded with event loop  
D) It cannot handle concurrent requests

---

### Q25. What does `npm install --save-dev` do?
A) Installs package globally  
B) Adds package to `dependencies`  
C) Adds package to `devDependencies`  
D) Removes the package

---

### Q26. What is the output?
```javascript
const path = require('path');
console.log(path.extname('index.html'));
```
A) `index`  
B) `.html`  
C) `html`  
D) `index.html`

---

### Q27. Which is used to read environment variables?
A) `process.env`  
B) `global.env`  
C) `require.env`  
D) `module.env`

---

### Q28. What is middleware in the context of Node.js?
A) Database connector  
B) Functions that execute between request and response  
C) A type of database  
D) File system module

---

### Q29. The `require()` function is used to:
A) Export modules  
B) Import modules  
C) Create modules  
D) Delete modules

---

### Q30. Which method reads a file synchronously?
A) `fs.readFile()`  
B) `fs.readFileSync()`  
C) `fs.read()`  
D) `fs.open()`

---

## Express.js MCQs

### Q31. Express.js is a:
A) Database  
B) Web framework for Node.js  
C) Programming language  
D) Template engine

---

### Q32. Which method handles GET requests?
A) `app.post()`  
B) `app.get()`  
C) `app.put()`  
D) `app.fetch()`

---

### Q33. What is `req.params` used for?
A) Query string parameters  
B) Route parameters  
C) Request body  
D) Request headers

---

### Q34. What is the correct order of middleware execution?
A) Random order  
B) Alphabetical order  
C) Order they are defined  
D) Reverse order

---

### Q35. Which middleware is used to parse JSON body?
A) `express.static()`  
B) `express.json()`  
C) `express.urlencoded()`  
D) `express.Router()`

---

### Q36. How do you send a JSON response?
A) `res.send()`  
B) `res.json()`  
C) `res.write()`  
D) Both A and B

---

### Q37. What status code indicates "Created"?
A) `200`  
B) `201`  
C) `204`  
D) `301`

---

### Q38. In Express error-handling middleware, how many parameters are there?
A) 2  
B) 3  
C) 4  
D) 5

---

### Q39. What does `next()` do in middleware?
A) Ends the request  
B) Passes control to the next middleware  
C) Sends response  
D) Throws an error

---

### Q40. Which is used for modular routing?
A) `express.static()`  
B) `express.Router()`  
C) `express.json()`  
D) `express.urlencoded()`

---

## MongoDB MCQs

### Q41. MongoDB is a:
A) Relational database  
B) NoSQL document database  
C) Graph database  
D) Key-value store only

---

### Q42. What is a Collection in MongoDB?
A) Equivalent to a row in SQL  
B) Equivalent to a table in SQL  
C) Equivalent to a database in SQL  
D) Equivalent to a column in SQL

---

### Q43. What is the default primary key in MongoDB?
A) `id`  
B) `_id`  
C) `key`  
D) `primary_id`

---

### Q44. Which operator is used for "greater than"?
A) `$greater`  
B) `$gt`  
C) `$gte`  
D) `$more`

---

### Q45. What does `$push` do?
A) Removes element from array  
B) Adds element to array  
C) Updates array element  
D) Counts array elements

---

### Q46. What is Mongoose?
A) A MongoDB driver  
B) An ODM (Object Data Modeling) library  
C) A database  
D) A query language

---

### Q47. Which method finds one document and updates it?
A) `updateOne()`  
B) `findOneAndUpdate()`  
C) `findAndModify()`  
D) `updateById()`

---

### Q48. What does `populate()` do in Mongoose?
A) Adds new documents  
B) Fills in referenced documents  
C) Deletes documents  
D) Counts documents

---

### Q49. Which is used to define field validations in Mongoose?
A) Model  
B) Schema  
C) Collection  
D) Document

---

### Q50. What does `$match` do in aggregation?
A) Joins collections  
B) Filters documents  
C) Groups documents  
D) Sorts documents

---

## React.js MCQs

### Q51. React is a:
A) Framework  
B) Library  
C) Language  
D) Database

---

### Q52. What is JSX?
A) JavaScript XML - syntax extension  
B) A database query language  
C) A CSS preprocessor  
D) A testing framework

---

### Q53. What is the Virtual DOM?
A) The actual browser DOM  
B) An in-memory representation of the real DOM  
C) A JavaScript file  
D) A CSS file

---

### Q54. Which hook is used for state management?
A) `useEffect`  
B) `useState`  
C) `useContext`  
D) `useRef`

---

### Q55. When does `useEffect` with empty dependency array run?
A) On every render  
B) Only on mount  
C) Never  
D) On unmount only

---

### Q56. What is the correct way to update state?
```javascript
const [count, setCount] = useState(0);
```
A) `count = 1`  
B) `count++`  
C) `setCount(1)`  
D) `this.state.count = 1`

---

### Q57. Keys in React lists should be:
A) Random  
B) Index always  
C) Unique among siblings  
D) Global unique

---

### Q58. What does `useRef` return?
A) State value  
B) Mutable ref object with `.current`  
C) Context value  
D) Callback function

---

### Q59. Which hook is similar to Redux?
A) `useState`  
B) `useReducer`  
C) `useEffect`  
D) `useMemo`

---

### Q60. What does `useMemo` do?
A) Memoizes component  
B) Memoizes computed value  
C) Memoizes callback function  
D) Creates ref

---

### Q61. What does `useCallback` do?
A) Memoizes component  
B) Memoizes computed value  
C) Memoizes callback function  
D) Creates ref

---

### Q62. Props in React are:
A) Mutable  
B) Read-only  
C) Global  
D) Optional always

---

### Q63. What is prop drilling?
A) Creating props  
B) Passing props through many layers  
C) Deleting props  
D) Validating props

---

### Q64. Which is used to avoid prop drilling?
A) `useState`  
B) `useContext`  
C) `useRef`  
D) `useEffect`

---

### Q65. Controlled components have:
A) No state  
B) State managed by DOM  
C) State managed by React  
D) No props

---

## Answers & Explanations

| Q# | Answer | Explanation |
|----|--------|-------------|
| 1 | C | `typeof null` returns `"object"` - this is a known JavaScript bug |
| 2 | B | Arrays are reference types; `b` points to same array as `a` |
| 3 | C | String concatenation: `1 + "2"` = `"12"`, then `"12" + 3` = `"123"` |
| 4 | B | `==` does type coercion (true), `===` checks type too (false) |
| 5 | B | `var` is function-scoped; by the time callbacks run, `i` is 3 |
| 6 | D | Invalid syntax |
| 7 | B | `Object.freeze()` prevents modifications |
| 8 | B | Closure = function + its lexical environment |
| 9 | C | `-` coerces to number, `+` concatenates strings |
| 10 | C | `reduce()` returns single accumulated value |
| 11 | D | Sparse array; length = highest index + 1 |
| 12 | B | `let` cannot be redeclared in the same scope |
| 13 | B | catch returns 1, then 1 + 1 = 2 |
| 14 | B | Floating-point precision issue |
| 15 | C | Sync first, then microtasks (Promise), then macrotasks (setTimeout) |
| 16 | C | Strict equality checks both value and type |
| 17 | B | Default param `b = 5 * 2 = 10`, so `5 + 10 = 15` |
| 18 | C | `map()` returns new array; others mutate original |
| 19 | B | Destructuring with rename |
| 20 | C | Arrow functions don't have their own `this` |
| 21 | B | Node.js is a JavaScript runtime built on V8 |
| 22 | B | `fs` module handles file system operations |
| 23 | B | package.json defines metadata and dependencies |
| 24 | C | Node.js is single-threaded with event loop |
| 25 | C | `--save-dev` adds to devDependencies |
| 26 | B | `path.extname()` returns extension including dot |
| 27 | A | `process.env` contains environment variables |
| 28 | B | Middleware = functions between request and response |
| 29 | B | `require()` imports modules |
| 30 | B | `readFileSync` is synchronous |
| 31 | B | Express is a web framework for Node.js |
| 32 | B | `app.get()` handles GET requests |
| 33 | B | `req.params` contains route parameters |
| 34 | C | Middleware executes in order of definition |
| 35 | B | `express.json()` parses JSON body |
| 36 | D | Both `send()` and `json()` can send JSON |
| 37 | B | 201 = Created |
| 38 | C | Error middleware has 4 params: err, req, res, next |
| 39 | B | `next()` passes control to next middleware |
| 40 | B | `express.Router()` for modular routing |
| 41 | B | MongoDB is a NoSQL document database |
| 42 | B | Collection = Table |
| 43 | B | `_id` is the default primary key |
| 44 | B | `$gt` = greater than |
| 45 | B | `$push` adds element to array |
| 46 | B | Mongoose is an ODM for MongoDB |
| 47 | B | `findOneAndUpdate()` finds and updates |
| 48 | B | `populate()` fills in referenced documents |
| 49 | B | Schema defines validations |
| 50 | B | `$match` filters documents in aggregation |
| 51 | B | React is a library (not framework) |
| 52 | A | JSX = JavaScript XML syntax extension |
| 53 | B | Virtual DOM is in-memory representation |
| 54 | B | `useState` for state management |
| 55 | B | Empty deps array = runs only on mount |
| 56 | C | Use setter function `setCount()` |
| 57 | C | Keys must be unique among siblings |
| 58 | B | `useRef` returns object with `.current` |
| 59 | B | `useReducer` is similar to Redux pattern |
| 60 | B | `useMemo` memoizes computed value |
| 61 | C | `useCallback` memoizes callback function |
| 62 | B | Props are read-only |
| 63 | B | Prop drilling = passing through many layers |
| 64 | B | `useContext` avoids prop drilling |
| 65 | C | Controlled = state managed by React |

---

**Score yourself:**
- **55-65:** Excellent! Ready for interview 🎉
- **45-54:** Good! Review weak areas
- **35-44:** Fair. More practice needed
- **Below 35:** Focus on fundamentals first
