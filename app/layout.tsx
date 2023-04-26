import {Nunito} from "next/font/google";
import './globals.css'
import Images from "next/image/images/logo.png"
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/modals";
export const metadata = {
  //tabnae and description of the website set by the nextjs is changed in this section
  title: 'Airbnb',
  description: 'airbnb-des',
  
  
}
const font = Nunito({
  subsets:['latin'],


})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly >
          {/* <Modal/> */}
        <Navbar/>
        </ClientOnly>
        {children}</body>
    </html>
  )
}
