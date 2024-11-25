
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'dd7df20d47ff20281ae7ac73818d49c1'
let difKelvin = 273.15

let ciudad = 'Cordoba'

//?q={city name}&appid={API key}


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
        
})


function fetchDatosClima(ciudad) {
   fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))

}

function mostrarDatosClima(data) {
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    
    const cuidadNombre = data.name
    const paisSigla = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon
    
    const cuidadInfo = document.createElement('h2')
    cuidadInfo.textContent = `${cuidadNombre}, ${paisSigla}`
    
    const temperaturaInfo = document.createElement('p')
    const tempEntero = Math.floor(temperatura-difKelvin)
    temperaturaInfo.textContent = `La temperatura es: ${tempEntero}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La húmedad es: ${humedad}%`
    
    const IconInfo = document.createElement('img')
    IconInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorologica es: ${descripcion}`


    divDatosClima.appendChild(cuidadInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(IconInfo)
    divDatosClima.appendChild(descripcionInfo)
} 


/* let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'dd7df20d47ff20281ae7ac73818d49c1'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`
    
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
} */