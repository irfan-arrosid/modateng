<template>
    <div class="h-screen flex justify-center">
        <div class="bg-black w-1/3 hidden lg:block"></div>
        <div class="w-auto lg:w-2/3 flex justify-center items-center px-2.5 sm:px-5 lg:px-10">
            <div class="w-[384px] lg:w-full max-w-sm">
                <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-black font-bold text-5xl mt-8">Log in</div>
                <div class="email-field mt-4">
                    <label for="">Email</label>
                    <input type="text" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="password-field mt-4">
                    <label for="">Password</label>
                    <input type="password" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="flex justify-between mt-2 text-sm text-light-gray">
                    <div class="flex gap-2">
                        <input type="checkbox">
                        <label for="">Remember me</label>
                    </div>
                    <NuxtLink to="#" class="underline">Forgot password?</NuxtLink>
                </div>
                <div class="button block mt-8 text-center">
                    <NuxtLink
                        class="bg-secondary hover:bg-secondary-hover rounded-lg px-5 py-3 block w-full text-white font-medium"
                        to="#">
                        Log in
                    </NuxtLink>
                </div>
                <div class="text-center mt-3">
                    <div class="text-black text-sm">Don't have an account?
                        <NuxtLink class="text-secondary" to="/register">Create now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>