import { useState } from "react";
import { useGlobalContext } from '../context';
const Search = () => {
  const [text, setText] = useState('');
  const {setSearchTerm, fetchRandomMeal} = useGlobalContext();
  
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      setSearchTerm(text);
      
    }
  }
  const handleRandomMeal = () => {
    setSearchTerm('');
    setText('');
    fetchRandomMeal()
  }
  return <header className="p-4 mb-8 max-w-screen-lg mx-auto">
    <form onSubmit={handleSubmit}>
      <input type='text' value={text} onChange={handleChange} placeholder="type favorite meal" className="border border-black py-2 px-4 rounded mr-2" />
      <button type='submit' className='cursor-pointer border border-black py-2 px-4 rounded bg-blue-400 text-white hover:bg-black mr-2'>Search</button>
      <button type='button' onClick={handleRandomMeal} className="cursor-pointer border border-black py-2 px-4 rounded hover:bg-black hover:text-white">Sorpréndeme</button>
    </form>
  </header>  
}

export default Search;