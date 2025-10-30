import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Comanda from "../components/Comanda";
import Finalizados from "../components/ListaFinalizados";
import { ChevronsRight, Funnel } from 'lucide-react';
import apiClient from '../services/apiClient';
import { useAuth } from '../context/AuthContext';
import Modal from '../components/Modal';

const Pedidos = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    // --- ESTADOS ---
    const [comandasAbertas, setComandasAbertas] = useState([]);
    const [comandasFechadas, setComandasFechadas] = useState([]);
    const [cardapio, setCardapio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Estados do Modal
    const [showProdutoModal, setShowProdutoModal] = useState(false);
    const [comandaSelecionadaId, setComandaSelecionadaId] = useState(null);
    const [loadingCardapio, setLoadingCardapio] = useState(false);
    const [quantidadeItem, setQuantidadeItem] = useState(1);
    const [searchTermModal, setSearchTermModal] = useState('');
    const [isSubmittingItem, setIsSubmittingItem] = useState(false);

    const quiosqueId = useMemo(() => user?.quiosque?.quiosqueId || user?.quiosqueId, [user]);

    // --- FUNÇÃO PARA BUSCAR DADOS (useCallback) ---
    const fetchData = useCallback(async () => {
        if (!quiosqueId) {
            setError("Quiosque não identificado."); setLoading(false); return;
        }
        setLoading(true);
        setError('');
        try {
            let cardapioData = cardapio.length > 0 ? cardapio : null;
            if (!cardapioData) {
                const cardapioResponse = await apiClient.get(`/api/quiosques/${quiosqueId}/produtos`);
                cardapioData = cardapioResponse.data;
                setCardapio(cardapioData);
            }

            const [abertasResponse, fechadasResponse] = await Promise.all([
                apiClient.get(`/api/comandas`, { params: { quiosqueId: quiosqueId, status: 'ABERTA' } }),
                apiClient.get(`/api/comandas`, { params: { quiosqueId: quiosqueId, status: 'FECHADA' } })
            ]);

            setComandasAbertas(abertasResponse.data);
            setComandasFechadas(fechadasResponse.data);
        } catch (err) {
            console.error("Erro ao buscar dados dos pedidos:", err);
            setError("Não foi possível carregar as comandas.");
        } finally {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quiosqueId]); 

    // --- useEffect ---
    useEffect(() => {
        if (quiosqueId) {
            fetchData();
        } else if (user) {
            setError("Quiosque não identificado. Faça login novamente.");
            setLoading(false);
        } else {
            setLoading(false); 
        }
    }, [quiosqueId, fetchData]); 

    // --- FUNÇÕES DO MODAL ---
    const handleOpenProdutoModal = (comandaId) => { /* ... função ... */ };
    const fetchCardapio = async () => { /* ... função ... */ };
    const handleSelecionarProduto = async (produtoId) => { /* ... função ... */ };
    const filteredCardapioModal = cardapio.filter(p => p.nome.toLowerCase().includes(searchTermModal.toLowerCase()));

    // --- RENDERIZAÇÃO ---
    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p>Carregando comandas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="text-slate-600 flex min-h-screen">
            <Sidebar />
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                <HeaderLogged />
                
                <main className="flex flex-col gap-10 pb-10">
                    
                    {/* --- SEÇÃO EM ANDAMENTO --- */}
                    <section className="flex flex-col gap-5">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-600">Comandas em Andamento</h1>
                        </div>
                        <div className="w-full flex gap-5 overflow-x-auto scrollbar-hide">
                            {comandasAbertas.length > 0 ? (
                                comandasAbertas.map(comanda => (
                                    <div key={comanda.id} className="min-w-[280px] flex-shrink-0 cursor-pointer" onClick={() => navigate(`/comandas/${comanda.id}`)}>
                                        <Comanda
                                            comanda={comanda}
                                            onAddItemClick={(e) => { e.stopPropagation(); handleOpenProdutoModal(comanda.id); }}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className='text-slate-400 pl-2'>Nenhuma comanda em andamento.</p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <Link to="/comandas/more" className="flex items-center text-blue-700 font-medium">
                                Ver tudo <ChevronsRight size="17" />
                            </Link>
                        </div>
                    </section>

                    {/* --- SEÇÃO FINALIZADAS --- */}
                    <section className="flex flex-col gap-4 pt-5">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Finalizadas</h2>
                            {/* Bloco de Filtros  */}
                            <div className="flex flex-wrap gap-2 text-blue-700 items-center bg-blue-100 p-2 rounded-lg justify-end md:justify-start">
                                <p className="flex items-center gap-2 font-medium"><Funnel size="15" />Filtros</p>
                                {/* inputs de filtro  */}
                                <input type="text" className="rounded-full px-3 py-1 bg-slate-50 w-full sm:w-auto max-w-[100px]" placeholder="ID" />
                                <input type="text" className="rounded-full px-3 py-1 bg-slate-50 w-full sm:w-auto max-w-[120px]" placeholder="Status" />
                                <input type="date" className="rounded-full px-3 py-1 bg-slate-50 w-full sm:w-auto max-w-[140px]" placeholder="dd/mm/aaaa" />
                                <button className="bg-blue-700 text-slate-50 rounded-full py-1 px-4 w-full sm:w-auto font-medium">Aplicar</button>
                            </div>
                        </div>

                        {/* Lista de Finalizados  */}
                        <div className="w-full">
                            <Finalizados comandas={comandasFechadas} />
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
export default Pedidos;