
$(document).ready(function () {
    const showUserName = () =>{
        const user_logged = JSON.parse(localStorage.getItem('user_logged'));
        if (user_logged){
            $('#name-user').text(user_logged.firstName + ' ' + user_logged.lastName);
        }
        
        
    }
    
    showUserName();
})
