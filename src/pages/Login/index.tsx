import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const { signIn } = useAuth()

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    await signIn({ username, password })
  
    history.push('/dashboard')
  }, [username, password, signIn, history])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Usuário</label>
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </div>

      <div>
        <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </div>

      <div>
        <button type="submit">ENTRAR</button>
      </div>
    </form>
    )
}

export default Login;