export default function Home() {
  return (
    <div>
      <div class="navbar h-[70px] px-2.5 sm:px-5 lg:px-10">
        <div class="logo text-primary font-bold text-2xl">Modateng</div>
        <ul class="flex ml-auto items-center gap-2">
          <li>
            <div class="btn btn-ghost text-black font-medium normal-case text-base">
              Log In
            </div>
          </li>
          <li>
            <div class="btn btn-secondary text-base-100 font-medium normal-case text-base">
              Sign Up
            </div>
          </li>
        </ul>
      </div>
      <section class="hero bg-neutral px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
          <div class="flex flex-col justify-center h-[375px] sm:h-[300px] lg:h-[575px]">
            <h1 class="text-base-100 font-bold text-4xl lg:text-5xl">
              Your Gateway to
              <br />
              Eventful Adventures
            </h1>
            <div class="form-control w-full sm:w-80 mt-8">
              <div class="relative">
                <input
                  type="text"
                  placeholder="Type your city here"
                  class="input input-bordered w-full pr-16"
                />
                <div class="btn btn-primary absolute top-0 right-0 rounded-l-none normal-case font-medium text-base">
                  Find now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="browse-section px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div class="container mx-auto relative">
          <div class="flex gap-2">
            <div class="browse-title text-neutral font-bold text-2xl lg:text-3xl">
              Find events in
            </div>
            <div class="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-6 h-6 lg:w-7 lg:h-7 stroke-secondary fill-none stroke-[3.5px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div class="text-secondary font-bold text-2xl lg:text-3xl">
                Tangerang
              </div>
            </div>
          </div>
          <div class="browse-categories mt-4">
            <ul class="flex gap-8 sm:gap-10 font-bold overflow-x-auto">
              <li>
                <div class="text-light-gray hover:text-black active:text-secondary hover:underline">
                  All
                </div>
              </li>
              <li>
                <div class="text-light-gray hover:text-black hover:underline">
                  Music
                </div>
              </li>
              <li>
                <div class="text-light-gray hover:text-black hover:underline">
                  Business
                </div>
              </li>
              <li>
                <div class="text-light-gray hover:text-black hover:underline">
                  Hobbies
                </div>
              </li>
              <li>
                <div class="text-light-gray hover:text-black hover:underline">
                  Sport
                </div>
              </li>
              <li>
                <div class="text-light-gray hover:text-black hover:underline">
                  Health
                </div>
              </li>
            </ul>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <div class="card rounded-lg w-full bg-base-100 shadow-xl">
              <figure class="bg-neutral min-h-[170px]"></figure>
              <div class="px-5 py-5">
                <div class="text-neutral font-bold text-2xl">
                  Indonesia 4.0 Conference & Expo
                </div>
                <div class="text-secondary font-bold text-base">
                  Sun, Aug 23, 9:00 AM
                </div>
                <div class="text-light-gray text-base mt-4">
                  JIEXPO Kemayoran - Central Jakarta, Jakarta
                </div>
                <div class="text-light-gray text-base">Free</div>
                <div class="text-neutral font-medium text-base mt-4">
                  Naganaya in collaboration with Ministry of Industry and
                  WANTRII
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-2/3 sm:w-1/3 mt-8 text-center">
              <div class="btn btn-outline w-full normal-case font-medium text-base">
                See more
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="upcoming-event px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div class="container mx-auto relative">
          <div class="text-neutral font-bold text-2xl lg:text-3xl">
            Upcoming events
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
            <div class="card rounded-lg w-full bg-base-100 shadow-xl">
              <figure class="bg-neutral min-h-[170px]"></figure>
              <div class="px-5 py-5">
                <div class="text-neutral font-bold text-2xl">
                  Indonesia 4.0 Conference & Expo
                </div>
                <div class="text-secondary font-bold text-base">
                  Sun, Aug 23, 9:00 AM
                </div>
                <div class="text-light-gray text-base mt-4">
                  JIEXPO Kemayoran - Central Jakarta, Jakarta
                </div>
                <div class="text-light-gray text-base">Free</div>
                <div class="text-neutral font-medium text-base mt-4">
                  Naganaya in collaboration with Ministry of Industry and
                  WANTRII
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="w-2/3 sm:w-1/3 mt-8 text-center">
              <div class="btn btn-outline w-full normal-case font-medium text-base">
                See more
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer items-center p-4 bg-neutral text-base text-base-100 mt-8 px-2.5 sm:px-5 lg:px-10">
        <aside class="items-center grid-flow-col">
          <div>© 2023 Modateng</div>
        </aside>
        <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <ul class="grid grid-cols-2 sm:flex gap-6 font-extralight">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
            <div>Help</div>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
