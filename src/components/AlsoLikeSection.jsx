import ClothingCard from './ClotingCard';
import productos from '../data/productos.json';
import isotipo from '../icons/isotipo.png';

function AlsoLikeSection() {
    const productosRandom = [...productos].sort(() => Math.random() - 0.5);

    const producto1 = productosRandom[0];
    const producto2 = productosRandom[1];
    const producto3 = productosRandom[2];
    const producto4 = productosRandom[3];
  
    return (
      <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 border-b-2 border-grey-200'>
            <div className='flex items-center gap-5'>
                <img src={isotipo} alt="Isotipo" className='w-7 h-7 transform scale-x-[-1]' />
                <h3 className='font-abrilFatface text-cafeCacao text-4xl'>You Might Also Lik</h3>
                <img src={isotipo} alt="Isotipo" className='w-7 h-7' />
            </div>
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