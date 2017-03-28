## <script src="./vendor/react.js"></script>
The mobile and browser DOM version share the same core of React

## <script src="./vendor/react-dom.js"></script>
The logic for turning the DOM to the virtual DOM

## <script src="./vendor/babel-browser.min.js"></script>
This is the Babel extension that allows using jsx without the compile step

## <script type="text/babel" src="./app.jsx"></script>
This is where the code will be stored

## React is all about rendering reusable components on the virtual DOM
React is Declaritive, which is WHAT IS, as opposed to Imperative which is HOW TO.
A React component must return only a single virtual DOM element.
JSX is a markup language.  It's easy on the eyes!
Babel is used to transpile JSX to Javascript.

## Mocking up our Application
When designing a React application, it’s a good idea to mock up the structure 
of our app statically, then build interactivity into that mock. In this video 
we will design our application and start thinking in components.

## Use props (properties) to customize components
They allow us to build reusable and customizable components.
Pass and read properties to and from components.

## PropTypes and DefaultProps
We can document exactly which properties our components take, and what types they should be.

## Decomposing the Application
Break down our large application component into several components that can be reused and built independently.

## For Loops
The key property is required on a for-loop