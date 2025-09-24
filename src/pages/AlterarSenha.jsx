import Sidebar from "../components/Sidebar";
import { useState } from "react";

const AlterarSenha = () => {
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    alert("Senha alterada com sucesso!");
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-15 flex justify-center mt-20">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-blue-600 text-center">Alterar Senha</h1>
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Senha Atual</label>
                <input
                  type="password"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  className="bg-white w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nova Senha</label>
                <input
                  type="password"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                  className="bg-white w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Confirmar Nova Senha</label>
                <input
                  type="password"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className="bg-white w-full px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Alterar Senha
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterarSenha;
