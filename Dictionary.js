var addedWords = [];
function checkWords() {
    let word = document.getElementById("checkWord").value;
    if (addedWords.includes(word)) {
        Message.innerHTML = "The word was already added. Please enter another word!";
        document.getElementById("checkWord").value = "";
    } else {
        Message.innerHTML = "Word can be added in the dictionary!";
        document.getElementById("checkWord").value = "";
    }
}
function addWords() {
    let word = document.getElementById("addedWord").value;
    if (addedWords.includes(word)) {
        Message.innerHTML = "The word was already added. Please enter another word!";
        document.getElementById("addedWord").value = "";
    } else {
        Message.innerHTML = "Word was succesfully added!";
        addedWords.push(word);
        document.getElementById("addedWord").value = "";
    }
}
