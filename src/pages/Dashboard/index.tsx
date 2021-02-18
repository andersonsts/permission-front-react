import React from 'react';
import Permission from '../../components/Permission';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <Permission role="ROLE_ADMIN">
          <li>
            <a href="/product">Cadastro de produto</a>
          </li>
        </Permission>
        <li>
          <a href="/list">Listagem de produto</a>
        </li>
      </ul>
    </div>
  )
}

export default Dashboard;