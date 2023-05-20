# Episode-5-Let's Get Hooked-
## Theory

Qn1. Difference btw Named Export ,Default Export and * as Export?

- Named Export
- Using Named Export, we can have multiple exports and import it using it's name within curly braces.

### export {fun1,fun2};
### export let myVariable = Math.sqrt(2);
### export function myFunction() {}
### import {fun1,fun2} from 'path';

- Default Export
- We can have only 1 default export and import it without any curly braces.
### export default myFunction;
### import myFunction from "path";

- * as Export
- If there are a lot of modules to import then we can use * instead of using named exports.
- It is a namespace import that indicates that all exported objects are to be placed in the name namespace.
### export {fun1,fun2};
### import * as name from 'module';
- Can access it :
### name.fun1;


Qn2. Importance of config.js file?

- We don't need to hard code anything.
- UI can be driven according to data present in config files.


Qn3. What are react Hooks?

- Hooks are functional components that are used to manage states.


Qn4. Why do we need a useState Hook in React?

- Earlier we were not able to change state of a variable on a trigger of button,etc.So,
- using State helps manage the variable and it's states.
- The useState hook is used for storing variables that are part of your application's state and will change as the user interacts with your website.

- Example of useState Hook:
- function fav(){
- const [color,setColor]=useState('red'); 
- return(
- <button onClick={()=>setColor('blue');}>Blue</button>);}


