function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText =
                '"' + data.quote + '"';

            document.getElementById("author").innerText =
                "- " + data.author;
        })
        .catch(error => {
            console.log(error);
        });
}
