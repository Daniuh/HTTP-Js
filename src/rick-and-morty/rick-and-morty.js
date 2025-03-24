/**
 * @returns {Promise<object>} quote information
 */
const fetchQuote = async() => {

    const min = 1,
          max = 826;
    
    const random = Math.round(Math.random() * (max - min) + min);

    const res = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    const data = await res.json();
    return data.name;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RickAndMorty = async(element) => {

    document.querySelector('#app-title').innerHTML = 'Rick y Morty';
    element.innerHTML = 'Cargando...';
    const quote = await fetchQuote();
    element.innerHTML = 'Tenemos data';
}