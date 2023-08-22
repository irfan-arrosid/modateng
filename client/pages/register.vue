<template>
    <div class="h-screen flex justify-center">
        <div class="bg-black w-1/3 hidden md:block"></div>
        <div class="w-auto lg:w-2/3 flex justify-center items-center">
            <div class="max-w-sm">
                <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-black font-bold text-5xl mt-8">Create an account</div>
                <div class="name-field mt-8">
                    <label for="">Name</label>
                    <input type="text" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="email-field mt-4">
                    <label for="">Email</label>
                    <input type="text" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="password-field mt-4">
                    <label for="">Password</label>
                    <input type="password" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="confirm-password-field mt-4">
                    <label for="">Confirm password</label>
                    <input type="password" class="border border-light-gray mt-2 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="button block mt-8 text-center">
                    <NuxtLink
                        class="bg-secondary hover:bg-secondary-hover rounded-lg px-5 py-3 block w-full text-white font-medium"
                        to="#">
                        Create account
                    </NuxtLink>
                </div>
                <div class="text-center mt-3">
                    <div class="text-black text-sm">Already have account?
                        <NuxtLink class="text-secondary" to="/login">Log in</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>