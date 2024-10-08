import './style.css'
import { UsersApp } from './src/users/users-app.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Crud</h1>
    <div class="card">

    </div>
  </div>
`
const element = document.getElementById('app');
UsersApp(element);