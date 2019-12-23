//@flow
import {ReactRoot} from './view/react-root.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root");
if(root){
  ReactDOM.render(<ReactRoot/>, root)
}