import { useGlobalContext } from '../context';

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  //aqui creamos variables desde el selectedMeal así es más fácil referenciar los elementos
  const {strMealThumb:image, strMeal:title, strInstructions:text, strSource:source} = selectedMeal
  
  return <aside className='modal-overlay'>
    <div className='modal-container relative'>
      <button onClick={closeModal} className='absolute right-4 top-4 uppercase'>Close</button>
      <div className='mt-8 p-4'>
        <img src={image} alt={title} className='mx-auto'/>
        <h1 className='text-center text-2xl'>{title}</h1>
        <p>Cooking Instrucitions</p>
        <p className='mb-4'>{text}</p>
        <a href={source}  target="_blank">Original Source</a>
        
        
      </div>
      
    </div>
  </aside>
}

export default Modal;