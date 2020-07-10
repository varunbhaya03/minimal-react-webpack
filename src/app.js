import React, {useState} from 'react'
import './app.scss'
import Child from './components/Child'
import Image from './assets/images/image.png'

function App() {
  const [count, seCount] = useState(0)

  return(
    <div className="app">
      Webpack application with {process.env.REACT_APP_ENV} as env. 
      {count}
      <Child />
      <img onClick={() => seCount(count + 1)} src={Image} alt="image" style={{width:300}} />
    </div>
  )
}
export default App