import ClothingCard from './ClotingCard';
import camisetaCalculatorBlanco from '../images/Clothes/camisetaCalculatorBlancoArenaFrontal.jpg';
import camisetaHotAzulMarino from '../images/Clothes/camisetaHotAzulMarinoFrontal.jpg';
import camisetaTennisGrisOscura from '../images/Clothes/camisetaTennisGrisOscuraFrontal.jpg';
import camisetaVirginityAzul from '../images/Clothes/camisetaVirginityAzulFrontal.jpg';

import { Button } from '@heroui/react';

function NewArrivalsSection() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 border-b-2 border-grey-200'>
        <h3 className='font-abrilFatface text-cafeCacao text-4xl'>New Arrivals</h3>
        <div className=' w-full h-[450px] flex items-center justify-center gap-8'>
            <ClothingCard
            name="Camiseta Calculator Blanco Arena"
            price={1239}
            image={camisetaCalculatorBlanco}
            />
            <ClothingCard
                name="Camiseta Hot Azul Marino"
                price={1239}
                image={camisetaHotAzulMarino}
            />
            <ClothingCard
                name="Camiseta Tennis Gris Oscura"
                price={1239}
                image={camisetaTennisGrisOscura}
            />

            <ClothingCard
                name="Camiseta Virginity Azul"
                price={1239}
                image={camisetaVirginityAzul}
            />      
            </div>

        <Button  radius='full' className='px-16 bg-white50 border-2 border-cafeAvellana text-cafeAvellana'>View All</Button>
    </div>
  )
}

export default NewArrivalsSection