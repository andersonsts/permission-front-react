import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface PermissionComponentProps {
  role: string;

}

const Permission: React.FC<PermissionComponentProps> = ({ role, children }) => {
  const [permissions, setPermissions] = useState([] as string[]);

  // pega as roles 
  useEffect(() => {
    async function loadRoles() {
      const response = await api.get('/users/roles');
      const findRole = response.data.some((roleParam: string) => role?.split(',').includes(roleParam))
      setPermissions(findRole);
    }

    loadRoles() 
  }, [role])
  
  return (
    <>
      {permissions && children}
    </>
  )
}

export default Permission;