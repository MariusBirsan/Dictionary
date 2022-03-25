var addedWords = [];
function checkWords() {
    let word = document.getElementById("addedWord").value;
    if (addedWords.includes(word)) {
        searchWord.innerHTML = "The word was already added. Please enter another word.";
        document.getElementById("addedWord").value = "";
    } else {
        searchWord.innerHTML = "Word was succesfully added!";
        addedWords.push(word);
        document.getElementById("addedWord").value = "";
    }
    
}
