import ClothingCard from './ClotingCard';
import productos from '../data/productos.json';

function AlsoLikeSection() {
  const producto1 = productos[8];
      const producto2 = productos[9];
      const producto3 = productos[10];
      const producto4 = productos[11];
  
    return (
      <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 border-b-2 border-grey-200'>
          <h3 className='font-abrilFatface text-cafeCacao text-4xl'>You Might Also Like</h3>
          <div className=' w-full h-[450px] flex items-center justify-center gap-8'>
              <ClothingCard
              id={producto1.id}
              name={producto1.name}
              price={producto1.price}
              image={producto1.images.front}
              />
              <ClothingCard
                  id={producto2.id}
                  name={producto2.name}
                  price={producto2.price}
                  image={producto2.images.front}
              />
              <ClothingCard
                  id={producto3.id}
                  name={producto3.name}
                  price={producto3.price}
                  image={producto3.images.front}
              />
  
              <ClothingCard
                  id={producto4.id}
                  name={producto4.name}
                  price={producto4.price}
                  image={producto4.images.front}
              />      
              </div>
  
      </div>
    )
}

export default AlsoLikeSection