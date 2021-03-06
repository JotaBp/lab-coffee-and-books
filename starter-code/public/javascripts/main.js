let myMap

window.onload = () => {

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16
    });

    getPlaces()

}



function getPlaces() {
    axios.get("/places/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            placePlaces(response.data.places)
        })
        .catch(error => console.log(error))
}


function placePlaces(places) {
    places.forEach(place => {
        const center = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: place.name
        })
        myMap.setCenter({
            lat: places[0].location.coordinates[1],
            lng: places[0].location.coordinates[0]
        })
    })
}
