import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Permission from "../../components/Permission";

import api from "../../services/api";

interface ProductData {
  id: string;
  name: string;
  description: string;
}

const List: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);

  const history = useHistory();

  useEffect(() => {
    api.get('/products').then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <h3>Listagem de produtos</h3>
        {products.map((product: ProductData) => (
          <div key={product.id}>
            <span>ID: {product.id}</span>
            <span>Nome: {product.name}</span>
            <span>Descrição: {product.description}</span>

            <Permission role="ROLE_ADMIN">
              <button type="button" onClick={() => history.push('/product')}>Cadastrar produto</button>
            </Permission>
          </div>
        ))}
    </div>
  )
}

export default List;