const endpoint = 'https://type.fit/api/quotes';

let quotes = [];
fetch(endpoint)
	.then((res) => res.json())
	.then((data) => quotes.push(...data));

function generateQuote() {
	let randomNumber = Math.floor(Math.random() * 1643) + 1;
	let randomQuote = quotes[randomNumber];
	text.innerHTML = randomQuote.text;
	author.innerHTML = randomQuote.author;

	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.querySelector('body').style.backgroundColor = '#' + randomColor;
}

const button = document.querySelector('#btn');
const text = document.querySelector('h1');
const author = document.querySelector('p');
button.addEventListener('click', generateQuote);
