const loginForm =(e)=>{
    e.preventDefault();
    const form = e.target;
    const user ={
        email: form.elements['email'].value,
        password: form.elements['password'].value,
    }
    
    const users= JSON.parse(localStorage.getItem('users'));
    if (users != null) {
       const result = users.find((item)=>{
           return item.email === user.email && item.password === user.password
       })
        
        if (result !== undefined) {
            alert('Bienvenido')
            localStorage.setItem('user_logged',JSON.stringify(result))
            window.location.href = 'home.html'
            
        }else{
            alert('Email o contraseña incorrecta')
        }
        
    }
    

    
}
