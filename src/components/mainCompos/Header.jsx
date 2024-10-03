import Hero from "../typography/HeadingOne";

const Header = () => {
  return (
    <section className="min-h-[100vh] home-hero overflow-hidden flex flex-col items-center justify-center">
      <div className="bg-amber-950/50 w-full h-screen flex justify-center items-center ">
        <Hero />
      </div>
    </section>
  );
};
export default Header;