import {role, teachersData} from '@/data/data'
import { redirect } from 'next/navigation';

export default function Home() {
  if(role==='admin'){
    redirect('/dashboard')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Home</h1>
        
    </main>
  );
}
