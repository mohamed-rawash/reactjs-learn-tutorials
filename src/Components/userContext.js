import React from "react";

const UserContext = React.createContext({name: "Mohamed", age: "24", title: "Front-end Developer"});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer };
export default UserContext;