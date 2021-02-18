import { useEffect, useState } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";

interface RoutesPropsData extends RouteProps{
  role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
  const [permissions, setPermissions] = useState([] as string[])

  // pega as roles 
  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('/users/roles');
      const findRole = response.data.some((roleParam: string) => role?.split(',').includes(roleParam))
      setPermissions(findRole);
    }

    loadRoles() 
  }, [role])

  const { userLogged } = useAuth();

  // usuario nao logado
  if(!userLogged()) {
    return <Redirect to="/" />
  }

  // usuario logado mas rota sem role
  if(!role && userLogged()) {
    return <Route {...rest} />
  }

  return permissions ? <Route {...rest} /> : <Redirect to="/" />
}

export default PrivateRoutes;