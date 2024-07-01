import React, { useState } from 'react';
import './signUp.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const domainPattern = /@[\w-]+\.[a-zA-Z]{2,4}$/;
  const isValidGmail = domainPattern.test(gmail);
  const isValidPassword = password.length > 6;
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    if (isValidGmail && isValidPassword) {
      setError('');
      navigate('/');
    } else {
      setError('Please enter a valid Gmail and a password longer than 6 characters.');
    }
  };

  return (
    <div className='conteiner-signUp' >
      <div className='signUp'>
        <div className='input-div'>
          <form><input placeholder='example@gmail.com' className='signUp-input' type='emil' onChange={(e) => {setGmail(e.target.value.toLocaleLowerCase())}} ></input></form>
          <form><input placeholder='Password..' className='signUp-input' type='password' onChange={(e) => setPassword(e.target.value.toLocaleLowerCase())}></input></form>
        </div>
        {error && <div className='error-message'>{error}</div>}
        <div className='button-div'>
          <Link to={'/'}><button>Cancle</button></Link>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
