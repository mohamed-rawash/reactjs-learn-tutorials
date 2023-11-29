import ComponentC from './ComponentC';
import React, { Component } from 'react'
import UserContext from './userContext';

export class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>ComponentB</h2>
        <p>{ this.context.name} :- This From app component throw the context.</p>
        <ComponentC />
      </div>
    );
  } 
}

ComponentB.contextType = UserContext;

export default ComponentB