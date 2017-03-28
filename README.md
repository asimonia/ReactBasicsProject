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

## Creating Component Class
Stateless Functional Component: A component defined as a function. 
It takes only props as an argument and returns a virtual DOM.
Component Class: A component definition that can include things
like state, helper methods and other advanced hooks into the page’s DOM

## Understanding State
State is data in our application that can change.
getInitialState: Component method for defining the initial state of your component.
Flux: A pattern for organizing your state in an application.
Redux: A popular library for managing application state and state changes.

## Unidirectional Data Flow
All data in our application flow in a single direction.  In React it flows
down the tree from parent to child.  This makes tracking the source and
destination easy compared to other archtectures where data may be coming
may be coming from many parts of the application.

## Application State
The state or data in our application that is core to the functionality of the application
as a whole.  This usually includes a list of the models and data being manipulated
by the interface.  If we were to reload our application, the Application state is what
we would like to persist the most.

## Local Component State
This is state that is used to allow a component to a function.  Local component state
is typically not used by other components in the application, and is less
important to persist if the application resets.