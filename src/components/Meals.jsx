import { useGlobalContext } from '../context';

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites } = useGlobalContext();
if(loading) {
  return <section className='section text-2xl flex align-center justify-center'><h4>Loading...</h4></section>
}
if(meals.length < 1) {
  return <section className='section text-2xl flex align-center justify-center'>
  <h4>No items found. try again</h4></section>
  
}
  return <div className='container mx-auto'>
    <div className='max-w-screen-lg mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4'>
    {
      meals.map((singleMeal) => {
         
        return <article key={singleMeal.idMeal} className="p-4 shadow-lg border border-grey-400">
          <img src={singleMeal.strMealThumb} onClick={()=> selectMeal(singleMeal.idMeal)} className='cursor-pointer hover:blur transition easty-in-out' />
          <div className='flex flex-col align-center justify-center'>
          <h4 className="text-center mt-2 text-lg mb-4">{singleMeal.strMeal}</h4>
          <button onClick={()=>addToFavorites(singleMeal.idMeal)} className='cursor-pointer border border-black py-2 px-4 rounded hover:bg-black hover:text-white'>add FAV</button>
            </div>
        </article>
      }

      )}
  </div>
    </div>
}

export default Meals;