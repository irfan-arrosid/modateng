import ButtonSeeMore from "@/components/ButtonSeeMore";
import CardEvent from "@/components/CardEvent";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TabsCategory from "@/components/TabsCategory";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <section className="hero bg-neutral px-2.5 sm:px-5 lg:px-10">
        <div className="container mx-auto relative">
          <div className="flex flex-col justify-center h-[375px] sm:h-[300px] lg:h-[575px]">
            <h1 className="text-base-100 font-bold text-4xl lg:text-5xl">
              Your Gateway to
              <br />
              Eventful Adventures
            </h1>
            <div className="form-control w-full sm:w-80 mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your city here"
                  className="input input-bordered w-full pr-16"
                />
                <Link
                  className="btn btn-primary absolute top-0 right-0 rounded-l-none normal-case font-medium text-base"
                  href="#"
                >
                  Find now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-section px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div className="container mx-auto relative">
          <div className="flex gap-2">
            <div className="browse-title text-neutral font-bold text-2xl lg:text-3xl">
              Find events in
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 lg:w-7 lg:h-7 stroke-secondary fill-none stroke-[3.5px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div className="text-secondary font-bold text-2xl lg:text-3xl">
                Tangerang
              </div>
            </div>
          </div>
          <TabsCategory />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <CardEvent />
          </div>
          <ButtonSeeMore />
        </div>
      </section>
      <section className="upcoming-event px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div className="container mx-auto relative">
          <div className="text-neutral font-bold text-2xl lg:text-3xl">
            Upcoming events
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <CardEvent />
          </div>
          <ButtonSeeMore />
        </div>
      </section>
      <Footer />
    </div>
  );
}
