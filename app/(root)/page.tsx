import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <section className=" wrapper py-5 md:py10  ">
        <div className=" wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <div className=" flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events,Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="heroimg"
            height={1000}
            width={1000}
            className=" max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousants of Events
        </h2>
        <div className=" flex flex-col w-full gap-5 md:flex-row">
          search category filtor
        </div>
      </section>
    </>
  );
}
