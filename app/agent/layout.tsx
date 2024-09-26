import { AgentHeader, Sidebar} from './components'
import { ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/solid"

export default function AgentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col h-screen'>
      <header className="w-full h-12 shadow shadow-lg shadow-black bg-primary">        
          <AgentHeader />        
      </header>
      <main className='grid grid-cols-12 bg-white font-[family-name:var(--font-geist-sans)] text-primary h-full'>
        <div className='col-span-4 bg-primary'>
          <Sidebar />
        </div>
        <div className='col-span-8 bg-white'>
          {children}      
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center bg-primary h-12">
      </footer>
    </div>
  );
}
