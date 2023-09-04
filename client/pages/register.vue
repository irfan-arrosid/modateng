<template>
    <div class="h-screen flex justify-center">
        <div class="bg-neutral hidden lg:block lg:w-1/3"></div>
        <div class="w-full lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
            <div class="w-full max-w-sm">
                <NuxtLink class="text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-neutral font-bold text-5xl mt-4">Create an account</div>
                <div class="form-control mt-10">
                    <input type="text" placeholder="Name" class="input input-bordered w-full text-lg" />
                </div>
                <div class="form-control mt-4">
                    <input type="text" placeholder="Email" class="input input-bordered w-full text-lg" />
                </div>
                <div class="form-control mt-4">
                    <input type="password" placeholder="Password" class="input input-bordered w-full text-lg" />
                </div>
                <div class="form-control mt-4">
                    <input type="password" placeholder="Confirm password" class="input input-bordered w-full text-lg" />
                </div>
                <div class="mt-6 sm:mt-8 text-center">
                    <NuxtLink class="btn btn-secondary normal-case font-medium text-lg text-base-100 w-full" to="#">
                        Create account
                    </NuxtLink>
                </div>
                <div class="text-center mt-3">
                    <div class="text-neutral text-base">Already have an account?
                        <NuxtLink class="text-secondary" to="/login">Log in</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>