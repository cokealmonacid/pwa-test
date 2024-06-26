"use client";

import { useSessionStore } from "@/utils/store";
import Image from "next/image";

export const Navbar = () => {
  const { removeSession } = useSessionStore();

  const handleLogout = () => {
    removeSession();
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" width={30} height={30} style={{ height: 'auto', width: 'auto' }} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Notifier</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <a onClick={handleLogout} className="text-sm text-white cursor-pointer hover:underline">Salir</a>
          </div>
      </div>
    </nav>
  )
}
