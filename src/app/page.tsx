import Depoimentos from './components/depoimentos';
import { Faq } from './components/faq';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Examples</h1>

      <div className='flex flex-col items-center justify-center space-y-4'>
        <Faq />
      </div>
    </main>
  );
}
