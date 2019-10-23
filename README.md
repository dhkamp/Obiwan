

# Obiwan.js

Obiwan is a Transition-Manager written in Javascript that makes creating CSS3-Transitions as easy as possible.
Write less CSS and create your Transitions on runtime.

## API

### Initialisation

Creating a new `Transition` is the first step for using the Obiwan-Transitionmanager.

```javascript
var myTransition = new Obiwan.Transition();
```

### Functions

#### .delay

The `delay`-function sets the delay for the created transition. It accepts a string or a number as value. Strings will be converted to milliseconds if possible.

```javascript
myTransition.delay(10);     // 10 milliseconds
myTransition.delay('50ms'); // 50 milliseconds
myTransition.delay('2s');   // 2000 milliseconds
```

If you call this function without parameters it returns the currently set value for the transition delay.

```javascript
myTransition.delay(); // returns Transition delay as number (milliseconds), default is 0  
```

#### .duration

The `duration`-function sets the transition-duration. Like the `delay`-function it takes either a string or a number as parameter.

```javascript
myTransition.duration(10);     // 10 milliseconds
myTransition.duration('50ms'); // 50 milliseconds
myTransition.duration('2s');   // 2000 milliseconds
```

If you call this function without parameters it returns the currently set value for the transition duration.

```javascript
myTransition.duration(); // returns Transition delay as number (milliseconds), default is 50  
```

#### .property

The `property`-function sets the transition property, or the properties if multiple get passed in (as array).

```javascript
myTransition.property('width');
myTransition.property(['width','background-color']);
```

If no parameters get passed in the function returns the currently set transition property.

```javascript
myTransition.property(); // returns the property/ies, default is 'all'
```

#### .type

The `type`-function configures the animation type, e.g: linear, ease, ease-in etc.

```javascript
myTransition.type('linear'); // sets animation type to linear
```

If no parameters are provided it returns the currently set value.

```javascript
myTransition.type(); // returns the transition type, default is 'ease'
```
#### .appendTo

The `appendTo`-function appends the transition to the provided element/s. You can pass in an element, a string starting with `#` for selecting a single element or a string starting with `.` for multiple elements. Selection happens by `getElementById` or `getElementsByClassName`.

```javascript
myTransition.appendTo(document.getElementById('myElement')); // appends the transition to the element with the given id
myTransition.appendTo('#myElement'); // appends the transition to the element with the given id
myTransition.appendTo('.myClass');   // appends the transition to all elements with this class
```

#### .config

The `config`-function is a bundle of all previously mentioned functions. Internally, the functions for `delay`, `duration`, `type` and `property` get called.
All the properties are optional - it's not neccessary to create every member

```javascript
myTransition.config({
    duration: 250,                           // or `dur`
    delay: 25,                               // or `del`
    type: 'linear',
    property: ['width', 'background-color'], // or `prop`
    appendTo: '#myElement'
});
```
Like all functions before, this one returns the config as an object if no parameters are provided.

### Fun Fact

Obwian's API is chainable

```javascript
myTransition
    .delay(15)
    .duration(500)
    .type('ease-in')
    .property(['width', 'background-color']);
```