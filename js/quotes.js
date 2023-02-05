const quotes = [
    {
        quote:'I never dreamed about success, I worked for it.',
        author:'Estee Lauder'
    },
    {
        quote:'Do not try to be original, just try be good.',
        author:'Paul Rand'
    },
    {
        quote:'Do not be afraid to give up the good to go for the great.',
        author:'John D. Rockefeller'
    },
    {
        quote:'If you cannot fly then run. If you cannot run, then wolk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author:'Martin Luther King Jr'
    },
    {
        quote:'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author:'Thomas Edison'
    },
    {
        quote:'The fastest way to change yourself is to hang out with peopel who are already the way you want to be.',
        author:'Tim O Reilly'
    },
    {
        quote:'Some people dream of success, while other people get up every morning and make it happen.',
        author:'Wayne Huizenga'
    },
    {
        quote:'The only thing worse than starting something and falling. is not starting something.',
        author:'Jim Rohn'
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;