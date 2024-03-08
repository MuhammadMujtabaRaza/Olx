import React, { useState , useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {Link, useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)

  const handleSumbit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=> {
      result.user.updateProfile({displayName: username})
      .then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username: username,
          phone: phone
        })
      })
      history.push("/login")
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <form onSubmit={handleSumbit}>
          <label>Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label >Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to={'/login'}>Login</Link>
      </div>
    </div>
  );
}
