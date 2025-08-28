1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById is the selection of one element. It should be unique so that it can be find one element.
getElementsByClassName is the selection of all elements with the given class name.
querySelector is the method of getting first matching elements
querySelectorAll methods give the all matching elements.

2.How do you create and insert a new element into the DOM?
Ans: I use document.createElement() & appendChild() to create an element.

3.What is Event Bubbling and how does it work?
Ans: It first runs event handler on that element (child), then bubbles up to its parent, then grandparent and so on, until it reaches the document root. event target (child) > parent > root.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is the technique to attach a single event listener to a parent element. used for better performance, cleaner maintainable code.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is the default action of an element from happening.
stopPropagation() is Stoped the event from bubbling up the DOM tree.
