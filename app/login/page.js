import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div class="h-screen flex justify-center">
        <div class="bg-neutral hidden lg:block lg:w-1/3"></div>
        <div class="w-full lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
          <div class="w-full max-w-sm">
            <Link class="text-primary font-bold text-2xl" href="/">
              Modateng
            </Link>
            <div class="text-neutral font-bold text-5xl mt-4">Log in</div>
            <div class="form-control mt-10">
              <input
                type="text"
                placeholder="Email"
                class="input input-bordered w-full text-base"
              />
            </div>
            <div class="form-control mt-4">
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full text-base"
              />
            </div>
            <div class="flex justify-between mt-4 text-base text-light-gray">
              <div class="flex items-center gap-2">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <Link href="#" class="underline">
                Forgot password?
              </Link>
            </div>
            <div class="mt-6 sm:mt-8 text-center">
              <Link
                class="btn btn-secondary normal-case font-medium text-base text-base-100 w-full"
                href="#"
              >
                Log in
              </Link>
            </div>
            <div class="text-center mt-3">
              <div class="text-neutral text-base">
                Dont have an account?<span> </span>
                <Link class="text-secondary" href="/register">
                  Create now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
