var map;
const markerIconUrl = "https://icons.iconarchive.com/icons/icons-land/vista-map-markers/256/Map-Marker-Marker-Outside-Chartreuse-icon.png";
var originMarker;
var originMarkerCoordinates;
var cityRect;
var selectedMarkers = [];

/* Reading of Data */
var markerData = [
    {
        "nameCode": "jollibee",
        "name": "Jollibee",
        "type": "Fast Food",
        "typeCode": "fastfood",
        "address": "R. Duterte Street Corner V. Rama Avenue, Guadalupe, Cebu City",
        "coordinates": {
            "lat": 10.316488418934394,
            "lng": 123.88505935397401
        },
        "specialties": [
            "Chicken Joy",
            "Jolly Spaghetti"
        ],
        "imageSource": "img/resto/jollibee.png",
        "numVisitors": 0
    },
    {
        "nameCode": "burgerKing",
        "name": "Burger King",
        "type": "Fast Food",
        "typeCode": "fastfood",
        "address": "F. Cabahug Street, Mabolo, Cebu City",
        "coordinates": {
            "lat": 10.325602694355398,
            "lng": 123.91835536784905
        },
        "specialties": [
            "Flame-grilled Burgers"
        ],
        "imageSource": "img/resto/bk.png",
        "numVisitors": 0
    },
    {
        "nameCode": "mcdonalds",
        "name": "McDonalds",
        "type": "Fast Food",
        "typeCode": "fastfood",
        "address": "A.S. Fortuna Corner Hernan Cortes Street, Banilad, Mandaue City",
        "coordinates": {
            "lat": 10.339614101554519,
            "lng": 123.92446518650891
        },
        "specialties": [
            "Burger Mcdo",
            "BFF Fries"
        ],
        "imageSource": "img/resto/mcdonalds.png",
        "numVisitors": 0
    },
    {
        "nameCode": "kfc",
        "name": "KFC",
        "type": "Fast Food",
        "typeCode": "fastfood",
        "address": "Ground Floor, Parkmall, Ouano Avenue, Tipolo, Mandaue",
        "coordinates": {
            "lat": 10.325467094446568,
            "lng": 123.93353302590282
        },
        "specialties": [
            "Fried Chicken"
        ],
        "imageSource": "img/resto/kfc.png",
        "numVisitors": 0
    },
    {
        "nameCode": "buffet101",
        "name": "Buffet 101",
        "type": "Casual Dining",
        "typeCode": "casualdining",
        "address": "City Time Square, Mantawe Avenue, Tipolo, Mandaue City",
        "coordinates": {
            "lat": 10.32712240341265,
            "lng": 123.93272016823042
        },
        "specialties": [
            "Assortment of fruitshakes"
        ],
        "imageSource": "img/resto/buffet101.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "cafeRacer",
        "name": "Café Racer",
        "type": "Causal Dining",
        "typeCode": "casualdining",
        "address": "Ouano Avenue, Subangdaku, Mandaue City",
        "coordinates": {
            "lat": 10.315641311894653,
            "lng": 123.92770681055755
        },
        "specialties": [
            "Café Bites"
        ],
        "imageSource": "img/resto/caferacer.png",
        "numVisitors": 0
    },
    {
        "nameCode": "thePyramid",
        "name": "The Pyramid",
        "type": "Casual Dining",
        "typeCode": "casualdining",
        "address": "Garden Bloc, IT Park, Lahug, Cebu City",
        "coordinates": {
            "lat": 10.331720045128382,
            "lng": 123.90510225435563
        },
        "specialties": [
            "French Macaroons"
        ],
        "imageSource": "img/resto/pyramid.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "houseOfLechon",
        "name": "House of Lechon",
        "type": "Casual Dining",
        "typeCode": "casualdining",
        "address": "Acacia Street, Kamputhaw, Cebu City",
        "coordinates": {
            "lat": 10.318017186870097,
            "lng": 123.90175931202648
        },
        "specialties": [
            "Lechon"
        ],
        "imageSource": "img/resto/houseOfLechon.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "blueElephant",
        "name": "Blue Elephant",
        "type": "Fine Dining",
        "typeCode": "finedining",
        "address": "Apple One Equicom Tower, Mindanao Avenue, Cebu City",
        "coordinates": {
            "lat": 10.319000251922471,
            "lng": 123.90699911055762
        },
        "specialties": [
            "Thai Cuisine"
        ],
        "imageSource": "img/resto/blueelephant.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "theTinderBox",
        "name": "The Tinder Box",
        "type": "Fine Dining",
        "typeCode": "finedining",
        "address": "Gov. M. Cuenco Avenue, Cebu City",
        "coordinates": {
            "lat": 10.329244044314674,
            "lng": 123.90921688836302
        },
        "specialties": [
            "Angus Beef Rib-eye"
        ],
        "imageSource": "img/resto/tinderbox.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "circa1900",
        "name": "Circa 1900",
        "type": "Fine Dining",
        "typeCode": "finedining",
        "address": "Casa Uno, Saniercas Ville Extension Road, Gorordo Avenue, Lahug, Cebu City",
        "coordinates": {
            "lat": 10.326885348540479,
            "lng": 123.90031405250703
        },
        "specialties": [
            "Ube Ravioli"
        ],
        "imageSource": "img/resto/circa.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "anzani",
        "name": "Anzani",
        "type": "Fine Dining",
        "typeCode": "finedining",
        "address": "Panorama Heights, Nivel Hills, Lahug, Cebu City",
        "coordinates": {
            "lat": 10.336550370059804,
            "lng": 123.89685604086215
        },
        "specialties": [
            "Pasta Al Nero"
        ],
        "imageSource": "img/resto/anzani.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "larsian",
        "name": "Larsian",
        "type": "Food Park",
        "typeCode": "foodpark",
        "address": "Don Mariano Cui St., Cebu City",
        "coordinates": {
            "lat": 10.310473415798082,
            "lng": 123.89179971534519
        },
        "specialties": [
            "Barbeque"
        ],
        "imageSource": "img/resto/larsian.jpg",
        "numVisitors": 0
    },
    {
        "nameCode": "tambayanCanduman",
        "name": "Tambayan Food Park",
        "type": "Food Park",
        "typeCode": "foodpark",
        "address": "Paradise Ave. Rd, Mandaue City, Cebu",
        "coordinates": {
            "lat": 10.362841915450318,
            "lng": 123.94867615473939
        },
        "specialties": [
            "Drinks"
        ],
        "imageSource": "img/resto/tambayan.png",
        "numVisitors": 0
    },
    {
        "nameCode": "pungkoPungkoSaMandaue",
        "name": "Pungko-pungko <br>sa Mandaue",
        "type": "Food Park",
        "typeCode": "foodpark",
        "address": "Mandaue City, Cebu",
        "coordinates": {
            "lat": 10.327310468375039,
            "lng": 123.94416038357546
        },
        "specialties": [
            "Pungko-pungko foods"
        ],
        "imageSource": "img/resto/pungkopungko.png",
        "numVisitors": 0
    },
    
]

/* Filter Contol */
var filterControl = `<div>
<div class="row">
<div class="col-2">
    <a data-toggle="collapse" data-target="#filter-overlay-collapse" aria-expanded="false" aria-controls="filter-overlay-collapse">
        <img src="img/panel-collapse-icon.png" id="panel-collapse-icon">
    </a>
</div>
<div class="col-10">
    <input type="checkbox" id="show-all-types" name="show-all-types" value="all">
    <label for="show-all-types">All</label>
</div>
</div>
<div class="collapse filter-panel" id="filter-overlay-collapse">
<div class="row">
    <div class="col">
        <input class="checkbox-type-filter" type="checkbox" id="foodpark"name="foodpark" value="Food Parks/Plazas">
        <label for="foodpark">Food Parks/Plazas</label>
    </div>
</div>
<div class="row">
    <div class="col">
        <input class="checkbox-type-filter" type="checkbox" id="fastfood"  name="fastfood" value="Fast Food">
        <label for="fastfood">Fast Food</label>
    </div>
</div>
<div class="row">
    <div class="col">
        <input class="checkbox-type-filter" type="checkbox" id="casualdining" name="casualdining" value="Casual Dining">
        <label for="casualdining">Casual Dining</label>
    </div>
</div>
<div class="row">
    <div class="col">
        <input class="checkbox-type-filter" type="checkbox" id="finedining" name="finedining" value="Fine Dining">
        <label for="finedining">Fine Dining</label>
    </div>
</div>
</div>
</div>`

/* Restaurant Types */
var restoTypes = [
    {
        'code': 'foodpark',
        'value': 'Food Parks/Plazas'
    },
    {
        'code': 'fastfood',
        'value': 'Fast Food'
    },
    {
        'code': 'casualdining',
        'value': 'Casual Dining'
    },
    {
        'code': 'finedining',
        'value': 'Fine Dining'
    }
]


/* Detail Window Rendering Area */
function renderDetailWindow(restaurantData){
    var specialtyString = ''
    for (var r=0; r<restaurantData.specialties.length; r++){
        specialtyString += `<li class="specialty-item">${restaurantData.specialties[r]}</li>`
    }

    htmlDetailWindow = `
    <table class="detail-header">
        <tr>
            <td class="resto-name">${restaurantData.name}</td>
            <td class="resto-customers">Customers: <span class="num-customers">${restaurantData.numVisitors}</span></td>
        </tr>
        <tr>
            <td class="show-directions-td" id="${restaurantData.nameCode}">
                <div>Get Directions</div>
            </td>
        </tr>
    </table>
    <hr>
    <div class="resto-image-container">
        <img src="${restaurantData.imageSource}">
    </div>
    <hr>
    <h4 class="resto-address">${restaurantData.address}</h4>
    <h4 class="resto-specialties">Specialties:</h4>
    <ul>${specialtyString}</ul>
    `
    return htmlDetailWindow;
}

function initMap() {
    var defaultLoc = {
        center: {lat: 10.335209409942104, lng: 123.93980972708523},
        zoom: 13
    };

    map = new google.maps.Map(document.getElementById('map'), defaultLoc);
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();

    function addIcon() {
        var icon = {
            url: markerIconUrl,
            scaledSize: new google.maps.Size(50,50)
        }
        return icon;
    }

    function createDetailWindow(data, index) {
        var detailWindow = new google.maps.InfoWindow({
            content: renderDetailWindow(data[index])
        })
        return detailWindow;
    }

    function showDetailWindow(data, index) {
        var detailWindow = createDetailWindow(data, index);
        data[index]['detailWindow'] = detailWindow;
        data[index].marker.addListener("click", () => {
            markerData.forEach(function(item) {
                item.detailWindow.close();
            });
            if (cityRect == null){
                detailWindow.open(map, data[index].marker);
            }
        })
    }

    function setMarkerVisibility(index, visibility) {
        markerData[index].marker.setVisible(visibility);
    }

    function setGroupMarkerVisibility(restoTypeCode, visibility){
        if (restoTypeCode === "all") {
            markerData.forEach(function(markerItem, index) {
                setMarkerVisibility(index, visibility);
            })
        }
        else {
            markerData.forEach(function(markerItem, index) {
                if (markerItem.typeCode === restoTypeCode) {
                    setMarkerVisibility(index, visibility);
                }
            })
        }
    }

    function createSingleFilterPanel(restoType) {
        var row = document.createElement('div')
        row.className = 'row'

        var col = document.createElement('div')
        col.className = 'col'

        var checkbox = document.createElement('input')
        checkbox.setAttribute("class", "checkbox-type-filter")
        checkbox.setAttribute("type", "checkbox")
        checkbox.checked = true;
        checkbox.setAttribute("id", restoType.code)
        checkbox.setAttribute("name", restoType.code)
        checkbox.setAttribute("value", restoType.value)
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                setGroupMarkerVisibility(restoType.code, true);
            }
            else {
                setGroupMarkerVisibility(restoType.code, false);
            }
        })

        var label = document.createElement("label")
        label.setAttribute("for", restoType.code)
        label.textContent = restoType.value;

        col.appendChild(checkbox);
        col.appendChild(label)
        row.appendChild(col)
        return row;
    }

    function createAllFilterPanel() {
        var mainFilterContainer = document.createElement('div')
        mainFilterContainer.id = 'filter-overlay-container'
        
        var mainRow = document.createElement('div');
        mainRow.className = "row";
        
        var mainRowCol1 = document.createElement('div')
        mainRowCol1.className = "col-2"
        mainRowCol1.innerHTML = `<a data-toggle="collapse" data-target="#filter-overlay-collapse" aria-expanded="false" aria-controls="filter-overlay-collapse">
            <img src="img/panel-collapse-icon.png" id="panel-collapse-icon">
            </a>`
        
        var mainRowCol2 = document.createElement('div')
        mainRowCol2.className = "col-10"
        
        var mainRowCol2Checkbox = document.createElement('input')
        mainRowCol2Checkbox.setAttribute("type", "checkbox")
        mainRowCol2Checkbox.checked = true;
        mainRowCol2Checkbox.setAttribute("id", "show-all-types")
        mainRowCol2Checkbox.setAttribute("name", "show-all-types")
        mainRowCol2Checkbox.setAttribute("value", "all")
        mainRowCol2Checkbox.addEventListener("change", () => {
            var restoTypeCheckboxes = document.querySelectorAll('.checkbox-type-filter');
            if (mainRowCol2Checkbox.checked) {
                restoTypeCheckboxes.forEach(function(item) {
                    item.checked = true;
                });
                setGroupMarkerVisibility("all", true);
            }
            else {
                restoTypeCheckboxes.forEach(function(item) {
                    item.checked = false;
                });
                setGroupMarkerVisibility("all", false);
            }
        })

        var mainRowCol2Label = document.createElement("label")
        mainRowCol2Label.setAttribute("for", "show-all-types")
        mainRowCol2Label.textContent = "All"

        mainRowCol2.appendChild(mainRowCol2Checkbox);
        mainRowCol2.appendChild(mainRowCol2Label);

        mainRow.appendChild(mainRowCol1);
        mainRow.appendChild(mainRowCol2);

        var collapseDiv = document.createElement('div')
        collapseDiv.setAttribute('class', 'collapse filter-panel')
        collapseDiv.id = 'filter-overlay-collapse'

        for (var j=0; j<restoTypes.length; j++){
            var restoType = restoTypes[j];
            var row = createSingleFilterPanel(restoType);
            collapseDiv.appendChild(row)
        }

        mainFilterContainer.appendChild(mainRow);
        mainFilterContainer.appendChild(collapseDiv);
    
        return mainFilterContainer;
    }

    function createClearDirectionsPanel() {
        var clearDirectionsDiv = document.createElement('div')
        clearDirectionsDiv.id = 'clear-direction-container'
        clearDirectionsDiv.innerHTML = `
            <a class="clear-directions">Clear Directions</a>
        `
        clearDirectionsDiv.addEventListener("click", function() {
            directionsDisplay.setMap(null);
            originMarker.setVisible(false);
            originMarker = null;
        })
        return clearDirectionsDiv;
    }

    function createSelectedMarkersLabel() {
        var selectedMarkersDiv = document.createElement('div')
        selectedMarkersDiv.id = 'selected-markers-label-container'
        selectedMarkersDiv.innerHTML = `
            <p class="selected-markers">Selected Markers: <span class="selected-num">0</span></p>
        `
        return selectedMarkersDiv;
    }

    function calcBounds(center,size){
        var n=google.maps.geometry.spherical.computeOffset(center,size.height/2,0).lat(),
            s=google.maps.geometry.spherical.computeOffset(center,size.height/2,180).lat(),
            e=google.maps.geometry.spherical.computeOffset(center,size.width/2,90).lng(),
            w=google.maps.geometry.spherical.computeOffset(center,size.width/2,270).lng();
            return  new google.maps.LatLngBounds(new google.maps.LatLng(s,w),
                                                 new google.maps.LatLng(n,e))
    }

    function getNumSelectedMarkers() {
        selectedMarkers = [];
        markerData.forEach(function(item) {
            var bounds = cityRect.getBounds();
            if (bounds.contains(item.coordinates)){
                selectedMarkers.push(item);
            }
        })
        return selectedMarkers.length;
    }

    function createRectPanel() {
        var rectDiv = document.createElement('div')
        rectDiv.id = 'rect-container'
        rectDiv.setAttribute("selected", "false");
        rectDiv.innerHTML = `
            <a class='select-rect'>▭</a>
        `
        rectDiv.addEventListener("click", function() {
            if (rectDiv.getAttribute('selected') == "false") {
                rectDiv.setAttribute('selected', "true")
                $('#rect-container').css("background-color", "#5c5b5b");
                var selectedMarkers = createSelectedMarkersLabel()
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(selectedMarkers);
    
                bounds = calcBounds(new google.maps.LatLng(defaultLoc.center.lat, defaultLoc.center.lng), new google.maps.Size(6000, 6000));
                cityRect = new google.maps.Rectangle({
                    strokeColor: '#FF0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FF0000',
                    fillOpacity: 0.35,
                    editable: true,
                    draggable: true,
                    map,
                    bounds: bounds
                })
                var numSelected = getNumSelectedMarkers()
                $('.selected-num').text(numSelected);
                cityRect.addListener("bounds_changed", function() {
                    var numSelected = getNumSelectedMarkers()
                    $('.selected-num').text(numSelected);
                })
            }
            else {
                cityRect.setMap(null);
                cityRect = null;
                $('#selected-markers-label-container').remove()
                $('#rect-container').css("background-color", "white");
                rectDiv.setAttribute('selected', "false")
            }
        })
        return rectDiv;
    }

    function showContextMenu(coordinates) {
        var contextmenu;
        var projection = map.getProjection();
        $('.contextmenu').remove();
        contextmenu = document.createElement('div');
        contextmenu.className = "contextmenu";
        contextmenu.innerHTML = `
            <a id="set-origin-menu"><div class="context">Set Origin Point</div></a>
        `
        contextmenu.addEventListener("click", () => {
            if (originMarker == null) {
                originMarker = new google.maps.Marker({
                    position: coordinates,
                    map: map
                });
            }
            else {
                originMarker.setPosition(coordinates);
            }
            originMarker.setVisible(true);
            originMarkerCoordinates = coordinates;
            $('.contextmenu').remove();
        })

        $(map.getDiv()).append(contextmenu);
        setMenuXY(coordinates);
        contextmenu.style.visibility = "visible";
    }

    function getCanvasXY(coordinates){
        var scale = Math.pow(2, map.getZoom());
        var nw = new google.maps.LatLng(
            map.getBounds().getNorthEast().lat(),
            map.getBounds().getSouthWest().lng()
        );
        var worldCoordinateNW = map.getProjection().fromLatLngToPoint(nw);
        var worldCoordinate = map.getProjection().fromLatLngToPoint(coordinates);
        var coordinateOffset = new google.maps.Point(
            Math.floor((worldCoordinate.x - worldCoordinateNW.x) * scale),
            Math.floor((worldCoordinate.y - worldCoordinateNW.y) * scale)
        );
        return coordinateOffset;
    }

    function setMenuXY(coordinates) { 
        var mapWidth = $('#map').width();
        var mapHeight = $('#map').height();
        var menuWidth = $('.contextmenu').width();
        var menuHeight = $('.contextmenu').height();
        var clickedPosition = getCanvasXY(coordinates);
        var x = clickedPosition.x;
        var y = clickedPosition.y;

        if((mapWidth - x ) < menuWidth)
            x = x - menuWidth;
        if((mapHeight - y ) < menuHeight)
            y = y - menuHeight;

        $('.contextmenu').css('left',x  );
        $('.contextmenu').css('top',y );
    }

    function calculateRoute(startCoordinates, endCoordinates){
        let request = {
            origin: startCoordinates,
            destination: endCoordinates,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: true
        };
        directionsService.route(request, function(response, status) {
            if (status == 'OK') {
                directionsDisplay.setMap(map)
                directionsDisplay.setDirections(response);
                markerData.forEach(function(item) {
                    item.detailWindow.close();
                })
            }
        })
    }

    google.maps.event.addListener(map, "rightclick", function(event){
        showContextMenu(event.latLng);
    })

    google.maps.event.addListener(map, "click", function() {
        $('.contextmenu').remove();
        markerData.forEach(function(item) {
            item.detailWindow.close();
        })
    })

    for (var i=0; i<markerData.length; i++){
        var resto = markerData[i];
        var marker = new google.maps.Marker({
            position: resto.coordinates,
            map: map,
            icon: addIcon()
        });
        markerData[i]['marker'] = marker;
    }

    for (var i=0; i<markerData.length; i++){
        showDetailWindow(markerData, i);
    }

    var filterPanel = createAllFilterPanel();
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(filterPanel);

    var clearDirectionPanel = createClearDirectionsPanel();
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(clearDirectionPanel)

    var rectPanel = createRectPanel();
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(rectPanel);

    // event listener for "Get Directions" Inside Info Window
    $(document.body).on("click", ".show-directions-td", function() {
        var restoData;
        for (var i=0; i<markerData.length; i++){
            if (markerData[i].nameCode == $(this).attr('id')) {
                restoData = markerData[i];
            }
        }
        if (originMarker != null) {
            calculateRoute(originMarkerCoordinates, restoData.coordinates)
        }
        else {
            alert("You need to set an Origin Point (by right clicking anywhere on the map)")
        }

    })
}

$('#map').bind('contextmenu', function(e) {
    return false;
})

setInterval(function() {
    markerData.forEach(function(item) {
        var newVisitors = Math.floor(Math.random() * 11);
        item.numVisitors += newVisitors;
        if (item.detailWindow != null) {
            item.detailWindow.setContent(renderDetailWindow(item));
        }
    })
}, 5000)
