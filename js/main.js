// Create form variable
const form = document.querySelector('#weatherDataForm')

// Set EventListener to Search (submit type) button 
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     let location = document.querySelector('#location')
//     let locationInput = event.path[0][0].value

//     loadData(locationInput)
// })

// getData function
const getData = async (location) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0602a91f13951c93c397ad7d0df53c52`)
    console.log(response.data)
    // return response.data.json()
}
console.log('hello')

// DOM Elements list
const DOM_Elements = { 
    weather: '.weatherInfo' 
}

// Create Weather Info HTML
const create_weather = (id, name, color, season, powercoin) => {
    const html = `<a href='#' class= 'list-group-item list-group-item-action list-group-item-light' id="${id}">Name: ${name}<br>Color: ${color}<br>Season: ${season}<br>Power Coin: ${powercoin}</a>`
    
    // 'Paste' new list item on document
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML("beforeend", html)
}