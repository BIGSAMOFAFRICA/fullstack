import './App.css'
import axios from 'axios'
function App() {
  const url = 'https://fullstack-server-three.vercel.app/test'
  const getInfo = () =>{
    axios.get(url)
    .then((res)=>{
      console.log(res.data);
      
    }).catch((err)=>{
      console.log(err);
    })
  }

   return (
    <>
    <button onClick={getInfo}>GetInfo</button>
    </>
  )
}

export default App
