"use client"
import { useEffect } from "react";

// CSS
import '../modules/styles/globals.css'

import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <ToastContainer/>
    </html>
  )
}
