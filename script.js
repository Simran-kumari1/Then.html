let button = document.getElementById("btn");

button.addEventListener("click", function() {

    fetch("https://dummyjson.com/quotes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").innerText = data.quote;
            document.getElementById("author").innerText = "- " + data.author;
        })
        .catch(error => {
            document.getElementById("quote").innerText =
                "Something went wrong. Try again.";
        });

});
