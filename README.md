Obiwan.js
=========

Obiwan is a Transition-Manager written in Javascript that makes creating CSS3-Transitions as easy as possible.
Write less CSS and create your Transitions on runtime.

##API

###Transition

Creating a new Transition is the first step for using the Obiwan-Transitionmanager.

```javascript
var myTransition = new Obiwan.Transition()
```

####.delay
This function sets the delay for the created transition it accepts string or numbers as value. String will be converted to milliseconds if possible.

```javascript
myTransition.delay(10)     //10 Milliseconds
myTransition.delay('50ms') //50 Milliseconds
myTransition.delay('2s')   //2000 Milliseconds
```

If you call this function without parameters it will return the currently set value for the transition delay.

```javascript
myTransition.delay() //will return Transition delay as number (milliseconds), default is 0  
```

####.duration
This function is very close to the .delay() function as it takes either a string or a number as parameter and sets the transition duration.

```javascript
myTransition.duration(10)     //10 Milliseconds
myTransition.duration('50ms') //50 Milliseconds
myTransition.duration('2s')   //2000 Milliseconds
```

If you call this function without parameters it will return the currently set value for the transition duration.

```javascript
myTransition.duration() //will return Transition delay as number (milliseconds), default is 50  
```

####.property
This function sets the transition property, or the properties is multiple (as array) get passed in.

```javascript
myTransition.property('width');
myTransition.property(['width','background-color']);
```

If no parameters get passed in it'll return the currently set transition property

```javascript
myTransition.property() //returns the property/ies default is 'all'
```

####.type
Configures the animation type e.g: linear, ease, ease-in etc.

```javascript
myTransition.type('linear') //sets animation type to linear
```

If no parameters are provided it'll return the currently set value.

```javascript
myTransition.type() //returns the transition type, default is 'ease'
```
####.appendTo
The appendTo function appends the transition to the provided element/s. You can pass in an element, a string starting with # for selecting a single element or a string starting with . for multiple elements. Selection goes per getElementById oder getElementsByClassName

```javascript
myTransition.appendTo(document.getElementById('myElement'));
myTransition.appendTo('#myElement'); //appends the transition to the element with given id
myTransition.appendTo('.myClass'); //appends the transition to all elements with this class
```

####.config
The config function is a bundle of all previously mentioned functions, internally the functions for delay, duration, type and property get called.
All the properties are optional - it's not neccessary to create every member

```javascript
myTransition.config({
    duration: 250,
    delay: 25,
    type. 'linear',
    property: ['width', 'background-color'],
    appendTo: '#myElement'
});
```
Like all functions before this one returns the config as object, if no parameters are provided.

***

####*Hint*
Obwian's API is chainable

```javascript
myTransition
    .delay(15)
    .duration(500)
    .type('ease-in')
    .property(['width', 'background-color'])
```