import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';
import Comment from './Comment';
import Clock from './Clock';
import './index.css';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import WarningBanner from './WarningBanner';
import Calculator from './Calculator';


const data = {
  date: new Date(),
  text:
    'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:
      'http://placekitten.com/g/64/64',
  },
};

const numbers=[1,2,3,4,5];
const listNum= numbers.map((number)=>
  <li>{number}</li>
)
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
