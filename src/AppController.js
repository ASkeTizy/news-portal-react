import React from "react";
import ReactDOM from 'react-dom/client';

import App from './components/App';

export default class AppController {
  constructor(root) {
    this.reactRoot = ReactDOM.createRoot(root);
  }

  run() {
    this.reactRoot.render(React.createElement(App, {}, null));
  }
};