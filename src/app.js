import React from 'react'
import './app.scss'
import Child from './components/Child'
import Image from './assets/images/image.png'

function App() {

  return(
    <div className="app">
      Webpack application
      <Child />
      <img src={Image} alt="image" style={{width:300}} />
    </div>
  )
}
export default App