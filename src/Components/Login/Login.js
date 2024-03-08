import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => history.push('/'))
      .catch((err) => alert(err.message));
  };

  return (
    <div>
      <div className="loginParentDiv">
        {/* <img width="200px" height="200px" src={Logo} alt="network error" /> */}
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label><br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          /><br />
          <label htmlFor="password">Password</label><br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          /><br /><br />
          <button>Login</button>
        </form>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
