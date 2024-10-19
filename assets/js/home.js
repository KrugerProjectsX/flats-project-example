
document.addEventListener('DOMContentLoaded', function() {
  const user_logged= JSON.parse(localStorage.getItem('user_logged'));
  if (user_logged == null) {
      window.location.href = 'index.html'
  }
  
  const fillTable = () =>{
      
      const favorites = JSON.parse(localStorage.getItem('flats_favorites'));
      const flats = JSON.parse(localStorage.getItem('flats'));
      const tbody = document.querySelector('#flats-table tbody');
      tbody.innerHTML = '';
      
      if (favorites && Array.isArray(favorites)){ 
          const filtered = favorites.filter((item)=>{
              return  item.emailUser === user_logged.email
          
          })
          const flatsTable = filtered.map( (item)=>{
              const id = item.idFlat;
              return flats.find((flat)=> {
                  return flat.id === id
              })
          })
          if (flatsTable!= null && Array.isArray(flatsTable)) {
              flatsTable.forEach((flat)=>{
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

                  tbody.appendChild(tr);
              });
          }
              
          
      }
     
      
      
  }
    fillTable();    
  
})




