const box = document.querySelector('.box');

/*box.addEventListener('click', (event) => {
 // BUG: this.classList.add('active') throws an error
 this.classList.add('active');
});
/*

/* It returns an error because 'this' does not bind with arrow functions by default. 
It will return the window if used like normal. window.classList is undefined, so when classList.add() 
is called it returns an error. The way to actually do it is as follows*/

box.addEventListener('click', (event) => {
    event.currentTarget.classList.add('active');
});

/*Fixed it using event.currentTarget cause it will always return the element that the listener is attached to, like here with .box. 
This is the same thing as binding it with .this in a regular function. event.currentTarget stays constant and always poitns to the 
element with the listener attached to it.*/