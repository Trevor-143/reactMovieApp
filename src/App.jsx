import { useState, useEffect } from 'react'
import Movie from './components/Movie'

// api = `https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${search_text.value}`
const key = 'ad6fb9de597140d6888525b8855e22b1'


function App() {

  const [ movies, setMovies ] = useState([])
  const [ searchText, setSearchText ] = useState('')
  
  useEffect (() => {
    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=avengers`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data.results)
      setMovies(data.results)
    })
  }, [])

  // const movies = ["1", "2", "3"];

  const searchHandler = (e) => {
    e.preventDefault()
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${searchText}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })
    }
    setSearchText('')
  }

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <form onSubmit={searchHandler}>
        <header className="search" placeholder="search movies">
          <input type="text" value={searchText} onChange={handleChange} />
        </header>   
      </form>  
      <div className="movieArray"> 
  
        {movies.map((movie) => (
          <Movie key={movie.id} { ...movie} />
        ))}
      </div>
    </>
  )
}

export default App
