"use client";

import { useRouter } from "next/navigation";

export default function AuthBtn() {
    const router = useRouter();

    const goLogin = () => {
        router.push("/login")
    }

    const goRegister = () => {
        router.push("/register")
    }

    return (
        <div className="hidden lg:flex lg:items-center gap-x-2">
            <button
                className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold"
                onClick={goRegister}
            >
                Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" onClick={goLogin}>
                Login
            </button>
        </div>
    );
}
