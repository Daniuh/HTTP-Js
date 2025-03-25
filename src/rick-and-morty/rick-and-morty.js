/**
 * @returns {Promise<object>} quote information
 */
const fetchQuote = async() => {

    const min = 1,
          max = 826;
    
    const random = Math.round(Math.random() * (max - min) + min);

    const res = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    const data = await res.json();

    console.log(data);
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMorty = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Rick y Morty';
    //const quote = await fetchQuote();
    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextButtom = document.createElement('button');
    nextButtom.innerText = 'Next Quote';
/*     element.replaceChildren(nextButtom);
 */
    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.name;
        authoLabel.innerHTML = data.gender;
        element.replaceChildren(quoteLabel, authoLabel, nextButtom);
    }

    nextButtom.addEventListener('click', async () => {
        /* nextButtom.disabled = true;
        element.innerHTML = 'Cargando...';
        fetchQuote().then(renderQuote);
        nextButtom.disabled = false; */
        element.innerHTML = 'Cargando...';
        renderQuote(await fetchQuote());
    });

    fetchQuote().then(renderQuote);
}