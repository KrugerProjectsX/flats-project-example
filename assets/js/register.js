
const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    
    const user ={
        email: form.elements['email'].value,
        password: form.elements['password'].value,
        confirmPassword: form.elements['confirm-password'].value,
        firstName: form.elements['first-name'].value,
        lastName: form.elements['last-name'].value,
        birthdate: form.elements['birthdate'].value,
    }
    
    if (user.password !== user.confirmPassword) {
        alert('Las contraseñas no coinciden')
        return
    }
    
    const users = JSON.parse(localStorage.getItem('users'))
    console.log(users)
    if (users == null) {
        const arrayUsers=[user]
        localStorage.setItem('users',JSON.stringify(arrayUsers))
    }else{
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users))
    }
    
    
    
    console.log('Guardado en localStorage')
    
    
}
