import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../credenciales'
import { UserContext } from './UserContext';
import { useEffect, useState } from 'react';

function UserProvider ({ children }){
    const [user,setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            
            console.log(user != null ? 'Usuario loggeado' : 'Usuario no loggeado');
            setUser(user);
        });
    }, []);

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;