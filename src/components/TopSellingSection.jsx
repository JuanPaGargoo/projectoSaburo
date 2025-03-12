import ClothingCard from './ClotingCard';
import sudaderaSwansMarron from '../images/Clothes/sudaderaSwansMarronFrontal.jpg';
import pantalonVaqueroAzul from '../images/Clothes/pantalonVaqueroBasicoAzulFrontal.jpg';
import camisetaPearlAzul from '../images/Clothes/camisetaPearlAzulFrontal.jpg';
import sudaderaHotVerde from '../images/Clothes/sudaderaHotVerdeFrontal.jpg';

import { Button } from '@heroui/react';

function TopSellingSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 '>
        <h3 className='font-abrilFatface text-cafeCacao text-4xl'>Top Selling</h3>
        <div className=' w-full h-[450px] flex items-center justify-center gap-8'>
            <ClothingCard
            name="Sudadera Swans Marrón"
            price={2449}
            image={sudaderaSwansMarron}
            />
            <ClothingCard
                name="Pantalón Vaquero Azul Basico"
                price={2724}
                image={pantalonVaqueroAzul}
            />
            <ClothingCard
                name="Camiseta Pearl Azul"
                price={1239}
                image={camisetaPearlAzul}
            />

            <ClothingCard
                name="Sudadera Hot Verde"
                price={2449}
                image={sudaderaHotVerde}
            />      
            </div>

        <Button  radius='full' className='px-16 bg-white50 border-2 border-cafeAvellana text-cafeAvellana'>View All</Button>
    </div>
  )
}

export default TopSellingSection