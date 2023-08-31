<template>
    <div class="h-screen flex justify-center">
        <div class="bg-neutral w-1/3 hidden lg:block"></div>
        <div class="w-auto lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
            <div class="w-[384px] lg:w-full max-w-sm">
                <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-neutral font-bold text-5xl mt-8">Log in</div>
                <div class="form-control mt-8">
                    <label class="label">Email</label>
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="form-control mt-2">
                    <label class="label">Password</label>
                    <input type="password" placeholder="" class="input input-bordered w-full" />
                </div>
                <div class="flex justify-between mt-2 text-sm text-light-gray">
                    <div class="flex gap-2">
                        <input type="checkbox">
                        <label for="">Remember me</label>
                    </div>
                    <NuxtLink to="#" class="underline">Forgot password?</NuxtLink>
                </div>
                <div class="mt-8 text-center">
                    <NuxtLink class="btn btn-secondary normal-case font-medium text-base text-base-100 w-full" to="#">
                        Create account
                    </NuxtLink>
                </div>
                <div class="text-center mt-3">
                    <div class="text-neutral text-sm">Don't have an account?
                        <NuxtLink class="text-secondary" to="/register">Create now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>