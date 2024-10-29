
let quotes = [
    
    
    "The best way to get started is to quit talking and begin doing. – Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. – Steve Jobs"


];

const btn = document.getElementById('btn');
const showQuote = document.getElementById('show-quote');

const generateQuotes = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);

    showQuote.innerText = quotes[randomQuote];

}
generateQuotes();
btn.addEventListener('click', generateQuotes);