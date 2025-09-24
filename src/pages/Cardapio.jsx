import Sidebar from "../components/Sidebar";
import HeaderLogged from "../components/HeaderLogged";
import { Search, Plus, Trash } from "lucide-react";
import caipirinhaImg from "../assets/caipirinha-uva.jpg";
import camaraoImg from "../assets/camarao-frito.jpg";
import aguaImg from "../assets/agua-coco.jpg";
import batataImg from "../assets/batata-frita.jpg";
import Modal from "../components/Modal";
import { useState } from "react";

const Cardapio = () => {
  // Mock de dados do cardápio
  const cardapioItens = [
    { nome: "Caipirinha de Uva", preco: "R$ 15,00", descricao: "Bebida alcoólica refrescante", imagem: caipirinhaImg },
    { nome: "Porção de Camarão", preco: "R$ 35,00", descricao: "Camarão frito com temperos especiais", imagem: camaraoImg },
    { nome: "Água de Coco", preco: "R$ 8,00", descricao: "Coco natural gelado", imagem: aguaImg },
    { nome: "Batata Frita", preco: "R$ 12,00", descricao: "Porção de batatas fritas crocantes", imagem: batataImg },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [itemInput, setItemInput] = useState("");
  const [itensEstoque, setItensEstoque] = useState([]);

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
              placeholder="Buscar item por nome ou ID"
              className="w-full max-w-90 pl-10 pr-4 py-3 rounded border border-slate-300 bg-white focus:outline-none focus:ring focus:border-blue-500"
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

        {/* Modal */}
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-slate-700 mb-7">Adicionar item ao cardápio</h3>
            <form className="text-lg flex flex-col gap-4">
              {/* Imagem */}
              <div className="flex flex-col gap-1">
                <label htmlFor="imagem">Imagem</label>
                <input type="file" name="imagem" id="imagem" accept="image/*" className="bg-white p-2 rounded" />
              </div>

              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="Nome do item" required className="bg-white p-2 rounded" />
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-1">
                <label htmlFor="descricao">Descrição</label>
                <textarea name="descricao" id="descricao" placeholder="Descrição do item" className="bg-white p-2 rounded" />
              </div>

              {/* Preço */}
              <div className="flex flex-col gap-1">
                <label htmlFor="preco">Preço</label>
                <input type="text" name="preco" id="preco" placeholder="R$ 0,00" required className="bg-white p-2 rounded" />
              </div>

              {/* Itens do estoque */}
              <div className="flex flex-col gap-2">
                <label>Itens do estoque utilizados</label>
                <input
                  type="text"
                  placeholder="Digite o nome do item e pressione Enter"
                  value={itemInput}
                  onChange={(e) => setItemInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddItem(e)}
                  className="bg-white p-2 rounded"
                />

                {itensEstoque.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="flex-1">{item.nome}</span>
                    <input
                      type="number"
                      placeholder="Quantidade"
                      value={item.quantidade}
                      onChange={(e) => handleQuantidadeChange(index, e.target.value)}
                      className="w-24 bg-white p-2 rounded"
                    />
                  </div>
                ))}
              </div>

              <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-teal-600 transition">
                Adicionar Item
              </button>
            </form>
          </div>
        </Modal>
        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
  <div className="p-6 text-center">
    <h3 className="text-2xl font-semibold text-slate-700 mb-6">
      Tem certeza que deseja excluir este item do cardápio?
    </h3>
    <div className="flex justify-center gap-4">
      <button
        onClick={() => {
          // Aqui você pode chamar a função de exclusão do item
          setShowModal2(false);
        }}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Sim
      </button>
      <button
        onClick={() => setShowModal2(false)}
        className="bg-gray-300 text-slate-700 px-4 py-2 rounded hover:bg-gray-400 transition"
      >
        Não
      </button>
    </div>
  </div>
</Modal>
        {/* Lista de itens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardapioItens.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-lg shadow p-5 flex flex-col justify-between">
              <img src={item.imagem} alt={item.nome} className="w-full h-40 object-cover rounded-md mb-4" />
              <h2 className="text-lg font-bold mb-2">{item.nome}</h2>
              <p className="text-slate-600 mb-4">{item.descricao}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{item.preco}</span>
                <div className="flex gap-3">
                  <button onClick={() => setShowModal2(true)}className="text-red-600 cursor-pointer"><Trash size="21" /></button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition cursor-pointer">
                  Adicionar
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
