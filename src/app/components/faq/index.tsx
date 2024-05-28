import { FaqItem } from './faqItem';
import { Content } from './content';

export function Faq() {
  return (
    <div className='flex flex-col mt-14 md:w-60screen self-center'>
      <h2 className='text-center text-black text-[30px] lg:text-3xl font-bold font-josefin uppercase leading-10'>
        PERGUNTAS FREQUENTES
      </h2>
      <div className='flex flex-col p-5 md:min-w-60screen gap-8'>
        {Content.map((item, index) => (
          <FaqItem
            key={index}
            pergunta={item.pergunta}
            resposta={item.resposta}
          />
        ))}
      </div>
    </div>
  );
}
