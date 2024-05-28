import Image from 'next/image';

export const DepoimentoItem = ({
  nome,
  foto,
  depoimento,
}: {
  nome: string;
  foto: string;
  depoimento: string;
}) => {
  return (
    <div
      className='flex flex-col gap-6 items-center border p-4 bg-white rounded-2xl shadow-xl'
      style={{
        minWidth: '300px',
        maxWidth: '300px',
        height: '400px',
      }}
    >
      <Image
        className='rounded-full'
        src={foto}
        alt={nome}
        width={100}
        height={100}
      />
      <span className='text-xl font-bold'>{nome}</span>
      <span className='text-lg overflow-auto'>&quot;{depoimento}&quot;</span>
    </div>
  );
};
