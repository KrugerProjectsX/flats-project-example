let current_table = [];


const submitFlat =  (event) => {
    event.preventDefault();
    const form = event.target;
    const date = new Date();
    const flat = {
        id: date.getTime(),
        city: form.elements['city'].value,
        streetName: form.elements['street-name'].value,
        streetNumber: form.elements['street-number'].value,
        hasAc: form.elements['has-ac'].value,
        areaSize: parseFloat(form.elements['area-size'].value),
        price: parseFloat(form.elements['price'].value),
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
    
    current_table = flats;
    
    if (flats!= null && Array.isArray(flats)) {
        flats.forEach((flat)=>{
            const tr = document.createElement('tr');
            // tr.innerHTML = '' +
            //     '<td>' + flat.city + '</td>' +
            //     '<td>' + flat.streetName + '</td>' +
            //     '<td>' + flat.streetNumber + '</td>' +
            //     '<td>' + flat.hasAc + '</td>' +
            //     '<td>' + flat.areaSize + '</td>' +
            //     '<td>' + flat.price + '</td>' +
            //     '<td>' + flat.dateAvailable + '</td>' +
            //     '<td>' + flat.yearBuilt + '</td>' + 
            //     '<td>' + '<button onclick="addFavorite('+flat.id+')">Add</button>'+ '</td>';
            const tdCity = document.createElement('td');
            tdCity.innerText= flat.city;
            tr.appendChild(tdCity);
            const tdStreetName = document.createElement('td');
            tdStreetName.innerText= flat.streetName;
            tr.appendChild(tdStreetName);
            const tdStreetNumber = document.createElement('td');
            tdStreetNumber.innerText= flat.streetNumber;
            tr.appendChild(tdStreetNumber);
            const tdHasAc = document.createElement('td');
            tdHasAc.innerText= flat.hasAc;
            tr.appendChild(tdHasAc);
            const tdAreaSize = document.createElement('td');
            tdAreaSize.innerText= flat.areaSize;
            tr.appendChild(tdAreaSize);
            const tdPrice = document.createElement('td');
            tdPrice.innerText= flat.price;
            tr.appendChild(tdPrice);
            const tdDateAvailable = document.createElement('td');
            tdDateAvailable.innerText= flat.dateAvailable;
            tr.appendChild(tdDateAvailable);
            const tdYearBuilt = document.createElement('td');
            tdYearBuilt.innerText= flat.yearBuilt;
            tr.appendChild(tdYearBuilt);
            
            const tdAdd = document.createElement('td');
            
            const button = document.createElement('button');
            button.onclick = (e) => toggleFavorite(flat.id,e);
            button.innerText = (checkFlatFavorite(flat.id))?'Remove':'Add'
            
            tdAdd.appendChild(button);
            
            tr.appendChild(tdAdd);
            
            tbody.appendChild(tr);
        });
    }
    
    
}

const checkFlatFavorite = (id) => {
    const flats_favorites = JSON.parse(localStorage.getItem('flats_favorites'));
    if (flats_favorites != null) {
        const exist = flats_favorites.findIndex((item)=>{
            return item.idFlat === id
        })
        if (exist !== -1){
            return true;
        }
        
    }
    return false;
}



const filterTable = (event) => {
    event.preventDefault();
    const form = event.target;
    const city = form.elements['city'].value;
    let minPrince = form.elements['min-price'].value;
    const maxPrice = form.elements['max-price'].value;
    
    
    
    
    
    const flats = JSON.parse(localStorage.getItem('flats'));
    if (flats!= null && Array.isArray(flats)) {
        
        const flatsFiltered = flats.filter((flat)=>{
            if (city){
                if ( city !== flat.city){
                    return false;
                }
            }
            
            if (!minPrince){
                minPrince = 0;
            }
            
            if(maxPrice){
                
                if (parseFloat(minPrince) > parseFloat(flat.price ) || 
                    parseFloat(maxPrice) < parseFloat(flat.price)){
                    
                    return false;
                }
            }else{
               if (parseFloat(minPrince) > parseFloat(flat.price )) {
                    return false;
               }
            }
            
            return true;
        })
        
        fillTable(flatsFiltered)
    }
    
    
}


const orderTable =(column)=>{
    
    if (current_table && Array.isArray(current_table)){
        
        const tableSorted = current_table.sort((a,b)=>{
            if (a[column] > b[column]){
                return 1;
            }
            if (a[column] < b[column]){
                return -1;
            }
            return 0;

        });

        fillTable(tableSorted);
    }
    
    
} 

const toggleFavorite = (id,e) => {
    const user_logged = JSON.parse(localStorage.getItem('user_logged'));
    if (!user_logged){
        alert('You must be logged in to add a favorite');
        return;
    }
    
    const email = user_logged.email
    
    const favorite = {
        idFlat:id,
        emailUser:email
    }
    const flats_favorites = JSON.parse(localStorage.getItem('flats_favorites'));
    if (flats_favorites == null) {
        const flats_favorites = [favorite];
        localStorage.setItem('flats_favorites', JSON.stringify(flats_favorites));
    }else{
        const exist =  flats_favorites.findIndex((item)=>{
            return item.idFlat === id
        })
        if (exist === -1){
            flats_favorites.push(favorite);
            e.target.textContent = 'Remove';
        }else{
            flats_favorites.splice(exist, 1);
            e.target.textContent = 'Add';
        }
       
        localStorage.setItem('flats_favorites', JSON.stringify(flats_favorites));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fillTable();
});



