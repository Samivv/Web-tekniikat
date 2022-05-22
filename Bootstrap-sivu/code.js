let y;
function haeteksti() {
fetch("https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=Berlin")
.then((response) => response.json())
.then(data => y = data);
}

haeteksti();