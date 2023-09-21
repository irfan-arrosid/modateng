import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="navbar h-[70px] px-2.5 sm:px-5 lg:px-10">
        <Link className="logo text-primary font-bold text-2xl" href="/">
          Modateng
        </Link>
        <ul className="flex ml-auto items-center gap-2">
          <li>
            <Link
              className="btn btn-ghost text-black font-medium normal-case text-base"
              href="/login"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              className="btn btn-secondary text-base-100 font-medium normal-case text-base"
              href="/register"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
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
          <div className="browse-categories mt-4">
            <ul className="flex gap-8 sm:gap-10 font-bold overflow-x-auto">
              <li>
                <Link
                  className="text-light-gray hover:text-black active:text-secondary hover:underline"
                  href="#"
                >
                  All
                </Link>
              </li>
              <li>
                <Link
                  className="text-light-gray hover:text-black hover:underline"
                  href="#"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  className="text-light-gray hover:text-black hover:underline"
                  href="#"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  className="text-light-gray hover:text-black hover:underline"
                  href="#"
                >
                  Hobbies
                </Link>
              </li>
              <li>
                <Link
                  className="text-light-gray hover:text-black hover:underline"
                  href="#"
                >
                  Sport
                </Link>
              </li>
              <li>
                <Link
                  className="text-light-gray hover:text-black hover:underline"
                  href="#"
                >
                  Health
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <Link
              className="card rounded-lg w-full bg-base-100 shadow-xl"
              href="#"
            >
              <figure className="bg-neutral min-h-[170px]"></figure>
              <div className="px-5 py-5">
                <div className="text-neutral font-bold text-2xl">
                  Indonesia 4.0 Conference & Expo
                </div>
                <div className="text-secondary font-bold text-base">
                  Sun, Aug 23, 9:00 AM
                </div>
                <div className="text-light-gray text-base mt-4">
                  JIEXPO Kemayoran - Central Jakarta, Jakarta
                </div>
                <div className="text-light-gray text-base">Free</div>
                <div className="text-neutral font-medium text-base mt-4">
                  Naganaya in collaboration with Ministry of Industry and
                  WANTRII
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-2/3 sm:w-1/3 mt-8 text-center">
              <Link
                className="btn btn-outline w-full normal-case font-medium text-base"
                href="#"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="upcoming-event px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div className="container mx-auto relative">
          <div className="text-neutral font-bold text-2xl lg:text-3xl">
            Upcoming events
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <Link
              className="card rounded-lg w-full bg-base-100 shadow-xl"
              href="#"
            >
              <figure className="bg-neutral min-h-[170px]"></figure>
              <div className="px-5 py-5">
                <div className="text-neutral font-bold text-2xl">
                  Indonesia 4.0 Conference & Expo
                </div>
                <div className="text-secondary font-bold text-base">
                  Sun, Aug 23, 9:00 AM
                </div>
                <div className="text-light-gray text-base mt-4">
                  JIEXPO Kemayoran - Central Jakarta, Jakarta
                </div>
                <div className="text-light-gray text-base">Free</div>
                <div className="text-neutral font-medium text-base mt-4">
                  Naganaya in collaboration with Ministry of Industry and
                  WANTRII
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-2/3 sm:w-1/3 mt-8 text-center">
              <Link
                className="btn btn-outline w-full normal-case font-medium text-base"
                href="#"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer items-center p-4 bg-neutral text-base text-base-100 mt-8 px-2.5 sm:px-5 lg:px-10">
        <aside className="items-center grid-flow-col">
          <div>© 2023 Modateng</div>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <ul className="grid grid-cols-2 sm:flex gap-6 font-extralight">
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Help</Link>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
