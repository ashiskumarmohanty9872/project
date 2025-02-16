const api_url = "https://api.gameofthronesquotes.xyz/v1/random";
const author = document.querySelector("#author");
const quote = document.querySelector("#quote");
const button = document.querySelector("#btn")
const tweetButton = document.querySelector("#btnTwo")


async function getQuote(url) {

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);

    quote.innerHTML = data.sentence;
    author.innerHTML = data.character.name;

    
}
getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML , "Tweet Window", "width=600, height=300");
}


button.addEventListener("click",()=> getQuote(api_url))
tweetButton.addEventListener("click", ()=> tweet())

