import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { Search, Plus, Trash } from "lucide-react";
import caipirinhaImg from "../assets/caipirinha-uva.jpg";
import camaraoImg from "../assets/camarao-frito.jpg";
import aguaImg from "../assets/agua-coco.jpg";
import batataImg from "../assets/batata-frita.jpg";
import peixeImg from "../assets/iscas-de-peixe.jpg";
import longneck from "../assets/longneck.webp";
import Modal from "../components/Modal";
import { useState } from "react";

const Cardapio = () => {
  const cardapioItens = [
    { nome: "Caipirinha de Uva", preco: "R$ 20,00", descricao: "Bebida alcoólica refrescante", imagem: caipirinhaImg, categoria: "Bebidas alcoólicas" },
    { nome: "Porção de Camarão", preco: "R$ 95,00", descricao: "Camarão frito com temperos especiais", imagem: camaraoImg, categoria: "Porções" },
    { nome: "Água de Coco", preco: "R$ 9,00", descricao: "Coco natural gelado", imagem: aguaImg, categoria: "Bebidas" },
    { nome: "Batata Frita", preco: "R$ 40,00", descricao: "Porção de batatas fritas crocantes", imagem: batataImg, categoria: "Porções" },
    { nome: "Isca de Peixe", preco: "R$ 75,00", descricao: "Tiras de peixe empanadas e fritas", imagem: peixeImg, categoria: "Porções" },
    { nome: "Cerveja Long Neck", preco: "R$ 10,00", descricao: "Budweiser", imagem: longneck, categoria: "Bebidas alcoólicas" },
  ];

  // 2. NOVOS ESTADOS PARA GERENCIAR FILTRO E BUSCA
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [termoBusca, setTermoBusca] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [itemInput, setItemInput] = useState("");
  const [itensEstoque, setItensEstoque] = useState([]);

  // 3. LÓGICA PARA EXTRAIR CATEGORIAS E FILTRAR OS ITENS
  // Pega todas as categorias únicas do cardápio e adiciona "Todos" no início
  const categorias = ['Todos', ...new Set(cardapioItens.map(item => item.categoria))];

  // Filtra os itens com base na categoria selecionada e no termo de busca
  const itensFiltrados = cardapioItens.filter(item => {
    const correspondeCategoria = categoriaSelecionada === 'Todos' || item.categoria === categoriaSelecionada;
    const correspondeBusca = item.nome.toLowerCase().includes(termoBusca.toLowerCase());
    return correspondeCategoria && correspondeBusca;
  });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemInput.trim() === "") return;
    setItensEstoque([...itensEstoque, { nome: itemInput, quantidade: "" }]);
    setItemInput("");
  };

  const handleQuantidadeChange = (index, value) => {
    const novosItens = [...itensEstoque];
    novosItens[index].quantidade = value;
    setItensEstoque(novosItens);
  };

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
              // Conectando o input ao estado de busca
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

        {/* 4. BOTÕES DE FILTRO POR CATEGORIA */}
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

        {/* Modal (com campo de categoria adicionado) */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-700 mb-7">Adicionar item ao cardápio</h3>
                <form className="text-lg flex flex-col gap-4">
                    {/* ... outros campos (Imagem, Nome, Descrição, Preço) ... */}
                    <div className="flex flex-col gap-1"><label htmlFor="imagem">Imagem</label><input type="file" name="imagem" id="imagem" accept="image/*" className="bg-white p-2 rounded" /></div>
                    <div className="flex flex-col gap-1"><label htmlFor="nome">Nome</label><input type="text" name="nome" id="nome" placeholder="Nome do item" required className="bg-white p-2 rounded" /></div>
                    <div className="flex flex-col gap-1"><label htmlFor="descricao">Descrição</label><textarea name="descricao" id="descricao" placeholder="Descrição do item" className="bg-white p-2 rounded" /></div>
                    <div className="flex flex-col gap-1"><label htmlFor="preco">Preço</label><input type="text" name="preco" id="preco" placeholder="R$ 0,00" required className="bg-white p-2 rounded" /></div>
                    
                    {/* CAMPO DE CATEGORIA ADICIONADO AO MODAL */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="categoria">Categoria</label>
                        <input type="text" name="categoria" id="categoria" placeholder="Ex: Bebidas, Porções" required className="bg-white p-2 rounded" />
                    </div>

                    {/* Itens do estoque */}
                    <div className="flex flex-col gap-2">
                        <label>Itens do estoque utilizados</label>
                        <input type="text" placeholder="Digite o nome do item e pressione Enter" value={itemInput} onChange={(e) => setItemInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleAddItem(e)} className="bg-white p-2 rounded" />
                        {itensEstoque.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="flex-1">{item.nome}</span>
                                <input type="number" placeholder="Quantidade" value={item.quantidade} onChange={(e) => handleQuantidadeChange(index, e.target.value)} className="w-24 bg-white p-2 rounded" />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-teal-600 transition">Adicionar Item</button>
                </form>
            </div>
        </Modal>

        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
            {/* ... conteúdo do modal de exclusão ... */}
        </Modal>

        {/* 5. LISTA DE ITENS RENDERIZANDO OS ITENS FILTRADOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itensFiltrados.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-lg shadow p-5 flex flex-col justify-between">
              <img src={item.imagem} alt={item.nome} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold mb-2">{item.nome}</h2>
              <p className="text-slate-600 mb-4">{item.descricao}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{item.preco}</span>
                <div className="flex gap-3">
                  <button onClick={() => setShowModal2(true)} className="text-red-600 cursor-pointer"><Trash size="21" /></button>
                  {/* 
                  
                  ESSE BOTÃO É PARA APARECER APENAS QUANDO FOR SELECIONADA A OPCAO PELA COMANDA (ADICIONAR PELO CARDÁPIO)
                  
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition cursor-pointer">
                    Adicionar
                  </button> */}



                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensagem caso o filtro não retorne resultados */}
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