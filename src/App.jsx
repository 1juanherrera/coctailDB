import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Coctails from './components/Coctails'
import ShowToast from './components/ShowToast'

function App() {

  const [ DataCoctail, setDataCoctail ] = useState([])
  const [ name, setName ] = useState('')

  const getCoctailData = () => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => {
      setDataCoctail(resp.data.drinks)
    })
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getCoctailData()
  }, [name])

  const searchCoctail = (e) => {
    e.preventDefault()

    setName( e.target[0].value.toLowerCase() )
  }
  
  return (
    <div className='App'>
      <h1 className='milky'>CoctailDB</h1>
      <form onSubmit={(e) => searchCoctail(e)}>
        <input placeholder='Busca tu coctel' type="text" />
        <button>buscar</button>
      </form>
      {
        DataCoctail 
        ?
        DataCoctail.map((character, index) => <Coctails
        key={`character-${index}`} data={character}
        /> )
        :
        <ShowToast />
      }
    </div>
  )
}

export default App
