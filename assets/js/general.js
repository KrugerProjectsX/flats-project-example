
$(document).ready(function () {
    
    
    
    const showUserName = () =>{
        const user_logged = JSON.parse(localStorage.getItem('user_logged'));
        if (user_logged){
            $('#name-user').text(user_logged.firstName + ' ' + user_logged.lastName);
        }
        
    }
    
    showUserName();
    
    const getTimeLogged = () =>{
        const time = JSON.parse(localStorage.getItem('logged_time'));
        const timeLogged = new Date(time);
        const now = new Date();
        const diff = now - timeLogged;
        const diffSeconds = diff/1000;
        const diffMinutes = diffSeconds/60;
        console.log(diffMinutes)
        if (diffMinutes >= 60) {
            localStorage.removeItem('user_logged');
            localStorage.removeItem('logged_time');
            window.location.href = 'login.html';
        }
        
    }
    getTimeLogged();
});

