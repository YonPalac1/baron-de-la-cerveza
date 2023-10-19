import { BrandPresentation } from "../Components/BrandPresentation";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import { BrandsBanner } from "../Components/BrandsBanner";
import { Cards } from "../Components/Cards";


export const Home = () => {
  return (
    <div>
      <BrandPresentation />
      <FeaturedProducts />
      <BrandsBanner />
      <Cards />
    </div>
  );
};
