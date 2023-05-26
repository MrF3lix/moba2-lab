const API_TOKEN = "1fb3e8fb45250a4c263068701f9efc40"

export const getWeatherData = async (location) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_TOKEN}`

    const response = await fetch(url)
    const payload = await response.json()

    return payload
}

export const getLocation = async (name, limit = 1) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${limit}&appid=${API_TOKEN}`

    const response = await fetch(url)
    const payload = await response.json()

    return payload
}