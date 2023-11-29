import React, { Fragment } from 'react'
import ReactDOM  from 'react-dom';

function PortalDemo() {
  const body = <Fragment>
    <h2>how Are You</h2>
  </Fragment>
  const root = document.getElementById('portal-root');
  return ReactDOM.createPortal(body, root);
}

export default PortalDemo