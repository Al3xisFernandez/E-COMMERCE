import { useState } from "react";
const Login = () => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const errorMessage = validate(Email,password);

    return (
        <form className="containerForm" onSubmit={ev => {
            ev.preventDefault();
            SigIn(Email, password);
        }}>
            <input
                type='text'
                name='Email'
                placeholder="Email"
                autoComplete="off"
                value={Email}
                onChange={ev =>setEmail(ev.target.value)}
            ></input>
            <input 
            type='password' 
            name='password' 
            placeholder="contraseña"
            value={password}
             onChange={ev =>setPassword(ev.target.value)}
            ></input>
            <p>{errorMessage}</p>
            <button type="submit" disabled={errorMessage}>Ingresar</button>
        </form>
    );
};

const SigIn = (Email, password) => {
if (Email === 'iniciandosesion@gmail.com' && password === 'probando')
alert('Login correcto');
else alert('Login incorreccto');
localStorage.setItem("SignIn", JSON.stringify(Email, password));
}
const validate = (email, password) => {
    if(!email.includes('@')) return'Email incorrecto';
    if(password.length < 8) return 'Contraseña incorrecta'
}
export default Login;