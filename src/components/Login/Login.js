import React from 'react';

export const SignIn  = () => {
    let pass = document.getElementById("pass").value;
    let user = document.getElementById("user").value;
    let users = [];
    const user1 = {
        user:"user1",
        pass:'1234'
    }
    users.push(user1);
    localStorage.setItem('users', JSON.stringify(users));

    if (localStorage.getItem("users")){
        let users = JSON.parse(localStorage.getItem('users'));

        for(let indice = 0; indice < users.length; indice++){
            if (user === users[indice].user && pass === users[indice].password){
                console.log("usuario logueado");
                break;
            }
        }
    }
}

document.querySelector("#login").addEventListener('click', (event) =>{
    event.preventDefault();
    SignIn();
})

export function Login() {
    return (
        <div className='contenair'>
            <form>
                <label>
                    User:
                    <input type="text" name="user" />
                </label>
                    Password:
                <input type="text" name="pass" />
                <button id='login' type="submit" name='Login'>Login</button>
            </form>
        </div>
    );
}
export default Login;