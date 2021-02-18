import React, { useCallback, useState } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

interface DataProps {
  name: string;
  description: string;
}

const Product: React.FC = () => {
  const [data, setData] = useState<DataProps>({
    name: '',
    description: ''
  })

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const { name, description } = data;

    const response = await api.post('/products', {
      name, 
      description
    })

    console.log(response.data);
  }, [data])

  function setStateData(event) {
    setData(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Nome</label>
        <input type="text" name="name" value={data.name} onChange={event => setStateData(event) } />

        <label htmlFor="">Descrição</label>
        <input type="text" name="description" value={data.description} onChange={event => setStateData(event)} />

        <button type="submit">Cadastrar</button>
      </div>
    </form>
  )
}

export default Product;