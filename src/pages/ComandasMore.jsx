import Sidebar from "../components/Sidebar"
import HeaderLogged from "../components/HeaderLogged"
import Comanda from '../components/Comanda'
import { Clock, ClipboardPenLine } from 'lucide-react'
import { useState, useEffect } from 'react' 
import apiClient from '../services/apiClient' 
import { useAuth } from '../context/AuthContext'

const TodosPedidos = () => {
    // 4. Adicionar estados para dados, loading e erro
    const { user } = useAuth();
    const [comandas, setComandas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const quiosqueId = user?.quiosque?.quiosqueId || user?.quiosqueId;

    // 5. Buscar (fetch) dados da API quando o componente montar
    useEffect(() => {
        if (!quiosqueId) {
            setError("ID do quiosque não encontrado.");
            setLoading(false);
            return;
        }

        const fetchComandas = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await apiClient.get(`/api/comandas`, {
                    params: { quiosqueId }
                });
                setComandas(response.data || []);
            } catch (err) {
                console.error("Erro ao buscar comandas:", err);
                setError("Não foi possível carregar as comandas.");
            } finally {
                setLoading(false);
            }
        };

        fetchComandas();
    }, [quiosqueId]); // Executa quando quiosqueId mudar

    // 6. Filtrar as comandas em listas separadas (antes do return)
    const comandasAguardando = comandas.filter(
        c => c.status === 'ABERTA'
    );

    const comandasEmAtendimento = comandas.filter(
        c => c.status === 'NA_COZINHA' || c.status === 'EM_PREPARO' || c.status === 'PRONTA'
    );


    // 7. Adicionar telas de Loading e Erro (sem alterar layout principal)
    if (loading) {
        return (
            <div className="text-slate-600 flex h-screen">
                <Sidebar />
                <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                    <HeaderLogged hasUndo link={'/comandas'}/>
                    <main className="flex h-full items-center justify-center">
                        <p className="text-xl">Carregando comandas...</p>
                    </main>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="text-slate-600 flex h-screen">
                <Sidebar />
                <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                    <HeaderLogged hasUndo link={'/comandas'}/>
                    <main className="flex h-full items-center justify-center">
                        <p className="p-10 text-red-500 text-xl">{error}</p>
                    </main>
                </div>
            </div>
        );
    }

    // 8. Renderizar o componente com os dados mapeados
    return (
        <div className="text-slate-600 flex h-screen">
            <div>
                <Sidebar />
            </div>
            {/* Adicionado overflow-y-auto para permitir rolagem se muitas comandas */}
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9 overflow-y-auto">
                <HeaderLogged hasUndo link={'/comandas'}/>
            
                <main className="flex h-full flex-col gap-5">

                    {/* fazer conteudo pós h2 retratil*/}
                    <h2 className="text-xl md:text-2xl font-bold flex gap-2 text-orange-600 items-center"><Clock size="20" strokeWidth={3}/> Aguardando pedido</h2>
                    
                    {/* --- CONTEÚDO DINÂMICO AQUI --- */}
                    <div className="w-full flex gap-8 flex-wrap">
                        {comandasAguardando.length > 0 ? (
                            comandasAguardando.map(comanda => (
                                // Passa a comanda inteira como prop
                                <Comanda key={comanda.id} comanda={comanda} />
                            ))
                        ) : (
                            <p className="text-slate-500 px-2">Nenhuma comanda aguardando pedido.</p>
                        )}
                    </div>
                    
                    {/* fazer conteudo pós h2 retratil*/}
                    <h2 className="text-xl md:text-2xl font-bold flex gap-2 text-blue-600 items-center mt-10">< ClipboardPenLine size="20" strokeWidth={3}/>Atendimento em aberto</h2>
                    
                    {/* --- CONTEÚDO DINÂMICO AQUI --- */}
                    <div className="w-full flex gap-8 flex-wrap">
                        {comandasEmAtendimento.length > 0 ? (
                            comandasEmAtendimento.map(comanda => (
                                // Passa a comanda inteira como prop
                                <Comanda key={comanda.id} comanda={comanda} />
                            ))
                        ) : (
                            <p className="text-slate-500 px-2">Nenhuma comanda em atendimento.</p>
                        )}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default TodosPedidos;