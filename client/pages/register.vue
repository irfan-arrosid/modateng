<template>
    <div class="h-screen flex justify-center">
        <div class="bg-neutral w-1/3 hidden lg:block"></div>
        <div class="w-auto lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
            <div class="w-full max-w-sm">
                <NuxtLink class="text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-neutral font-bold text-5xl mt-8">Create an account</div>
                <div class="form-control mt-8">
                    <label class="label">Name</label>
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="form-control mt-2">
                    <label class="label">Email</label>
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="form-control mt-2">
                    <label class="label">Password</label>
                    <input type="password" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="form-control mt-2">
                    <label class="label">Confirm password</label>
                    <input type="password" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="mt-8 text-center">
                    <NuxtLink class="btn btn-secondary normal-case font-medium text-base text-base-100 w-full" to="#">
                        Create account
                    </NuxtLink>
                </div>
                <div class="text-center mt-3">
                    <div class="text-neutral text-sm">Already have account?
                        <NuxtLink class="text-secondary" to="/login">Log in</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>