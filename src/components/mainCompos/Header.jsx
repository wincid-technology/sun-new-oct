import Hero from "../typography/HeadingOne";
import Carousel from "../typography/Slider";

const Header = () => {
  return (
    // <div>1</div>
    <section className="min-h-[86.6vh] max-h-[86.6vh] h-[86.6vh] home-hero flex flex-col items-center justify-center">
       
      <div className="bg-transparent w-full overflow-hidden absolute">
        <Carousel />

        
        
      </div>
    </section>
  );
};
export default Header;