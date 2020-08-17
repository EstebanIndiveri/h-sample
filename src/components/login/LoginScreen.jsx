import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleClick=()=>{
        // history.push('/marvel');
        const lastPath=localStorage.getItem('lastPath') || '/';
        dispatch({
            type:types.login,
            payload:{
                name:'Esteban'
            }
        });
        history.replace(lastPath);

    }
    return ( 
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
            className="btn btn-secondary"
            onClick={handleClick}
            >
                Login
            </button>
        </div>
     );
}
 
export default LoginScreen;