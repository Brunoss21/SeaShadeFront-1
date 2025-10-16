import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { Search, Plus, Trash } from "lucide-react";
import Modal from "../components/Modal";
import apiClient from '../services/apiClient'; 
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

const Cardapio = () => {
    // ESTADOS PARA DADOS DA API E CONTROLE DE UI
    const [produtos, setProdutos] = useState([]); // Armazena os produtos vindos do backend
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
    const [termoBusca, setTermoBusca] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const [novoProduto, setNovoProduto] = useState({
        nome: '',
        descricao: '',
        preco: '',
        categoria: 'BEBIDA', // Valor inicial default
        estoque: 0
    });

    const { user } = useAuth(); // Pega o usuário logado do contexto

    console.log("Objeto 'user' vindo do AuthContext:", JSON.stringify(user, null, 2));

    useEffect(() => {
        const quiosqueId = user?.quiosque?.quiosqueId; 

        if (!quiosqueId) {
            setError("ID do quiosque não encontrado. Faça o login novamente.");
            setLoading(false);
            return;
        }

        const fetchProdutos = async () => {
            try {
                const response = await apiClient.get(`/api/quiosques/${quiosqueId}/produtos`);
                setProdutos(response.data);
            } catch (err) {
                console.error("Erro ao buscar produtos:", err);
                setError("Não foi possível carregar o cardápio.");
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, [user]); // Roda o efeito novamente se o usuário mudar

    // 3. LÓGICA DE FILTRO 
    const categorias = ['Todos', ...new Set(produtos.map(item => item.categoria))];

    const itensFiltrados = produtos.filter(item => {
        const correspondeCategoria = categoriaSelecionada === 'Todos' || item.categoria === categoriaSelecionada;
        const correspondeBusca = item.nome.toLowerCase().includes(termoBusca.toLowerCase());
        return correspondeCategoria && correspondeBusca;
    });

    const handleCreateProduto = async (e) => {
        e.preventDefault();
        
        const quiosqueId = user?.quiosque?.quiosqueId;
        if (!quiosqueId) {
            setError("ID do quiosque não encontrado para criar o produto.");
            return;
        }

        try {
            const response = await apiClient.post(
                `/api/quiosques/${quiosqueId}/produtos`,
                novoProduto
            );

            // Isso evita ter que recarregar a página
            setProdutos(produtosAtuais => [...produtosAtuais, response.data]);

            // 3. Limpa o formulário e fecha o modal
            setShowModal(false);
            setNovoProduto({ nome: '', descricao: '', preco: '', categoria: 'BEBIDA', estoque: 0 });

        } catch (err) {
            console.error("Erro ao criar produto:", err);
            alert("Falha ao criar o produto. Verifique os dados."); 
        }
    };

    const handleDeletarItem = async (produtoId) => {
        // Aqui virá a lógica para chamar apiClient.delete(...) para remover um produto
        console.log("Deletar item com ID:", produtoId);
        // Após o sucesso, você pode re-buscar a lista ou remover o item do estado 'produtos'
        setShowModal2(false);
    };

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    // Renderiza o estado de carregamento
    if (loading) {
        return (
            <div className="text-slate-700 flex h-screen">
                <Sidebar />
                <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                    <HeaderLogged />
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">Carregando Cardápio...</h1>
                </div>
            </div>
        );
    }
    
    // Renderiza o estado de erro
    if (error) {
        return (
             <div className="text-slate-700 flex h-screen">
                <Sidebar />
                <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                    <HeaderLogged />
                    <h1 className="text-3xl font-bold mb-6 text-red-500">{error}</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="text-slate-700 flex h-screen">
            <Sidebar />
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9 overflow-y-auto">
                <HeaderLogged />
                <h1 className="text-3xl font-bold mb-6 text-blue-600">Cardápio</h1>

                {/* Busca */}
                <div className="mb-6 flex justify-between w-full gap-3">
                    <div className="relative flex-30 r">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="search"
                            placeholder="Buscar item por nome"
                            className="w-full max-w-90 pl-10 pr-4 py-3 rounded border border-slate-300 bg-white focus:outline-none focus:ring focus:border-blue-500"
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                        />
                    </div>
                    <div className="flex-1 flex justify-end items-center gap-2">
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-blue-600 rounded text-white p-1 aspect-square flex items-center justify-center cursor-pointer"
                        >
                            <Plus />
                        </button>
                    </div>
                </div>

                {/* Botões de Filtro */}
                <div className="mb-6 flex flex-wrap gap-3">
                    {categorias.map(categoria => (
                        <button
                            key={categoria}
                            onClick={() => setCategoriaSelecionada(categoria)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                                categoriaSelecionada === categoria
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                            }`}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                {/* Modal */}
                <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                        <div className="p-6">
                        <h3 className="text-2xl font-semibold text-slate-700 mb-7">Adicionar item ao cardápio</h3>
                        
                        <form className="text-lg flex flex-col gap-4" onSubmit={handleCreateProduto}>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="nome">Nome</label>
                                <input type="text" name="nome" id="nome" placeholder="Nome do item" required 
                                      className="bg-white p-2 rounded"
                                      value={novoProduto.nome} 
                                      onChange={handleInputChange} />
                            </div>
                            
                            <div className="flex flex-col gap-1">
                                <label htmlFor="descricao">Descrição</label>
                                <textarea name="descricao" id="descricao" placeholder="Descrição do item" 
                                          className="bg-white p-2 rounded"
                                          value={novoProduto.descricao} 
                                          onChange={handleInputChange} />
                            </div>
                            
                            <div className="flex flex-col gap-1">
                                <label htmlFor="preco">Preço</label>
                                <input type="number" step="0.01" name="preco" id="preco" placeholder="R$ 0,00" required 
                                      className="bg-white p-2 rounded"
                                      value={novoProduto.preco} 
                                      onChange={handleInputChange} />
                            </div>
                            
                            {/* <select> por causa do Enum no backend */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="categoria">Categoria</label>
                                <select name="categoria" id="categoria" required 
                                        className="bg-white p-2 rounded"
                                        value={novoProduto.categoria} 
                                        onChange={handleInputChange}>
                                    <option value="BEBIDA_ALCOOLICA">Bebida Alcoólica</option>
                                    <option value="PORCAO">Porção</option>
                                    <option value="BEBIDA">Bebida</option>
                                </select>
                            </div>
                            
                            <div className="flex flex-col gap-1">
                                <label htmlFor="estoque">Estoque</label>
                                <input type="number" name="estoque" id="estoque" placeholder="0" required 
                                      className="bg-white p-2 rounded"
                                      value={novoProduto.estoque} 
                                      onChange={handleInputChange} />
                            </div>

                            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-teal-600 transition">
                                Adicionar Item
                            </button>
                        </form>
                    </div>
                </Modal>

                {/* Lista de Itens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itensFiltrados.map((item) => (
                        <div key={item.id} className="bg-slate-50 rounded-lg shadow p-5 flex flex-col justify-between">
                            <img src={item.imagemUrl || 'url_da_sua_imagem_padrao.jpg'} alt={item.nome} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h2 className="text-lg font-bold mb-2">{item.nome}</h2>
                            <p className="text-slate-600 mb-4">{item.descricao}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                                <div className="flex gap-3">
                                    <button onClick={() => setShowModal2(true)} className="text-red-600 cursor-pointer"><Trash size="21" /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensagem de filtro sem resultados */}
                {itensFiltrados.length === 0 && (
                    <div className="text-center col-span-full py-10">
                        <p className="text-slate-500">Nenhum item encontrado com os filtros aplicados.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cardapio;