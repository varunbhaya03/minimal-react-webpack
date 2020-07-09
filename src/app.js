import React from 'react'
import Child from './components/Child'
import Image from './assets/image.png'

function App() {

  return(
    <div>
      Webpack application
      <img src={Image} alt="image" />
      <Child />
    </div>
  )
}
export default App