## Why React?
Library for building UI.
Two huge benefits: its DECLARITIVE and COMPONENT-BASED
React provides us tools to build one component and use it as many times
Component: A self-contained, reusable piece of our interface
Declarative: A programming model where we describe the result we want to achieve
Problem is that the bookkeeping needed to manual manipulate the DOM UI and keep it in sync with the javascript Data Model can grow out of hand.
Build a Virtual DOM for our UI.

## State and the Virtual DOM
Describe everything in the jsx files.  This is called the Virtual DOM.

DOM: (Document Object Model) The interface for managing the elements in an HTML page.
Virtual DOM: A pure JavaScript representation of a DOM tree.

## Understanding JSX
How do we describe a DOM element?
<a href="https://teamtreehouse.com">Treehouse</a>
1. Element
2. Attributes (object of key-value pairs)
3. Child Element

We could use React.createElement calls, but that would obscure the layout of the component.

JSX allows us to use a XML syntax

instead of writing: 
var myLink = React.createElement('a', {href: "https://teamtreehouse.com"}, "Treehouse");

we can write this:
var myLink = (
	<a href="http://teamtreehouse.com">Treehouse</a>
);

In development, we can use:
Babel.js: A compiler that creates standard, compatible JavaScript from code that utilizes new JavaScript features and JSX

## First Application
react.js: 				React CORE
react-dom.js:   		Virtual DOM to real DOM
babel-browser.min.js: 	Use jsx without a build step

## Mocking up our Application
When designing a React application, it’s a good idea to mock up the structure of our app statically, then build interactivity into that mock. In this video we will design our application and start thinking in components.

## Properties
Properties are a critical piece of building componenets.  They allow us to build reusable and customizable components.  We learn how to pass and read props to and from componenets.

{props.title}  You can pass key-value pairs to components.  {} will evaluate expressions.

## PropTypes and DefaultProps
In react we can document exactly which properties our components take, and what types they should be.

## Decomposing our Application
In this video you will learn how to break down our large application component into several components that can be reused and built independently. Composing components is a core design philosophy in React.

Composition: A method of combining many smaller or simpler pieces to create a larger piece.
Decompose: Break a large component in to smaller components that can be composed together.

## Loops and Lists in JSX
Each child in an array or iterator must have a unique key property

## Creating a Component Class
The functional components we have been building are easy to reason about, but sometimes we need more
flexibility.  We learn to create component classes with their own internal states.

Stateless Functional Component: A component defined as a function. 
It takes only props as an argument and returns a virtual DOM.
This is not suitable for handling state.

Component Class: A component definition that can include things like state, 
helper methods and other advanced hooks into the page’s DOM.

## Understanding State
getInitialState: Component method for defining the initial state of your component.
Flux: A pattern for organizing your state in an application.
Redux: A popular library for managing application state and state changes.

## Updating State
Build a component that will store a player’s score as internal state.
We will also add buttons that can change the state of our component.

## Unidirectional Data Flow
When state changes flow in one direction it makes things much simpler.

Unidirectional Data Flow: All data in our applications flow in a single direction.  In React, it flows down the tree from parent to child.  This makes tracking the source and destination easy compared to other architectures where data may be coming from many parts of the application.

There are TWO MAIN TYPES OF STATE:

Application State: The state or data in our application that is core to the functionality of the application as a whole.  This usually includes a list of the models and data being manipulated by the interface.  If we were to reload our application, the Application state is what we would like to persist the most.

Local Component State: This is state that is used to allow a component to function.  Local component state is typically not used by other components in the application, and is less important to persist if the application resets.

## Restructuring State
We will restructure our state in a single location.  We will rebuild one of our stateful components into a simple functional component and concentrate our state in a single location.


## Communicating Events
While data flows down, events and communication flows up.  This completes the loop of events that can
change data bubbling up and the updated state data flowing back down to be displayed.

## Building the Statistics Component
Now that we have our stWe will learn how to initialize state and manipulate the state with our buttons.ate consolidated in a single place, we can use it to build more components.  We will
build a component that summarizes the data in the game.

## Adding Players to the Scoreboard
Inputs in HTML are stateful.  

Controlled Component: An input form is controlled when it’s value is passed to it by the parent component. This requires us to update the passed value when it changes by listening for the onChange event of the input component.

## Designing a stopwatch
We will learn how to initialize state and manipulate the state with our buttons.
