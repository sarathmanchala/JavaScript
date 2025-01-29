let buttons = document.querySelectorAll('.myButtons');
console.log(buttons);
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent = "I'm green!"; 
})