---
title: 'Notes from webdev courses'
---

# HTML

## Keyboard Shortcuts

- CMD + / : Comment out line
- Shift + CMD + P : Command Pallete
- ! + Tab : creates basic HTML layout with `<!DOCTYPE html>`, `<head>`, `<body>`, etc

## Elements

- `<a>` : anchor element, can add href to make link
- `<div>` : content division element, mainly used to style a specific block but also divides the page
- `<span>` : used to style text inline, can add `style=""` to style in html.
  `<span style="color:red"></span>`
- `<ol>` : ordered list
  - `<li>` : listing item. Must be used on each row of list
- `<ul>` : unordered list
  - `<li>` : listing item. Must be used on each row of list
- `<hr>` : horizontal rule. Makes a line across the page. No end tag
- `<br>` : line break. Makes a line break. No end tag
- `&_;` : entity codes to display stuff like less than, greater than, ampersand, etc

### Semantic Elements

Elements that clearly describe its meaning

- `<main>` : should not include repeated content like nav bar, search bar, logo, etc. Meant for main content of that page.
- `<nav>` : navigation section
- `<section>` : denotes a section of the page which does not have a more specific semantic element
- `<article>` : self-contained composition which is intendent to be independantly distributable or reusable. Ex: forum post, magazine/newspaper article, blog entry
- `<header>` : introductory content. Typically group of introductory or navigaitonal aids. May contain logo, search form, author name, etc.
- `<footer>` : represents a footer for its nearest sectioning content or sectioning root element. Typically contains author info, copyright data, or links related to doc.
- `<aside>` : portion of document whose contents is only indrectly related to the doc's main content. Frequently presented as sidebars or call-out boxes
- `<time>` : used for calling out time. Used with `datetime=""` similar to `alt` in `<img>`. Ex: `<time datetime="2018-07-07">July 7</time>`

## Tables

- `<table>`
- `<td>` : Table Data Cell, represents a single cell of data
- `<tr>` : Table Row
- `<th>` : Table Header Cell
- `<thead>` : Table Head
- `<tbody>` : Table Body
- `<tfoot>` : Table Footer. Useful for Totals or information that is not part of the dataset
- `rowspan=""` : Sets cell to take up multiple rows
- `colspan=""` : Sets cell to take up multiple columns
- `<colgroup>` : Specifies a group of columsn for formatting. Comes after `<caption>` but before `<thead>`. Use `<col>` tag within `<colgroup>` to define properties to columns
- `<caption>` : Defines table caption. Must come after the `<table>` tag.

## Forms

- `<form></form>`
  - `action=""` : where the data go after submitted
  - `method=""` : how the data is transferred
    - `GET`
    - `POST`
- `<input>` : used to create a variety of form controls. 20+ types of inputs

  - `type=""` : attribute that determines the type of input it is
  - `placeholder=""` : attribute that sets the input placeholder
  - `id=""` : attribute that sets the id of that input to connect to a label or other elements
  - `name=""` : atrribute to set the name of the input for when the data is sent somewhere.

- `<label>` : label element to be connected with input elements in a form

  - `for=""` : attribute to set which input id it is for

- `<button>` : creates a button element for either submitting forms or to be a standard button

  - `type=""` : attribute to set what button does

- `<input type="checkbox" name="" id="">`
- `<input type="radio" name="SAME NAME FOR ALL RADIO INPUTS" id="" value="value to pass on when submitted">`

- `<select>`
  - `name=""`
  - `id=""`
- `<option>Label</option>`
  - `value=""`

# CSS

## Properties

- `color`
- `backgreound-color`
- `background` : different than background-color, although can change background-color, it can also be used to set image and others
- `text-align`
- `font-weight`
- `text-decoration`
- `line-height`
- `letter-spacing`
- `font-size`
- `font-family`

## Selectors

- `selector {property: value;}` : ex: `h1 {color:red;}`
- `#idname {}` : select by id
- `.class {}` : select by class name
- `selector1 selector2 {}` : selects all selector2 that is in a selector1
- `selector1, selector2 {}` : selects both selector1 and selector2
- `sel1 > sel2 {}` : selects sel2 that is child of sel1
- `sel1 + sel2 {}` : selects sel2 that is adjacent to sel1 ex: sel2 comes right after sel1
- `input[type="text"]` : Attribute selector

### Psuedo Classes : Keyword added to a selector that specifies a special state of the selected element(s)

- `:hover`
- `:active`
- `:checked`
- `:nth-of-type(#n)`

### Psuedo Elements

- `::after`
- `::before`
- `::first-letter` : selects first letter
- `::first-line`
- `::selection` : targets when you highlight/select text

### Specificity

INLINE STYLE > ID > CLASS > ELEMENT

## Boxes

- `width`
- `height`
- `box-sizing`
  - `border-box` : sets the box size to be edge of border to edge of border rather than edge of box to edge of box

### Borders

- `border: width style color` : can be used to set all of the attributes below or can set attriabutes below to create the border
  - `border-width`
    - Can be `thick/thin` or a specific thickness like `1px`
  - `border-color`
  - `border-style`
- `border-radius` : can be px or %

### Padding

- `padding`
  - vertical | horizontal
  - top | horizontal | bottom
  - top | right| bottom | left
- `padding-left`
- `padding-right`
- `padding-top`
- `padding-bottom`

### Margin

- `margin`
  - vertical | horizontal
  - top | horizontal | bottom
  - top | right| bottom | left
- `margin-left`
- `margin-right`
- `margin-top`
- `margin-bottom`

### Display

- `display`
  - `inline`
    - height, width, and vertical padding/margin not respected
  - `block`
  - `inline-block`
    - inline but follows height, width, and padding/margin

### Units

- Absolute

  - px

- Relative
  - em
    - relative to parent element
    - For font size: 1 em = same size as parent. 2 em is 2x size of parent
    - For margin: 1 em = 1x the font size itself
  - rem
    - similar to em but derives original size from root element rather than parent
  - vh
  - vw
  - %
    - can be % of the element itself or the parent, depending on the property

### Position

Sets how an element is positioned in a document

- Location properties for `position`

  - `top`
  - `right`
  - `bottom`
  - `left`

- `position` values
  - `static`
  - `relative`
  - `asbolute`
  - `sticky`

### Transitions

- `transition`
  - can add time like 1s to make the transition take 1s
  - property name | duration | timing function | delay

### Transform

- `transform`
  - `rotate()`
    - accepts `deg` (full = 360), `grad` (full = 400), `rad` (full = 2π or 6.2832), or `turn` (full = 1)
  - `scale()`
  - `translate()`
  - `skew()`
    - accepts `deg` (full = 360), `grad` (full = 400), `rad` (full = 2π or 6.2832), or `turn` (full = 1)
- `transform-origin` : changes where the rotation point is, center by default

### Background

- `background-image`
  - `url("www.google.com")`
  - `linear-gradient(#color, #color2)`
  - `contain`
  - `cover`
  - `auto`
- `background-repeat`
- `background-position`

- `background` : can set all properties above. Order _generally_ doesn't matter
  - `bg-size` value may only be included immediately after `position`, seperated with the '/' character. ex: `center/80%`

## Flexboxes

Turn on with `display: flex;`

- `flex-direction`
  - `row` : sets direction of flexbox to row
  - `row-reverse` : sets direction of flexbox to reversed row. Starts on right
  - `column` : sets direction of flexbox to column
  - `column-reverse` : sets direction of flexbox to reversed column. Starts on right
- `justify-content` : main axis
  - `flex-start` : content is aligned to starting point
  - `flex-end` : content is aligned to ending point
  - `center` : aligns box to center
  - `space-between` : distributes space between content, putting first and last content at the edges
  - `space-around` : distrubutes space evenly around each content block
  - `space-evenly` : distrubutes space evenly between each content block
- `flex-wrap`
  - `wrap`
  - `wrapreverse`
  - `nowrap`
- `align-items` : cross axis
  - `flex-start` : align along beginning of cross axis
  - `flex-end` : align along end of cross axis
  - `center`
  - `baseline` : aligns to baseline of text
- `align-content` : controls space between content for when there is wrap or wrap reverse
  - `flex-start` : content is aligned to starting point
  - `flex-end` : content is aligned to ending point
  - `center` : aligns box to center
  - `space-between` : distributes space between content, putting first and last content at the edges
  - `space-around` : distrubutes space evenly around each content block
  - `space-evenly` : distrubutes space evenly between each content block
- `align-self` : allows for alignment of single element

- `flex-basis` : initial size an element should be added in at
- `flex-grow` : controls amount fo available space an element should take up
- `flex-shrink` : if items are larger than container, they shrink according to `flex-shrink`

- `flex` : flex-grow | flex-shrink | flex-basis

## Media Queries

Begin with `@media()`.

- `min-width`
- `max-width`

- can use `and` for multiple properties. Ex: `@media (min-width: 600px) and (max-width: 800px)`

- `orientation`

# Bootstrap

## Buttons

`.btn`

- `button.btn.btn-primary`
- `.btn btn-primary`

### Button Colors

- `.btn-secondary`
- `.btn-danger`
- `.btn-warning`
- `.btn-info`

## Colors

- `.bg-primary`
- `.bg-secondary`
- `.bg-danger`
- `.bg-warning`
- `.bg-info`

## Alert

`.alert`

- `.alert.alert-danger`

## Containers

`.container` is the most basic element class in Bootstrap

## Grid system

- Grid only works in a `.container`
- `.row` must be in a `.container`
- Each `.row` is 12 units long
- Can have multiple columns (`.col`) in `.row` but cannot take up more than 12 units

  - `.col`
    - creates auto-sized column
  - `.col-3`
    - creates column of 3 units wide
  - `.col-md-3`
    - creates column of 3 units wide at the md break point

- `.img-fluid` : makes image fluid in its container

## Helpful Utilities

`.align-items-`

- aligns entire `.row`/`.container` on vertical axis
- `.align-items-start`
- `.align-items-center`
- `.align-items-end`

`.align-self-`

- aligns single element
- `.align-self-start`
- `.align-self-center`
- `.align-self-end`

`.justify-content-`

- aligns entire `.row`/`.container` on horizontal axis
- `.justify-content-start`
- `.justify-content-center`
- `.justify-content-end`
- `.justify-content-around`
- `.justify-content-between`

**All of these classes can have breakpoint specifiers added**

## Forms

- use `.form-row` when making form rows

- `<div class="form-group"></div>` : groups together elements in a form. Goes inside `<form>`. Should use multiple. Each one groups `<label>` + `<input>`

- `.form-control` on `<input>` to enable form control

- checkboxes are weird, use bootstrap checkbox with `div.custom-control.customcheckbox`, `input:checkbox.custom-control-input`, `label.custom-control-label`

## Navbars

Basic class is `.navbar` in `<nav>` element. ex: `nav.navbar`

## Icons

Copy and paste from bootstrap website. SVG = Scalable Vector Graphic. Each Bootstrap icon has the coordinates to build the svg

# Javascript

## Primitive Types

- Number
- String
- Boolean
- Null
- Undefined

Other prim types

- Symbol
- BigInt

### Numbers

- Can do math, including modulo (%)
- `**` does exponent

## Variables

- Basic syntax: `let someName = value;`
- `const` : const works just like `let` but you cannot change the value
- `var` : old variable keyword

### Hard Rules

- No spaces in variable names
- No starting with a number
- Case sensative
- Can contain $ or \_

### Strings

- Save strings in variables with quotes
- Strings are indexed
- `string[x]` returns the letter of string at x
- `string.length` returns the length of a string
- `string + string` returns one string concatenated with both original strings
- `1 + string` returns `"1string"`, makes `1` into a string and concats with `string`

### String Methods

- `.toUpperCase()`
- `.toLowerCase()`
- `.trim()`
- `.indexOf(start,[end])`
- `.slice(start, [end])`
- `.replace('lookfor','replacewith')`
- `` `Use backtick and put valid js into curly brace for it to evaluate in a string ${}` ``

### Null & Undefined

- `null` is value for nothing or the equivalent of layman's 0
- `undefined` is query/function/variable is not defined

## Math

- `Math.__` : basis for math functions
- `.random()` : gens random number between 0 and 1
  - can multiple to get random number in some quantity ex: `Math.floor(Math.Random() * 10)` gives rand number between 0 and 10. Can also do `Math.floor(Math.Random() * 5) + 20` to give rand number between 20 and 25.
- `.floor()` : chops off decimal
- `.ceiling()` : chops off decimal and rounds up
- `.round()` : rounds number
- `.abs()` : absolute value

## Boolean Logic

- `<`
- `>`
- `<=`
- `>=`
- `==` : equality
- `!=` : not equal
- `===` : strict equality
- `!==` : strict non-equality

## Important JS methods

- `console.log()`
- `parseInt()` : turns string into an int

### Running JS in Browser

- add `<script src="something.js"></script>` at the end of `<body>`

## IF statement

- `if (condition){do this;}`
- `else if(condition){do this;}`
- `else {do this;}`

## Logical Operators

- `&&` : AND
- `||` : OR
- `!` : NOT

## Arrays

Ordered data structure

- `let variable = [];` : assigns variable to empty array
- `.push(values, values)` : add to end
- `.pop()` : remove from end
- `.shift()` : remove from start
- `.unshift()` : add to start

- `concat` : merge arrays
- `includes` : look for value
- `indexOf` : just like `string.indexOf`
- `join` : creates a string from an array
- `reverse` : reverses an array (destructive)
- `slice` : copies a portion of an array
- `splice(start, delete, insert)` : removes/replaces elements (destructive)
- `sort` : sorts an array

Example Array:

```js
const exampleArray = [
  ['Joe', 'Bob', 'Jill'],
  [12, 15, 25],
  ['joe@yahoo.com', 'bobsagat@gmail.com', 'jilly123@aol.com'],
]
```

## Objects

- Objects are collections of properties
- Properties are a key-value pair
- Rather than accessing data using an index, we use custom keys

Example object:

```js
const fitBitData = {
    totalSteps: 30000,
    totalMiles: 211,
    avgCalorieBurn: 5755,
    workoutThisWeek: '5 of 7'
    avgGoodSleep: '2:13'
};
```

Accessing object:

- `object['name of property']`
- `object.propertyName`

Updating Data:

- `object.propertyName = newValue;`

## Loops

Types of loops:

- for loop
- while loop
- for ... of loop
- for ... in loop

### For loop

Example for loop:

```js
for (let i = 50; i >= 0; i - 10) {
  console.log(i)
}
```

### While loop

Example while loop:

```js
let num = 0
while (num < 10) {
  console.log(num)
  num++
}
```

### break

Stops execution of loop if the code hits `break`

### For - of loop

```
for (variable of iterable) {
    statement
}
```

Examples for of loop:

```js
for (let sub of subreddits) {
  console.log(sub)
}
```

```js
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student)
  }
}
```

**Objects are not itterables**

### For - in loop

Example for loop:

```js
for (let person in testScores) {
  console.log(person)
}
```

- Can do Object.keys(objectName) to get an array of keys
- Can do Object.values(objectName) to get an array of values
- Can do Object.entries(objectName) to get an array of keys and values

## Functions

`return` allows using the data from a function. Just doing `console.log()` might display the value in the console but does not allow it be stored in a variable. `return` also ends the function when run.

## This

Refers to whatever object is above where it is called. In the console, `this` refers to the `window` object as the object above where it was called.

### Examples:

`this` would return `window` because you are referring to the parents of `testobj()`

```js
function testobj() {
  console.log(this)
}
```

`this` refers to `cat` as that is the parent of the `meow()` function

```js
const cat = {
  name: 'Blue Steele',
  color: 'grey',
  breed: 'scottish fold',
  meow() {
    console.log('THIS IS:', this)
    console.log(`${this.name} says MEOWWWW`)
  },
}
```

## Callbacks and Arrays

- **ForEach**
  - for each element in the array, run it through function. Most commonly has a function written in the forEach().
  - `array.forEach(function);`
- **Map**
  - Allows to return a changed version of the input array. Ex: Doubling every number or uppercasing every string.
  - `const caps = array.map(function (t){return t.toUpperCase();})` this creates a new array with uppercase elements and saves that to a new array called caps
- **Arrow Functions**
  - `const square = function (x){return x*x;}` becomes `const square = x => {return x*x;}` or `const add = (x,y) => {return x+y;}`
  - 0 variables passed in or more than 1 variable passed in must have (), for one variable can just put the variable.
  - To do **implicit return** use () instead of {} or no () and put the statement on the same line to return.
    - ex: `const rollDie = () => (Math.floor(Math.random() * 6) + 1)` the () around Math.floor... implies it is a return. **must only have one expression otherwise no implicit return**
    - `const add = (x,y) => x + y` **must not have line break otherwise won't work**
- `setTimeout(function, lengthOfTimeInMillisec)`
  - waits number of milliseconds to execute the function
- `setInterval(function, lengthOfTimeInMillisec)`
  - waits number of milliseconds to execute the function and then repeats
  - can stop by saving id to a varibale and then calling `clearInterval(id)`
    ex: `let id = setInterval(function, lengthOfTimeInMillisec); clearInterval(id);`
- Some and Every
  - Returns boolean of whether every element in an array passes true through a function or some elements passed true through the function
  - can be paired with `filter` to then extract elements that are true from `some`
  - ex:
  ```js
  words.every((word) => word[0] === 'd')
  //returns true or false
  ```
- Filter
  - allows to filter an array by checking a statement for true or false. Function inside must return true or false. If true, added to new filtered array. _Nothing happens to original array_
  - ex:
  ```js
  const newNums = nums.filter((n) => n % 2 === 0)
  ```
- Reduce
  - Executes a reducer function on each element of the array, **resulting in a single value**
  - Structure of ex is as below
    - `accumulator` : variable that will be used to add up the total
    - `currentValue` : variable that will be used to store the current value
  - ```js
    ;[3, 5, 7, 9].reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    })
    ```
  - Reduces array down to one value whether it is summing them or finding a min/max.

## Newer JS Features

- Default params
  - Old way to do it would be to have an `if` to check if parameter is `undefined`
  - New way is when calling function to give it a value. Ex:
    ```js
    function multiply(a, b = 1) {
      return a * b
    }
    multiply(4) //4
    multiply(4, 5) //20
    ```
- Spread

  - Spread means to use values of an array or function as arguments or other when multiple are expected.
  - Spread in Function Calls
    - Have array, want to fine max. Can't just give `Math.max()` an array, so can use spread (`...`) to insert values of the array into `Math.max()`
  - Spread with Arrays

    - Can use existing array to fill a new array.

      ```js
      const cats = ['Blue', 'Scout', 'Rocket']
      const dogs = ['Rusty', 'Wyatt']

      const allPets = [...cats, ...dogs]
      //Blue, Scout, Rocket, Rusty, Wyatt
      ```

  - Spread with Objects

    - ```js
      const feline = { legs: 4, family: 'Felidae' }
      const canine = { isFurry: true, family: 'Caninae' }

      const catDog = { ...feline, ...canine }

      const dataFromForm = {
        email: 'blueman@gmail.com',
        password: 'tobias123!',
        username: 'tfunke',
      }
      const newUser = { ...dataFromForm, id: 2345, isAdmin: false }
      ```

- `arguments` Object
  - Available inside every function
  - Is an **array-like** object
    - Has length
    - Does not have array methods like push/pop
  - **_Contains all the arguments passed to the function_**
  - _Not availble inside of arrow functions_
- Rest Params
  - collects rest of the values. Use to make array of the rest of the values rather than relying on `arguments` to collect and use that. `arguments` is not a real array but rest creates an array that has all available methods.
  ```js
  function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
  }
  ```
- Destructuring

  - A short clean syntax to 'unpack':
  - valeus from array
  - properties from objects into distinct variables
  - **Syntax** is `const` then `[]` for array or `{}` for object and in those you put the variable names you want for each element.
  - **For object**, new variable names have to be the same as the key. Can rename variable by doing `key: newVariableName`
  - Can have **default value** by doing either `key = defaultValue` or `key: newName = defaultValue`
  - Both can be combined with `...` to take rest and put into a new variable
  - **Array ex:**

  ```js
  const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934]

  const [gold, silver, bronze, ...everyoneElse] = scores
  ```

  - **Object ex:**

  ```js
  const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco',
    state: 'California',
  }

  const { email, firstName, lastName, city, bio } = user
  const { born: birthYear, died: deathYear = 'N/A' } = user
  ```

  - **Params**
    - Can destruct params of a function by using same syntax without the `const/let`.

  ```js
  function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }

  const movies = [
    {
      title: 'Amadeus',
      score: 99,
      year: 1984,
    },
    {
      title: 'Sharknado',
      score: 35,
      year: 2013,
    },
  ]
  movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
  })
  ```

## DOM (Document Object Model)

- The DOM is a JS representation of a webpage
- JS "window" into the contents of a webpage
- Bunch of objects that can interact with via JS

### Document

The document object is our entry point into the world of DOM. It contains representation of all the content on a page plus tons of useful methods and properties

### Selecting

Selecting returns `Elements`. Those `Elements` represent elements in HTML, are objects, and have methods that can be used with them

Classic selecting

- `document.getElementById('id')`
  - returns one element
- `document.getElementsByTagName('Tag Name')`
  - returns multiple elements
- `document.getElementsByClassName('Class Name')`
  - returns multiple elements

New ways to do selecting

- `document.querySelector('h1')`
  - Finds first h1 element
- `document.querySelector('#red')`
  - Finds first element with ID of red
- `document.querySelector('.big')`
  - Finds first element with class of big
- `document.querySelectorAll('h1')`
  - Finds all h1 elements

### Manipulating

PROPERTIES & METHODS

- `innerText`
  - selects all innertext of the selection that is shown
- `textContent`
  - selects the content of the text including stuff that is hidden
- `innerHTML`
  - used to set/select the inner HTML meaning can use tags and other markup
- `value`
- `parentElement`
- `children`
- `nextSibling`
- `previousSibling`
- `style`
- `classList`
- `getAttribute()`
- `setAttribute()`
- `appendChild()`
- `append()`
- `prepend()`
- `removeChild()`
- `remove()`
- `createElement`
