import Hero from "../typography/HeadingOne";
import Carousel from "../typography/Slider";

const Header = () => {
  return (
    <section className="min-h-screen max-h-screen h-screen home-hero overflow-hidden flex flex-col items-center justify-center">
       
      <div className="bg-transparent w-full overflow-hidden absolute">
        <Carousel />

        
        
      </div>
    </section>
  );
};
export default Header;