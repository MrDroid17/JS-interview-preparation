**HTML and CSS** 

## **HTML**
## 1. datalist tag

    The datalist tag specifies a list of pre-defined options for an input element.
* provide an "autocomplete" feature for input elements. Users will see a drop-down list of pre-defined options as they input data.

* The datalist tag is used to provide an "autocomplete" feature for input elements. Users will see a drop-down list of pre-defined options as they input data.
```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

## 2. iframe  tag
    The <iframe> tag specifies an inline frame.

* An inline frame is used to embed another document within the current HTML document.
* It is a good practice to always include a title attribute for the iframe. This is used by screen readers to read out what the content of the iframe is.

```html
<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>
```

## 3. HTML5 new Tags

* **article**: 	 Specifies an independent piece of content of a document, such as a blog entry or newspaper article
* **aside**: 	Specifies a piece of content that is only slightly related to the rest of the page.
* **audio**: 	Specifies an audio file.
* **canvas**: 	This is used for rendering dynamic bitmap graphics on the fly, such as graphs or games.
* **datalist**: 	Together with the a new list attribute for input can be used to make comboboxes
* **details**: 	Specifies additional information or controls which the user can obtain on demand.
* **embed**: 	Defines external interactive content or plugin.
* **figure**: 	Specifies a piece of self-contained flow content, typically referenced as a single unit from the main flow of the document.
* **footer**: 	Specifies a footer for a section and can contain information about the author, copyright information, et cetera.
* **header**: 	Specifies a group of introductory or navigational aids.
* **hgroup**: 	Specifies the header of a section.
* **section**: 	Represents a generic document or application section.
* **time**: 	Specifies a date and/or time.
* **video**: 	Specifies a video file.
* **wbr**: 	Specifies a line break opportunity.

## 4. Semantic non-semantic elements
    A semantic element clearly describes its meaning to both the browser and the developer.

```
  * non-semantic elements - <div> and <span> - Tells nothing about its content.
  * semantic elements - <form>, <table>, and <article> - Clearly defines its content.
```

some example of semantic tags:

```
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```



## **CSS**

## 1. Media Query
    css technique - It uses the @media rule to include a block of CSS properties only if a certain condition is true.
```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

## 2. Position: property
    The position property specifies the type of positioning method used for an element. Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.

  There are five different position values:

  * static - positioned static by default, positioned according to the normal flow of the page
  * relative -  positioned relative to its normal position.
  * fixed - positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
  * absolute - positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
  * sticky - position: sticky; is positioned based on the user's scroll position.

For more details : [CSS Position](https://www.w3schools.com/css/css_positioning.asp)

> For CSS Interview Questions 30+ : [click here](https://www.interviewbit.com/css-interview-questions/)
> 
> For HTML Interview Questions 60+ : [click here](https://www.interviewbit.com/html-interview-questions/)
> 
> For Angular Interview Questions 30+ : [click here](https://www.interviewbit.com/angular-interview-questions/)
> 
> For NodeJS Interview Questions 30+ : [click here](https://www.interviewbit.com/node-js-interview-questions/)


> For MongoDB Interview Questions 30+: [click here](https://www.interviewbit.com/mongodb-interview-questions/)
