'use client';

import { useState } from 'react';

export interface FaqItemProps {
  pergunta: string;
  resposta: string;
}

export function FaqItem({ pergunta, resposta }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white p-2 flex flex-col text-xl'>
      <div className='flex md:max-w-60screen min-w-60screen flex-col'>
        <div className='flex w-full rounded-[20px] shadow-[10px_10px_20px_4px_#00000040]'>
          <div className='flex gap-6 p-10 cursor-pointer' onClick={handleClick}>
            <div className={isOpen ? '' : 'self-center'}>
              <svg
                style={{
                  transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                  transition: 'transform 0.3s',
                }}
                width='15'
                height='9'
                viewBox='0 0 15 9'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.425 8.5C7.24742 8.5 7.07561 8.46756 6.90958 8.40267C6.74265 8.33779 6.6037 8.25127 6.49271 8.14313L0.366255 2.17366C0.122085 1.93575 0 1.63295 0 1.26527C0 0.897582 0.122085 0.594783 0.366255 0.35687C0.610425 0.118956 0.921188 0 1.29854 0C1.6759 0 1.98666 0.118956 2.23083 0.35687L7.425 5.41794L12.6192 0.35687C12.8633 0.118956 13.1741 0 13.5515 0C13.9288 0 14.2396 0.118956 14.4837 0.35687C14.7279 0.594783 14.85 0.897582 14.85 1.26527C14.85 1.63295 14.7279 1.93575 14.4837 2.17366L8.35729 8.14313C8.2241 8.2729 8.07982 8.36461 7.92444 8.41824C7.76906 8.47275 7.60258 8.5 7.425 8.5Z'
                  fill={isOpen ? '#FFB600' : '#000000'}
                ></path>
              </svg>
            </div>
            <div>
              <p className='font-bold text-black font-poppins text-xl font-josefin leading-5'>
                {pergunta}
              </p>
              {isOpen && (
                <div className='font-normal text-black font-poppins mt-8'>
                    {resposta.split('\n').map((line, index) => (
                      <>
                        <span className='text-base' key={index}>
                          {line}
                        </span>
                        <br />
                      </>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
