import React from 'react'
import { UserConsumer } from './userContext';

function ComponentC() {
  return (
    <UserConsumer>
      {
        (userName) => {
          return (
            <div>
              <h3>ComponentC</h3>
              <p>
                "{userName.name}":- This Value passed From App Component Throw the React
                Context.
              </p>
            </div>
          );
        }
      }
    </UserConsumer>
  );
}

export default ComponentC