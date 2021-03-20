import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const URL = 'https://field-notes-api.herokuapp.com/api/'

const Login = ({ setToken }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !email || !password ) {
      return setErr('All fields required');
    }
    const userData = { email, password };
    fetch(`${URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
    .then((res) => {
      // res.json();
      // console.log(res)
      if (res.status === 200 ) {
        return res.json();
      }
      return setErr(res.message);
    })
    .then((data) => {
      setToken(data.token);
      localStorage.setItem('token', data.token);
      history.push('/destinations');
    })
    .catch((err) => console.log(err));
  }

  return(
    <div>
      <h2>Login</h2>
      {err && <h2>{err}</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login;