const submitFlat =  (event) => {
    event.preventDefault();
    const form = event.target;
    const flat = {
        city: form.elements['city'].value,
        streetName: form.elements['street-name'].value,
        streetNumber: form.elements['street-number'].value,
        hasAc: form.elements['has-ac'].value,
        areaSize: form.elements['area-size'].value,
        price: form.elements['price'].value,
        dateAvailable: form.elements['date-available'].value,
        yearBuilt: form.elements['year-built'].value,
        
    }
    const flats = JSON.parse(localStorage.getItem('flats'));
    if (flats != null) {
        flats.push(flat);
        localStorage.setItem('flats', JSON.stringify(flats));
    } else {
        localStorage.setItem('flats', JSON.stringify([flat]));
    }

}

const fillTable = (flats = null) =>{
    
    const tbody = document.querySelector('#flats-table tbody');
    tbody.innerHTML = '';
    if (flats == null) {
        flats = JSON.parse(localStorage.getItem('flats'));
    }
    
    if (flats!= null && Array.isArray(flats)) {
        flats.forEach((flat)=>{
            const tr = document.createElement('tr');
            tr.innerHTML = '' +
                '<td>' + flat.city + '</td>' +
                '<td>' + flat.streetName + '</td>' +
                '<td>' + flat.streetNumber + '</td>' +
                '<td>' + flat.hasAc + '</td>' +
                '<td>' + flat.areaSize + '</td>' +
                '<td>' + flat.price + '</td>' +
                '<td>' + flat.dateAvailable + '</td>' +
                '<td>' + flat.yearBuilt + '</td>';
            
            // const tdCity = document.createElement('td');
            // tdCity.innerText= flat.city;
            // tr.appendChild(tdCity);
            // const tdStreetName = document.createElement('td');
            // tdStreetName.innerText= flat.streetName;
            // tr.appendChild(tdStreetName);
            // const tdStreetNumber = document.createElement('td');
            // tdStreetNumber.innerText= flat.streetNumber;
            // tr.appendChild(tdStreetNumber);
            // const tdHasAc = document.createElement('td');
            // tdHasAc.innerText= flat.hasAc;
            // tr.appendChild(tdHasAc);
            // const tdAreaSize = document.createElement('td');
            // tdAreaSize.innerText= flat.areaSize;
            // tr.appendChild(tdAreaSize);
            // const tdPrice = document.createElement('td');
            // tdPrice.innerText= flat.price;
            // tr.appendChild(tdPrice);
            // const tdDateAvailable = document.createElement('td');
            // tdDateAvailable.innerText= flat.dateAvailable;
            // tr.appendChild(tdDateAvailable);
            // const tdYearBuilt = document.createElement('td');
            // tdYearBuilt.innerText= flat.yearBuilt;
            // tr.appendChild(tdYearBuilt);
            tbody.appendChild(tr);
        });
    }
    
    
}

const filterTable = (event) => {
    event.preventDefault();
    const form = event.target;
    const city = form.elements['city'].value;
    const minPrince = form.elements['min-price'].value;
    const maxPrice = form.elements['max-price'].value;
    
    
    
    
    
    const flats = JSON.parse(localStorage.getItem('flats'));
    if (flats!= null && Array.isArray(flats)) {
        
        const flatsFiltered = flats.filter((flat)=>{
            console.log(flat)
            if (city && city === flat.city){
                console.log('entra a city')
                return true;
            }
            if(minPrince && maxPrice){
                console.log('entra a min max',parseFloat(minPrince),parseFloat(maxPrice),parseFloat(flat.price ))
                if (parseFloat(minPrince) <=  parseFloat(flat.price )&& parseFloat(maxPrice) >= parseFloat(flat.price)){
                    console.log('comprueba a min max')
                    return true;
                }
            }
            
            return false;
        })
        fillTable(flatsFiltered)
    }
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    fillTable();
});



