import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default () => {
  return (
    <div>
      <NavLink exact to="/" className="color">
        页面
      </NavLink>{' '}
      |&nbsp;
      <NavLink to="/compa" className="color" activeClassName="active">
        a页面
      </NavLink>{' '}
      |&nbsp;
      <NavLink to="/compb" className="color">
        b页面
      </NavLink>{' '}
      |&nbsp;
      <NavLink to="/react" className="color">
        404
      </NavLink>
    </div>
  );
};
