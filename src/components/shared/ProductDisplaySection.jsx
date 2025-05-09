import ClothingCard from './ClothingCard';
import { Button } from '@heroui/react';
import isotipo from '../../icons/isotipo.png'; 
import { API_ENDPOINTS } from '../../constants/api'; 

function ProductDisplaySection({ title, products, showButton = false }) {
    return (
        <div className='flex flex-col items-center justify-center gap-5 mt-8 pb-8 border-b-2 border-grey-200'>
            <div className='flex items-center gap-5'>
                <img src={isotipo} alt="Isotipo" className='w-7 h-7 transform scale-x-[-1]' />
                <h3 className='font-abrilFatface text-cafeCacao text-4xl'>{title}</h3>
                <img src={isotipo} alt="Isotipo" className='w-7 h-7' />
            </div>
            <div className='w-full h-[450px] flex items-center justify-center gap-8'>
                {products.map(product => (
                    <ClothingCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`}
                    />
                ))}
            </div>
            {showButton && (
                <Button radius='full' className='px-16 bg-white50 border-2 border-cafeAvellana text-cafeAvellana'>
                    View All
                </Button>
            )}
        </div>
    );
}

export default ProductDisplaySection;