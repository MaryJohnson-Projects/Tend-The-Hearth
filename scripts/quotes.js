'use strict';

// constants
/* Percy Bysshe Shelley was chosen because of the theme of nature expressed in many 
    of his poems. Additionally, the mood of his poetry is more somber than most poets
    which fits the feeling of the game. Not every line is a winner, but many are such as
    the entirety of the "Farewell to North Devon" poem.*/
const url = 'https://poetrydb.org/author,random/Percy%20Bysshe%20Shelley;1';

document.querySelector('footer').addEventListener("DOMContentLoaded", getQuote());

// Return Quote String
async function getQuote() {
    try {
        const response = await fetch(url);
        if(!response.ok)
            throw Error(`Error: ${response.url} ${response.statusText}`);
        const data = await response.json();
        if(data){
           let line = processPoem(data);
           showLine(line);
        }
        else{
            throw Error('Cannot fetch line from the API');
        }
    } catch (error) {
        showLine(error);
    }
}

function processPoem(data) {
    let line = ""
    do {
        line = data[0].lines[Math.floor((data[0].lines.length)*Math.random())]; 
    } while (line == "");
    return line;
}

function showLine(line) {
    let quoteElement = document.querySelector('#quote');
    quoteElement.innerHTML = line;
}
