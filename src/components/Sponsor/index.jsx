import Image from "next/image";

export default function Sponsor() {
  return (
    <section className="sponsor section">
       <div className="sponsor-container section-container mx-auto max-w-screen-lg grid gap-6 grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 sm:gap-y-20 sm:gap-x-16 lg:gap-x-[7.5rem] pt-2 pb-[4.5rem] lg:pb-24">
          <Image src="/img/sponsor-1.png" alt="sponsor image" width={100} height={100} className="sponsor-img justify-self-center self-center transition-transform duration-300 hover:scale-110" quality={100} />
          <Image src="/img/sponsor-2.png" alt="sponsor image" width={100} height={100} className="sponsor-img justify-self-center self-center transition-transform duration-300 hover:scale-110" quality={100} />
          <Image src="/img/sponsor-3.png" alt="sponsor image" width={100} height={100} className="sponsor-img justify-self-center self-center transition-transform duration-300 hover:scale-110" quality={100} />
          <Image src="/img/sponsor-4.png" alt="sponsor image" width={100} height={100} className="sponsor-img justify-self-center self-center transition-transform duration-300 hover:scale-110" quality={100} />
       </div>
    </section>
  );
}