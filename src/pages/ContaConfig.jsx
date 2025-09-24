import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Config = () => {
  const conta = {
    nome: "Usuário Exemplo",
    email: "usuario@email.com",
    telefone: "(xx) xxxx-xxxx",
    tipoConta: "Administrador",
    ultimaAtividade: "24/09/2025 14:32",
    criadoEm: "01/01/2024",
    quiosquesAssociados: ["Quiosque Praia do Sol"],
    permissoes: ["Gerenciar Pedidos", "Gerenciar Estoque", "Configurações"],
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10 bg-slate-50 ml-15">
        <h1 className="text-3xl font-bold mb-8 text-blue-600 mt-8">Configurações da Conta</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informações básicas */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2">
            <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
            <p>
              <span className="font-medium text-slate-600">Nome:</span> {conta.nome}
            </p>
            <p>
              <span className="font-medium text-slate-600">E-mail:</span> {conta.email}
              
            </p>
             
              <p>
                <Link to="/conta/mudar-senha" className="text-slate-50 bg-blue-500 py-1 rounded justify-start px-2 shadow-sm cursor-pointer text-sm">Mudar Senha</Link>
              </p>
            
            <p>
              <span className="font-medium text-slate-600">Telefone:</span> {conta.telefone}
              <Link to="/conta/editar-telefone" className="text-blue-600 underline mx-2">Editar</Link>
            </p>
           
            <p>
              <span className="font-medium text-slate-600">Tipo de Conta:</span> {conta.tipoConta}
            </p>
            <p>
              <span className="font-medium text-slate-600">Criado em:</span> {conta.criadoEm}
            </p>
            <p>
              <span className="font-medium text-slate-600">Última Atividade:</span> {conta.ultimaAtividade}
            </p>
          </div>

          {/* Quiosques e permissões */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Estabelecimento & Permissões</h2>
            <div className="mb-4">
              <p className="font-medium text-slate-600 mb-2">Estabelecimento Associado</p>
              <ul className="list-disc list-inside text-slate-800">
                {conta.quiosquesAssociados.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium text-slate-600 mb-2">Permissões:</p>
              <ul className="list-disc list-inside text-slate-800">
                {conta.permissoes.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
