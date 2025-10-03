import Header from '../components/Header';
import { Mail, User, MessageSquare } from 'lucide-react'; // Ícones para os campos

const Contato = () => {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 bg-white rounded-xl shadow-md">
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 text-center mb-4">
            Entre em Contato
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
          </p>

          <form className="space-y-6">
            {/* Campo Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu Nome
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Seu Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="voce@exemplo.com"
                />
              </div>
            </div>

            {/* Campo Mensagem */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensagem
              </label>
              <div className="relative">
                 <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="block w-full rounded-md border-gray-300 pl-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>
            </div>

            {/* Botão de Envio */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
};

export default Contato;