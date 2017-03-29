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
