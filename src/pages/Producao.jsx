import Sidebar from "../components/Sidebar";
import { Check, ChefHat } from "lucide-react"; 
import { useState, useEffect } from 'react';
import apiClient from '../services/apiClient'; // Seu cliente API
import { useAuth } from '../context/AuthContext'; // Para o quiosqueId

const Producao = () => {
  const { user } = useAuth();
    const [pedidos, setPedidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const quiosqueId = user?.quiosque?.quiosqueId || user?.quiosqueId;

    // FUNÇÃO DE BUSCA
    const fetchPedidosCozinha = async () => {
        if (!quiosqueId) {
            setError("ID do quiosque não encontrado.");
            setLoading(false);
            return;
        }
        
        try {
            const response = await apiClient.get(`/api/comandas`, {
                params: { 
                    quiosqueId,
                    status: ['NA_COZINHA', 'EM_PREPARO'] 
                }
            });
            // Ordena: NA_COZINHA (novos) vêm primeiro
            const pedidosOrdenados = (response.data || []).sort((a, b) => 
                a.status === 'NA_COZINHA' ? -1 : 1
            );
            setPedidos(pedidosOrdenados);
            setError('');
        } catch (err) {
            console.error("Erro ao buscar pedidos da cozinha:", err);
            setError("Falha ao carregar pedidos.");
        } finally {
            if (loading) setLoading(false);
        }
    };

    useEffect(() => {
        fetchPedidosCozinha();
    }, [quiosqueId]);
    useEffect(() => {
        // Atualiza a lista a cada 15 segundos
        const intervalId = setInterval(() => {
            console.log("Atualizando pedidos da cozinha...");
            fetchPedidosCozinha();
        }, 15000); 
        return () => clearInterval(intervalId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quiosqueId]); 

    const handleMarcarEmPreparo = async (comandaId) => {
        try {
            await apiClient.patch(`/api/comandas/${comandaId}/marcar-em-preparo`);
            fetchPedidosCozinha(); 
        } catch (err) {
            console.error("Erro ao marcar em preparo:", err);
            alert("Falha ao marcar em preparo. Tente novamente."); // TODO: usar toast
        }
    };

    // FUNÇÃO MARCAR "PRONTO"
    const handleMarcarPronto = async (comandaId) => {
         try {
            await apiClient.patch(`/api/comandas/${comandaId}/marcar-pronta`);
            // Atualiza a lista imediatamente (o pedido sumirá da tela)
            fetchPedidosCozinha();
        } catch (err) {
            console.error("Erro ao marcar como pronto:", err);
            alert("Falha ao marcar como pronto. Tente novamente."); // TODO: usar toast
        }
    };
    
    // FUNÇÃO FORMATA MOEDA
    const formatCurrency = (value) => {
      if (typeof value !== 'number') value = 0;
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    };

  return (
    <div className="flex h-screen w-full bg-gray-900">
      {/* Sidebar fixo */}
      <Sidebar noturno />
      
      {/* Conteúdo rolável */}
      <div className="flex-1 flex flex-col overflow-y-auto p-4 md:p-6">
        {loading && (
            <div className="flex h-full items-center justify-center pl-16">
                <p className="text-xl text-gray-300">Carregando pedidos...</p>
            </div>
        )}
        {error && (
            <div className="flex h-full items-center justify-center pl-16">
                <p className="p-10 text-red-500 text-xl">{error}</p>
            </div>
        )}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-16">
          {!loading && !error && pedidos.map((pedido) => ( 
            <div
              key={pedido.id} 
              className="bg-gray-800 rounded-lg shadow-md p-6 flex flex-col"
            >
              {/* Cabeçalho do pedido */}
              <h2 className="font-bold text-xl mb-3 text-gray-100">
                {/* MUDE para pedido.numeroComanda ou pedido.id */}
                Pedido da Comanda #{pedido.numeroComanda || pedido.id}
              </h2>

              {/* Dados do pedido - AJUSTE OS CAMPOS */}
              <p className="text-sm text-gray-300">
                Cliente: <span className="font-semibold">?</span>
              </p>
              <p className="text-sm text-gray-300">
                {/* MUDE para os dados do DTO */}
                Guarda-sol: <span className="font-semibold">{pedido.guardaSol?.identificacao || '?'}</span>
              </p>
              <p className="text-sm text-gray-300 mb-3">
                Atendido por: <span className="font-semibold">{pedido.atendente?.nome || user?.name || '?'}</span>
              </p>

              {/* Itens - AJUSTE OS CAMPOS */}
              <div className="flex flex-col gap-2 border-t border-gray-700 pt-3 flex-1">
                {pedido.itens.map((item) => (
                  <div
                    key={item.id} // MUDE para item.id
                    className="flex justify-between text-gray-200 font-medium"
                  >
          _         <span className="flex-1">{item.quantidade}x</span>
                    <span className="flex-3 text-center">{item.produtoNome}</span>
                    <span className="flex-1 text-right">{formatCurrency(item.precoUnitario)}</span>
                  </div>
                ))}
              </div>

              {/* Ações - ADICIONE LÓGICA CONDICIONAL */}
              <div className="flex gap-2 mt-4">
                
                {/* Se o status for NA_COZINHA, mostra o botão "Iniciar Preparo" */}
                {pedido.status === 'NA_COZINHA' && (
                    <button 
                        className="flex-1 bg-amber-500 rounded text-gray-900 text-sm font-medium py-2 flex gap-2 justify-center items-center cursor-pointer hover:bg-amber-400 transition-all duration-300"
                        onClick={() => handleMarcarEmPreparo(pedido.id)}
                    >
                        <ChefHat size={17} strokeWidth={3} /> Iniciar Preparo
                    </button>
                )}
                
                {/* Ações */}
                {/* Se o status for EM_PREPARO, mostra o botão "Pronto" */}
                {pedido.status === 'EM_PREPARO' && (
                    <button 
                        className="flex-1 bg-blue-700 rounded text-gray-100 text-sm font-medium py-2 flex gap-2 justify-center items-center cursor-pointer hover:bg-blue-600 transition-all duration-300"
                        onClick={() => handleMarcarPronto(pedido.id)}
                    >
                        <Check size={17} strokeWidth={3} /> Pronto
                    </button>
                )}
              </div>
            </div>
          ))}
          {!loading && !error && pedidos.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 h-full items-center justify-center pl-16">
                <p className="text-xl text-gray-400">Nenhum pedido na cozinha.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Producao;

