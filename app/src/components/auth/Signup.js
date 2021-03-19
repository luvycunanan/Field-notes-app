import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const URL = 'https://field-notes-api.herokuapp.com/api/'

const Signup = () => {
  const history = useHistory('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !password2) {
      return setErr('All fields required');
    }

    if (password !== password2) {
      setErr('Passwords do not match, please try again.')
    }

    const newUser = { username, email, password };
    fetch(`${URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then((res) => {
      if (res.status === 200) {
        res.json();
      }
      setErr(res.statusText);
    })
    .then((data) => {
      console.log(data);
      history.push('/login');
    })
    .catch((err) => setErr(err.message))
  }

  return(
    <div>
      <h2>Signup</h2>
      {err && <h2>{err}</h2> }
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input 
            type="password" 
            name="password2" 
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup;