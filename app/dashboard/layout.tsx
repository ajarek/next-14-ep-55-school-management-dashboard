


import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";




export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen  flex ">
      <div className='w-full  max-w-[264px] max-lg:w-1/6 border-r px-4 py-2 '>
      <Link
        href='/'
        className='w-full flex justify-center items-center gap-2 max-sm:gap-1'
      >
        <Image
          width={32}
          height={32}
          src='/images/logo.png'
          alt='logo'
        />
        <h1 className='font-semibold text-xl max-lg:hidden'>Copernicus School</h1>
      </Link>
       <Menu/>    
      </div>
      <div className="w-full ">
      <Navbar/>
      {children}
      </div>


    </div>
      
           
       
  );
}
