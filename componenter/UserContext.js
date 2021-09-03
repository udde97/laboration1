import React from "react";

/*export const UserContext =  createContext();*/




const UserContext = React.createContext({});

export const UserProvider = UserContext.Provider;
export default UserContext;
    
    

/*export const UserProvider = ({props}) => {
    const [user, setUser] = useState({
        name: "oscar",});

    return (

    <UserContext.Provider value={{user, setUser}}>
        {props.children}

    </UserContext.Provider>)
}*/