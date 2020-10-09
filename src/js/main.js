let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 30.266666, lng: -97.733330},
        zoom: 8,
        styles: mapStyles,
        disableDefaultUI: true,
    });

    let marker = new google.maps.Marker({
        position: {lat: 30.266666, lng: -97.733330},
        map: map,
        icon: {
            url: './img/marker.png',
            size: new google.maps.Size(44, 57),
        },
        title: 'Test',


    });
}
window.initMap = initMap;
const mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "84"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6d6756"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "hue": "#008aff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#FAECCD"
            },
            {
                "gamma": "1"
            },
            {
                "lightness": "0"
            },
            {
                "saturation": "0"
            },
            {
                "weight": "1"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-70"
            },
            {
                "lightness": "31"
            },
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#b0a586"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#bed4d4"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
