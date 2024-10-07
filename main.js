import './style.css'
import { UsersApp } from './src/users/users-app.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>
  </div>
`
const element = document.querySelector(".card");
UsersApp(element);