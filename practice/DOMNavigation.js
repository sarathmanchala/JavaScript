const newLiItem = document.createElement('li');
newLiItem.textContent = 'Coconut';
newLiItem.id = 'coconut';
newLiItem.style.fontWeight = "bold";
newLiItem.style.backgroundColor = "lightgreen";
document.getElementById("fruits").prepend(newLiItem);
document.getElementById("fruits").insertBefore(newLiItem, document.getElementById("Apple"));