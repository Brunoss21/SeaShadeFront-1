// src/pages/Config.jsx
import Sidebar from '../components/Sidebar';
import HeaderLogged from '../components/HeaderLogged';
import { useState } from 'react';

const Config = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [nomeFuncionario, setNomeFuncionario] = useState('');
  const [emailFuncionario, setEmailFuncionario] = useState('');
  const [notificacoes, setNotificacoes] = useState(true);

  // Adicionar funcionário
  const adicionarFuncionario = () => {
    if (!nomeFuncionario || !emailFuncionario) return;
    setFuncionarios([...funcionarios, { nome: nomeFuncionario, email: emailFuncionario }]);
    setNomeFuncionario('');
    setEmailFuncionario('');
  };

  // Remover funcionário
  const removerFuncionario = (email) => {
    setFuncionarios(funcionarios.filter(f => f.email !== email));
  };

  return (
    <div className="text-slate-600 h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
        <h1 className="text-3xl font-bold mb-5 text-blue-600 mt-15">Configurações - SeaShade</h1>

        {/* Configurações gerais */}
        {/* <div className="bg-white shadow rounded p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Configurações Gerais</h2>
          
        </div> */}

        {/* Cadastro de funcionários */}
        <div className="bg-white shadow rounded p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cadastro de Funcionários</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Nome do funcionário"
              value={nomeFuncionario}
              onChange={(e) => setNomeFuncionario(e.target.value)}
              className="border rounded px-3 py-2 w-full md:w-1/3"
            />
            <input
              type="email"
              placeholder="E-mail do funcionário"
              value={emailFuncionario}
              onChange={(e) => setEmailFuncionario(e.target.value)}
              className="border rounded px-3 py-2 w-full md:w-1/3"
            />
            <button
              onClick={adicionarFuncionario}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Adicionar
            </button>
          </div>

          {/* Lista de funcionários */}
          {funcionarios.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border px-4 py-2 text-left">Nome</th>
                    <th className="border px-4 py-2 text-left">E-mail</th>
                    <th className="border px-4 py-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {funcionarios.map((f, idx) => (
                    <tr key={idx}>
                      <td className="border px-4 py-2">{f.nome}</td>
                      <td className="border px-4 py-2">{f.email}</td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          onClick={() => removerFuncionario(f.email)}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <p className="text-slate-500 text-sm">Todas as alterações são salvas automaticamente.</p>
      </div>
    </div>
  );
};

export default Config;
