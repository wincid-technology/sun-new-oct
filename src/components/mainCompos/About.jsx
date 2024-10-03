import HeadingTwo from "@/components/typography/HeadingTwo";
import Image from "next/image";
const About = () => {
    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h2 className="text-gray-900 kanit-semibold-italic text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Who We Are</h2>
                            <p className="text-black text-base kanit-light font-normal leading-relaxed lg:text-start text-center">Empowering businesses with top-tier packaging solutions, we are your
                                go-to partner for all things corrugated. We've been at
                                the forefront of delivering innovative, durable, and eco friendly
                                boxes that safeguard products while enhancing brand value. With over
                                a decade of expertise, we've built a legacy of quality and
                                reliability, serving diverse industries with precision and care.
                                Trust us to protect what matters most. At Coropack, we specialize in creating high-quality, eco-friendly packaging designed to fit your unique products. Our solutions ensure maximum protection while minimizing environmental impact. Trust us to elevate your brand with packaging that delivers both style and sustainability. </p>
                        </div>
                    </div>
                    <img className="lg:mx-0 mx-auto h-full rounded-tl-[100px] rounded-br-[100px] object-cover" src="/img/recycleCard.jpg" alt="about Us image" />
                </div>
            </div>
        </section>

    );
};
export default About;