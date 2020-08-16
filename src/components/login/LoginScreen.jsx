import React from 'react'

const LoginScreen = ({history}) => {
    const handleClick=()=>{
        // history.push('/marvel');
        history.replace('/marvel');
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