import Sidebar from "@/components/ui/Sidebar";
import Image from 'next/image'
import MobileNav from "@/components/ui/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstname: 'Chirag', lastname: 'Rajput'}
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        
        <div className='flex size-full flex-col'>
          <div className="root-layout">
            <Image src='/icons/logo.svg' width={50} height={50} alt='Menu Icon' />
            <div>
              <MobileNav user={loggedIn}/>
            </div>
          </div>
          {children}
        </div>
      
    </main>
  );
}
