const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const search = document.getElementsByClassName("search")[0];
const suggestions = document.getElementsByClassName("suggestions")[0];
function addResults() {
    console.log(this.value);
    // check if the city includes the desired search
    
    const filtered_array = cities.filter(element => element.city.includes(this.value) || element.state.includes(this.value));
    // if it does then make a new element and 
    const html = filtered_array.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
          </li>
        `;
      }).join('');
      suggestions.innerHTML = html;
      /*
    filtered_array.forEach(city => {
        // make a new element
        
        const new_city = document.createElement("li");
        const name = document.createElement("span");
        name.className = "name";
        name.innerText = `${city.city}, ${city.state}`;
        const pop = document.createElement("span");
        pop.innerText = `${city.population}`;
        pop.className = "population";
        new_city.appendChild(name);
        new_city.appendChild(pop);
        console.log(new_city);
        suggestions.appendChild(new_city);
        // add it to the list 
        */
    console.log(filtered_array);
}
search.addEventListener("input", addResults);
console.log(search);
fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))
