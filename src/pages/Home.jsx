import Header from '../components/Header'
import decoracaolg from "../assets/decoracaolg2.webp";
import decoracaosm from "../assets/decoracaosm2.webp";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
import { NotebookPen, Boxes, Users, Cloud, Sparkles } from 'lucide-react';

const Home = () => {

  return (
    <div className="bg-sky-600 ">
    <div className='flex flex-col relative min-h-[90vh]'>
      {/* min-h-[90vh] */}
      <Header />
      <div className="relative z-10 w-full mx-auto flex-1 flex flex-col justify-center px-4">
        <main className="flex flex-col md:flex-row flex-1 md:mt-40 md:text-left justify-center">
          <div className="flex flex-col max-w-screen-2xl w-full">
            <div className="flex flex-col gap-7">
          <h1 className="text-xl md:text-3xl lg:text-3xl font-bold sm:text-4xl">
            <span className="text-slate-50 font-light">
              Seu negócio
            </span><br />
            <strong className="lg:text-8xl md:text-7xl sm:text-[80px] text-[44px] break-words text-slate-50">
              Seguro &<br />
              <span className="break-words">Organizado.</span>
            </strong><br />
          </h1>

          <p className="text-2xl lg:text-3xl font-light text-slate-50">
            Gerencie <span className="text-yellow-300 font-medium">pedidos</span>, <span className="text-yellow-300 font-medium">estoque</span> e <span className="text-yellow-300 font-medium">mesas</span> com praticidade.
          </p>
          </div>
          <div className="flex flex-col md:flex-row mt-8">
            <Link
            to="/cadastro" className="bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-50 font-semibold border-slate-900 rounded lg:px-24 md:px-25 cursor-pointer md:text-2xl text-2xl py-4 text-center shadow-sm">Comece já</Link>
            <div className="text-slate-50 lg:px-24 md:px-25 md:text-2xl text-2xl py-4 text-center"><a href="#sobre" className="flex items-center">Saiba mais</a></div>
          </div>
          </div>
          <img
        className="hidden lg:flex absolute bottom-0 right-0 object-cover z-0"
        src={decoracaolg}
        alt="Imagem de fundo"
      />
      
        </main>
        
      </div>
      <img
        className="lg:hidden bottom-0 right-0 object-cover z-0 "
        src={decoracaosm}
        alt="Imagem de fundo"
      />
    </div>

   <section className="py-16 px-6 bg-slate-50 text-slate-700">
  <div className="max-w-screen-xl mx-auto w-full text-center">
    
    {/* Título e Subtítulo da Seção */}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
      Chegamos para facilitar a vida de quem trabalha na praia
    </h2>
    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
      Deixe a complexidade de lado. Nosso sistema oferece as ferramentas certas para você.
    </p>

    {/* Grade de Funcionalidades */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Funcionalidade 1: Anotar Pedidos */}
      <div className="flex flex-col items-center p-4">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <NotebookPen className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Anote Pedidos</h3>
        <p className="text-slate-600 leading-relaxed">
          Registre pedidos de forma rápida e digital, eliminando o papel e a caneta.
        </p>
      </div>

      {/* Funcionalidade 2: Controle de Estoque */}
      <div className="flex flex-col items-center p-4">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <Boxes className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Controle seu Estoque</h3>
        <p className="text-slate-600 leading-relaxed">
          Saiba em tempo real quais produtos estão acabando e evite perdas de vendas.
        </p>
      </div>

      {/* Funcionalidade 3: Conectar Equipe */}
      <div className="flex flex-col items-center p-4">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <Users className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Conecte sua Equipe</h3>
        <p className="text-slate-600 leading-relaxed">
          Sua equipe trabalha em sintonia, da cozinha ao atendimento na areia.
        </p>
      </div>

      {/* Funcionalidade 4: Supervisão Remota */}
      <div className="flex flex-col items-center p-4">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
          <Cloud className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Supervisione de Longe</h3>
        <p className="text-slate-600 leading-relaxed">
          Acesse relatórios e monitore seu negócio de qualquer celular ou computador.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-16 px-6  bg-blue-950">
  <div className="max-w-screen-xl mx-auto w-full">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
        Comece a usar em 3 passos simples
      </h2>
    </div>

    {/* --- Passo 1 --- */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-10">
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-bold text-sky-400 tracking-wider mb-2">PASSO 01</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Configure seu Cardápio
        </h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          O primeiro passo é o mais rápido. Cadastre seus produtos, bebidas, porções e o que mais você oferecer. Adicione preços e descrições para que sua equipe tenha tudo na mão na hora de anotar o pedido.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="w-full max-w-md h-64 bg-white rounded-lg shadow-xl flex items-center justify-center">
          {/* Sua imagem aqui */}
        </div>
      </div>
    </div>

    {/* --- Passo 2 --- */}
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16 py-10">
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-bold text-sky-400 tracking-wider mb-2">PASSO 02</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Receba e Gerencie Pedidos
        </h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          Com o cardápio pronto, sua equipe já pode usar o sistema em um celular ou tablet. Os pedidos são enviados em tempo real para a cozinha ou bar, eliminando erros de comunicação e agilizando a entrega.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-start">
        <div className="w-full max-w-md h-64 bg-white rounded-lg shadow-xl flex items-center justify-center">
          {/* Sua imagem aqui */}
        </div>
      </div>
    </div>

    {/* --- Passo 3 --- */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 py-10">
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-bold text-sky-400 tracking-wider mb-2">PASSO 03</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Acompanhe seus Resultados
        </h3>
        <p className="text-slate-300 text-lg leading-relaxed">
          Acesse o painel de controle de qualquer lugar e veja relatórios de vendas, produtos mais vendidos e o desempenho da sua equipe. Use esses dados para tomar decisões e fazer seu negócio crescer.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="w-full max-w-md h-64 bg-white rounded-lg shadow-xl flex items-center justify-center">
          {/* Sua imagem aqui */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-16 px-6 bg-slate-50">
  <div className="max-w-4xl mx-auto">
    <div className =" p-8 md:p-12 text-center relative overflow-hidden">
      
      {/* Ícone de destaque */}
      <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
        <Sparkles className="h-8 w-8 text-orange-400" />
      </div>

      {/* Título e Subtítulo */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
        Dê o próximo passo para um verão mais tranquilo
      </h2>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Deixe a papelada de lado e veja na prática como o SeaShade pode transformar seu negócio.
      </p>

      {/* Botões de Ação */}
      <div className="mt-8 flex justify-center items-center gap-4 flex-col sm:flex-row">
        <a 
          href="#contato" 
          className="w-full sm:w-auto inline-block bg-orange-400 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-500 transition-colors shadow"
        >
          Cadastre-se gratuitamente
        </a>
      </div>

    </div>
  </div>
</section>
    {/* Footer */}
     <div>
      <Footer/>
     </div>
    </div>
  )
}
export default Home;
