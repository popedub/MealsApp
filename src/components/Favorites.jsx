import { useGlobalContext } from '../context';

const Favorites = () => {
  const {favorites, selectMeal, removeFromFavorites} = useGlobalContext();
  return <div className='container mx-auto bg-gray-400 p-4'>
    <h2 className='text-2xl text-center'>Favoritos</h2>
    <div className='flex flex-row'>
      {favorites.map((item)=>{
      //aqui hacemos un get del objeto en variables con un nombre que sea sencillo
      const {idMeal, strMealThumb:image} = item;
      // y aqui llamamos a otro return, del function map? 
    return <div id={idMeal} className='w-1/6 flex flex-col justify-center align-center p-2'>
      <img src={image} onClick={()=>selectMeal(idMeal, true)} className='rounded-full mb-2'/>
      <button onClick={()=>removeFromFavorites(idMeal)}>Remove</button>
    </div>
      })}
    </div>
  </div>
}

export default Favorites;