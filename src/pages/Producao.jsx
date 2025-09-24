import Sidebar from "../components/Sidebar";
import { Check } from "lucide-react";

const Producao = () => {
  const pedidos = [
    {
      comandaId: 101,
      cliente: "João Silva",
      guardaSol: 1,
      atendente: "Bruno",
      itens: [
        { nome: "Caipirinha de Uva", qtd: 1, valor: "R$ 22,00" },
        { nome: "Porção de Camarão", qtd: 1, valor: "R$ 48,00" }
      ]
    },
    {
      comandaId: 102,
      cliente: "Maria Souza",
      guardaSol: 3,
      atendente: "Ana",
      itens: [{ nome: "Água de Coco", qtd: 2, valor: "R$ 12,00" }]
    },
    {
      comandaId: 103,
      cliente: "Carlos Lima",
      guardaSol: 5,
      atendente: "Pedro",
      itens: [{ nome: "Batata Frita", qtd: 1, valor: "R$ 18,00" }]
    }
  ];

  return (
    <div className="flex h-screen w-full bg-gray-900">
      {/* Sidebar fixo */}
      <Sidebar noturno />

      {/* Conteúdo rolável */}
      <div className="flex-1 flex flex-col overflow-y-auto p-4 md:p-6">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
          {pedidos.map((pedido, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col"
            >
              {/* Cabeçalho do pedido */}
              <h2 className="font-bold text-xl mb-3 text-gray-100">
                Pedido da Comanda #{pedido.comandaId}
              </h2>

              {/* Dados do pedido */}
              <p className="text-sm text-gray-300">
                Cliente: <span className="font-semibold">{pedido.cliente}</span>
              </p>
              <p className="text-sm text-gray-300">
                Guarda-sol: <span className="font-semibold">{pedido.guardaSol}</span>
              </p>
              <p className="text-sm text-gray-300 mb-3">
                Atendido por: <span className="font-semibold">{pedido.atendente}</span>
              </p>

              {/* Itens */}
              <div className="flex flex-col gap-2 border-t border-gray-700 pt-3 flex-1">
                {pedido.itens.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-gray-200 font-medium"
                  >
                    <span className="flex-1">{item.qtd}x</span>
                    <span className="flex-3 text-center">{item.nome}</span>
                    <span className="flex-1 text-right">{item.valor}</span>
                  </div>
                ))}
              </div>

              {/* Ações */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-blue-700 rounded text-gray-100 text-sm font-medium py-2 flex gap-2 justify-center items-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
                  <Check size={17} strokeWidth={3} /> Pronto
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Producao;
