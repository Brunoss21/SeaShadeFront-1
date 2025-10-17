import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contato = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center m-3">
        <div className="flex flex-col items-center w-full max-w-2xl px-6 sm:px-8 md:px-10 py-10 md:py-12">
          
          <h1 className="flex items-center justify-center text-4xl md:text-5xl font-medium text-blue-950 mb-3">
            Entre em Contato
          </h1>
          <h2 className="text-blue-800 text-center text-lg md:text-xl mb-10 leading-relaxed">
            Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
          </h2>

          <form className="w-full flex flex-col gap-5">
            
            {/* Campo Nome */}
            <label className="text-lg flex flex-col gap-2">
              Nome:
              <div className="relative">
                <User className="absolute left-3 top-5 text-gray-400" size={20} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="ex: João Silva"
                  className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 px-10 rounded border border-slate-300 text-slate-900 w-full"
                />
              </div>
            </label>

            {/* Campo Email */}
            <label className="text-lg flex flex-col gap-2">
              E-mail:
              <div className="relative">
                <Mail className="absolute left-3 top-5 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ex: voce@email.com"
                  className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 px-10 rounded border border-slate-300 text-slate-900 w-full"
                />
              </div>
            </label>

            {/* Campo Mensagem */}
            <label className="text-lg flex flex-col gap-2">
              Mensagem:
              <div className="relative">
                <MessageSquare className="absolute left-3 top-5 text-gray-400" size={20} />
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Escreva sua mensagem aqui..."
                  className="inset-shadow-xs focus:ring focus:outline-none focus:border-blue-600 bg-white py-4 px-10 rounded border border-slate-300 text-slate-900 w-full"
                ></textarea>
              </div>
            </label>

            {/* Botão Enviar */}
            <div className="text-lg flex flex-col gap-1">
              <button
                type="submit"
                className="flex items-center justify-center bg-orange-500 text-white py-4 font-medium transition-colors duration-300 hover:bg-orange-400 cursor-pointer w-full rounded disabled:bg-orange-300"
              >
                Enviar Mensagem
              </button>
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
