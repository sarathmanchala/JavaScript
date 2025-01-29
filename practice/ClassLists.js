const myButton = document.getElementById('myButton');
myButton.classList.add("enabled");
myButton.addEventListener('click', (event) => {
    if( event.target.classList.contains("disabled")){
        event.target.textContent = "😱"
    }
});