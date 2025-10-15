/* import Sidebar from "../components/Sidebar";
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
        <button className="bg-red-600 text-slate-50 rounded px-5 py-1 m-6 font-medium shadow cursor-pointer">Sair da conta</button>
      </div>
    </div>
  );
};

export default Config;
*/

import { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import apiClient from '../services/apiClient'; // <-- 1. IMPORTAR NOSSO API CLIENT
import { useAuth } from '../context/AuthContext'; // <-- 2. IMPORTAR O HOOK DE AUTENTICAÇÃO

const Config = () => {
  // Estados para controlar os dados, carregamento e erros
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { logout } = useAuth(); // <-- 3. PEGAR A FUNÇÃO DE LOGOUT DO CONTEXTO

  // Efeito para buscar os dados da conta quando a página carrega
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await apiClient.get('/api/users/me');
        setUserData(response.data);
      } catch (err) {
        setError('Falha ao carregar os dados da conta.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAccountData();
  }, []); // O array vazio [] faz com que o efeito rode apenas uma vez

  // Função para lidar com o logout
  const handleLogout = () => {
    logout();
    // Opcional: redirecionar para a página de login. O <Navigate> no ProtectedRoute já pode fazer isso.
  };
  
  // Exibe uma mensagem de carregamento enquanto os dados não chegam
  if (loading) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-10">Carregando...</div>
      </div>
    );
  }

  // Exibe uma mensagem de erro se a busca falhar
  if (error) {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-10 text-red-500">{error}</div>
      </div>
    );
  }

  // Renderiza a página com os dados reais se a busca for bem-sucedida
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10 bg-slate-50 ml-15">
        <h1 className="text-3xl font-bold mb-8 text-blue-600 mt-8">Configurações da Conta</h1>

        {userData && ( // Garante que só tenta renderizar se userData não for nulo
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações básicas */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2">
              <h2 className="text-xl font-semibold mb-4">Informações Básicas</h2>
              <p>
                <span className="font-medium text-slate-600">Nome:</span> {userData.name}
              </p>
              <p>
                <span className="font-medium text-slate-600">E-mail:</span> {userData.email}
              </p>
              <p>
                <Link to="/conta/mudar-senha" className="...">Mudar Senha</Link>
              </p>
              <p>
                <span className="font-medium text-slate-600">Telefone:</span> {userData.telefone || "Não informado"}
                <Link to="/conta/editar-telefone" className="text-blue-600 underline mx-2">Editar</Link>
              </p>
              <p>
                <span className="font-medium text-slate-600">Tipo de Conta:</span> 
                {userData.roles.map(role => role.name).join(', ')} {/* Mapeia as roles */}
              </p>
              {/* Campos como 'Criado em' e 'Última Atividade' precisariam ser adicionados ao seu DTO no backend */}
            </div>

            {/* Quiosques e permissões */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Estabelecimento & Permissões</h2>
              <div className="mb-4">
                <p className="font-medium text-slate-600 mb-2">Estabelecimento Associado</p>
                <ul className="list-disc list-inside text-slate-800">
                  {/* Verifica se o quiosque existe antes de tentar renderizar */}
                  {userData.quiosque ? <li>{userData.quiosque.name}</li> : <li>Nenhum quiosque associado.</li>}
                </ul>
              </div>
              <div>
                <p className="font-medium text-slate-600 mb-2">Permissões (Roles):</p>
                <ul className="list-disc list-inside text-slate-800">
                  {userData.roles.map((role, i) => (
                    <li key={i}>{role.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        <button onClick={handleLogout} className="bg-red-600 text-slate-50 rounded px-5 py-1 m-6 font-medium shadow cursor-pointer">
          Sair da conta
        </button>
      </div>
    </div>
  );
};

export default Config;