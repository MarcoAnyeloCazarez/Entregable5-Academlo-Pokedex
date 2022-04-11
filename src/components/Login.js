import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [ userName, setUserName ] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submit = e => {
        e.preventDefault();
        console.log(userName);
        dispatch({ 
            type: "GET_USERNAME", 
            payload: userName
        })   //esto me permite cargar el nombre que se de en el imput a una propiedad del estado global
        setUserName("")
        navigate("/Pokedex")
    }

    return (
        <div className='Home' >
            <div className='presentation'>
                <h2>Hello Trainer!</h2>
                <img src="https://simg.nicepng.com/png/small/18-183757_ash-clipart-pokemon-ash-png.png" alt="" />
            </div>

            <div className='browser' >
                <form action="" onSubmit={submit}>
                    <p>  Give me your name to start </p>
                    <input 
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                    <button >{ <i class="fa-solid fa-paper-plane"></i> }</button>
                </form>
            </div>
        </div>
    );
};

export default Login;