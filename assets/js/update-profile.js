
document.addEventListener('DOMContentLoaded', function() {
    
    const user_logged = JSON.parse(localStorage.getItem('user_logged'));
    if (user_logged == null) {
        window.location.href = 'index.html'
    }
    
    const form = document.querySelector('form');

    form.addEventListener('submit', submitForm)
    
    function submitForm(e){
        e.preventDefault();
        const form = e.target;

        const user ={
            password: form.elements['password'].value,
            confirmPassword: form.elements['confirm-password'].value,
            firstName: form.elements['first-name'].value,
            lastName: form.elements['last-name'].value,
            birthdate: form.elements['birthdate'].value,
        }
        
        const emailUserLogged = user_logged.email;
        
        const users = JSON.parse(localStorage.getItem('users'));
        
        if (users != null ){

            const index = users.findIndex((item)=>{
                if (item.email === emailUserLogged){
                    return true;
                }
            });
            
            if (index !== -1){
                users[index].firstName = user.firstName;
                users[index].lastName = user.lastName;
                users[index].birthdate = user.birthdate;
                users[index].password = user.password;
                users[index].confirmPassword = user.confirmPassword;
                
            }

            localStorage.setItem('users',JSON.stringify(users))
            localStorage.setItem('user_logged',JSON.stringify(users[index]))

        }
        
        
        console.log(users)
        
    }
    
    
});
