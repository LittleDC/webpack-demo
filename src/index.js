import _ from 'lodash';
import './style.css'

function component() {
  const element = document.createElement('div');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());