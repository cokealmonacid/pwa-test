"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useSessionStore } from "../utils/store";
import { login } from "../utils/services";
import LoadingDots from "../components/LoadingDots";

export default function Home() {
  const router = useRouter();
  const { createSession, access_token } = useSessionStore();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (access_token) router.push("/dashboard");

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError("");
    }
  
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = inputs;
    const res = await login(email, password);
    if (!res.access_token) {
      setError(res.message);
    } else {
      createSession(res);
      router.push("/dashboard");
    }

    setLoading(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <form className="bg-white w-[320px] rounded-md p-4" onSubmit={handleSubmit}>
          <div className="mb-5 flex items-center justify-center">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={30} height={30} style={{ height: 'auto', width: 'auto' }} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">Notifier</span>
            </a>
          </div>
          { error && <p className="text-red-500 my-4">{error}</p> }
          <div className="mb-5">
            <label htmlFor="email" className="block text-xs text-gray-600 uppercase">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleInputs}
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-gray-800"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-xs text-gray-600 uppercase">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleInputs}
              autoComplete=""
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-gray-800"
              required
            />
          </div>
          <button type="submit" className="border-black w-full rounded-md p-2 bg-blue-700 hover:bg-blue-500 hover:font-semibold text-white">
            {loading ? (
              <LoadingDots color="#FFFFFF" />
            ) : (
              <p>Ingresar</p>
            )}
          </button>
        </form>
    </main>
  );
}
