import ClothingCard from './ClotingCard';
import { Button } from '@heroui/react';
import productos from '../data/productos.json';

function NewArrivalsSection() {
    const producto1 = productos[0];
    const producto2 = productos[1];
    const producto3 = productos[2];
    const producto4 = productos[3];


  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 border-b-2 border-grey-200'>
        <h3 className='font-abrilFatface text-cafeCacao text-4xl'>New Arrivals</h3>
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

        <Button  radius='full' className='px-16 bg-white50 border-2 border-cafeAvellana text-cafeAvellana'>View All</Button>
    </div>
  )
}

export default NewArrivalsSection