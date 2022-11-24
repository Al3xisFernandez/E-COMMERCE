import React from "react";
// import emailjs from "emailjs-com";

export const Contactenos = () => {
    return (
        <div className="div-form">
            <h1 className="title-form">Contactenos</h1>
            <form className="form-mail">
                <label>Nombre</label>
                <input type="text" name="user-name"  />
                <hr/>
                <label>Email</label>
                <input type="email" name="user_mail"/>
                <hr/>
                <label>Mensaje</label>
                <textarea name="user_message" id="" cols="30" rows={10}></textarea>
                <hr />
                <button>Enviar</button>
            </form>
        </div>
    )
}





















export default Contactenos;