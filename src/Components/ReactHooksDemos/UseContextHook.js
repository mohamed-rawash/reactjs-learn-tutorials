import React, {useContext} from 'react'
import UserContext from '../userContext';

function UseContextHook() {
  const user = useContext(UserContext);
  return (
    <div>UseContextHook - {user.name}, { user.title}</div>
  )
}

export default UseContextHook