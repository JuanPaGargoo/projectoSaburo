import MediaSpot from '../shared/MediaSpot';
import ProductDisplaySection from '../shared/ProductDisplaySection';
import GridRopa from '../shared/GridRopa';
import CommentsSection from '../shared/CommentsSection';
import useRandomProducts from '../../hooks/useRandomProducts';

function Main() {

  return (
    <>
      <MediaSpot/>
      <ProductDisplaySection title="New Arrivals" products={useRandomProducts()} showButton={true} />
      <ProductDisplaySection title="Top Sellings" products={useRandomProducts()} showButton={true} />
      <GridRopa/>
      <CommentsSection/>
    </>
    
  )
}

export default Main;