import { DepoimentoItem } from './depoimentoItem';
import { Title } from '../Title';

const depoimentos = [
  {
    nome: 'Douglas Zechin',
    foto: '/depoimentos/Douglas Zechin.png',
    depoimento:
      'Ótimos profissionais, ambiente completo e muito bem preparado. Procurei para tratamento de síndrome da banda iliotibial e, com o tratamento adequado, fui capaz de concluir uma prova de ciclismo de 200km sem dores. Recomendo muito!',
  },
  {
    nome: 'Thiago Braga',
    foto: '/depoimentos/Thiago Braga.png',
    depoimento:
      'Excelente atendimento, ambiente ótimo. Melhorei e muito meu joelho que após romper o lca consegui fazer movimentos que achava que não conseguiria mais, me auxiliaram bastante a retomar a confiança nos movimentos. Só tenho a agradecer a esta equipe maravilhosa.',
  },
  {
    nome: 'Juan César',
    foto: '/depoimentos/Juan César.png',
    depoimento:
      'O Rafa e a Débora são sensacionais. Além da cordialidade, profissionalismo, são capazes de dar confiança ao paciente desde o início. Ao longo do tratamento, fui me sentindo cada vez mais firme! Recomendo muito o trabalho da Forward!',
  },
  {
    nome: 'Derick Pradie Garcez',
    foto: '/depoimentos/Derick Pradie Garcez.png',
    depoimento:
      'Profissionais extremamente preparados explicando cada detalhe, cada situação e sempre visando o melhor para as pretensões do paciente. Fora o local, com equipamento de ponta o tratamento, climatizado e claro com um belo café antes, durante e depois das consultas. Melhor escolha possível para o tratamento de uma dor que durou mais de 1 ano.',
  },
  {
    nome: 'Fernanda Gomes',
    foto: '/depoimentos/Fernanda Gomes.png',
    depoimento:
      'Fui atendida de maneira excelente antes mesmo de ir presencialmente na primeira consulta. Estou sendo acompanhada pela Deb, que se faz presente o tempo todo na minha preparação para o TAF da Susepe. Super recomendo',
  },
];

export default function Depoimentos() {
  return (
    <div
      className='flex flex-col justify-center items-center mt-5 w-3/4 md:max-w-60screen self-center min-h-50screen'
      id='depoimentos'
    >
      <Title>Depoimentos</Title>
      <div className='flex overflow-auto items-center p-5 gap-12 w-full'>
        {depoimentos.map((depoimento, index) => (
          <DepoimentoItem
            key={index}
            nome={depoimento.nome}
            foto={depoimento.foto}
            depoimento={depoimento.depoimento}
          />
        ))}
      </div>
    </div>
  );
}
