import Sidebar from '../components/Sidebar'
import HeaderLogged from '../components/HeaderLogged'
import { Plus, Minus, SquarePen } from 'lucide-react'
import Modal from '../components/Modal'
import { useState } from 'react'

// DEFINIR ESTOQUE BAIXO E SE TIVER BAIXO COLOCAR TRIANGULO COM EXCLAMAÇÃO

const Estoque = () => {
  const dadosEstoque = [
    // Condimentos
    { sku: '#154', cat: 'Condimentos', desc: 'Sal refinado 1kg', qnt: '50 kg', totalun: 2.95, total: 2.95 * 50 },
    { sku: '#154', cat: 'Condimentos', desc: 'Açúcar refinado 1kg', qnt: '40 kg', totalun: 3.50, total: 3.50 * 40 },
    { sku: '#154', cat: 'Condimentos', desc: 'Orégano seco 50g', qnt: '1.5 kg', totalun: 4.00, total: 4.00 * 30 },
    // Carnes (vendidas por peso)
    { sku: '#144', cat: 'Carnes', desc: 'Frango desfiado', qnt: '30 kg', totalun: 15.00, total: 15.00 * 30 },
    { sku: '#154', cat: 'Carnes', desc: 'Carne moída', qnt: '20 kg', totalun: 28.00, total: 28.00 * 20 },
    // Laticínios
    { sku: '#115', cat: 'Laticínios', desc: 'Leite integral 1L', qnt: '60 L', totalun: 4.50, total: 4.50 * 60 },
    { sku: '#114', cat: 'Laticínios', desc: 'Queijo mussarela 1kg', qnt: '25 kg', totalun: 22.00, total: 22.00 * 25 },
    // Bebidas
    { sku: '#224', cat: 'Água', desc: 'Água Cristal 500ml', qnt: '50 L', totalun: 2.00, total: 2.00 * 100 },
    { sku: '#224', cat: 'Refrigerantes', desc: 'Fanta Laranja 350ml', qnt: '28 L', totalun: 3.50, total: 3.50 * 80 },
    // Frutas e vegetais (vendidos por peso)
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: '#113', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: '#113', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
  ];

  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [showTable2, setShowTable2] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="text-slate-600 h-screen flex ">
      <Sidebar />
      <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
        <HeaderLogged />
        <h1 className="text-2xl md:text-3xl font-bold mb-5 text-blue-600">Estoque</h1>
        <div className=" flex items-end justify-between gap-1">
          <div className="flex gap-1 h-full">
          <button className={`rounded-t py-2 px-3 flex items-center font-semibold  cursor-pointer mb-1 text-slate-800 ${showTable? " bg-slate-200": "bg-slate-100"}`} onClick={() => {if (!showTable) {setShowTable(true); setShowTable2(false)}}}>Lista de produtos</button>
          <button className={`rounded-t py-2 px-3 flex items-center font-semibold cursor-pointer mb-1 text-slate-800 ${showTable2? " bg-slate-200" : "bg-slate-100 "}`} onClick={() => {if (!showTable2)setShowTable(false); setShowTable2(true)}}>Histórico</button>
          </div>

          {showTable && 
          <div className="flex gap-1">
            <button
            onClick={() => setShowDelete(!showDelete)}
            className="shadow-sm rounded p-2 flex bg-slate-500 text-slate-50 cursor-pointer transition-all duration-300 mb-1"
              ><SquarePen />
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="shadow-sm rounded p-2 flex bg-blue-600 text-slate-50 cursor-pointer transition-all duration-300 mb-1"
              ><Plus />
          </button>
          
          </div>}
          
          

          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
  <div className="p-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-7">Adicionar item ao estoque</h3>
    <form className="text-lg flex flex-col gap-4">
      
      <div className="flex flex-col gap-1">
        <label htmlFor="produto">Selecione o item</label>
        <input 
          placeholder="ID ou descrição" 
          type="text" 
          name="produto" 
          id="produto" 
          required 
          className="bg-white p-2 rounded" 
        />
      </div>

      <div className="flex flex-col gap-1">
        <label>Tipo de movimento</label>
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => setShowForm(true)}
            className={`flex-1 rounded text-slate-50 ${showForm ? "bg-teal-500 opacity-100" : "bg-teal-500 opacity-60"}`}
          >
            Entrada
          </button>

          <button 
            type="button"
            onClick={() => setShowForm(false)}
            className={`flex-1 rounded text-slate-50 ${!showForm ? "bg-red-400 opacity-100" : "bg-red-400 opacity-60"}`}
          >
            Saída
          </button>
        </div>
      </div>

      {showForm ? (
        <>
          <div className="flex flex-col gap-1">
            <label htmlFor="qntEntrada">Quantidade de entrada*</label>
            <input type="text" name="qntEntrada" id="qntEntrada" required className="bg-white p-2 rounded" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="valor">Valor pago*</label>
            <input type="text" name="valor" id="valor" className="bg-white p-2 rounded" />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-1">
            <label htmlFor="qntSaida">Quantidade de saída*</label>
            <input type="text" name="qntSaida" id="qntSaida" required className="bg-white p-2 rounded" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="motivo">Motivo*</label>
            <input type="text" name="motivo" id="motivo" className="bg-white p-2 rounded" />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="obs">Observação</label>
            <input type="text" name="obs" id="obs" className="bg-white p-2 rounded" />
          </div>
        </>
      )}

      <button type="submit" className="cursor-pointer bg-indigo-600 text-slate-50 py-2 text-xl rounded">
        Adicionar
      </button>
    </form>
  </div>
</Modal>

        </div>
        <main className="flex-1">
          <div className="w-full overflow-x-auto overflow-y-auto h-[780px]">
            {showTable? 
            <table className="min-w-full rounded-lg table-fixed border-collapse">
              <thead className="bg-slate-200 sticky top-0 z-20">
                <tr>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[15%]">Produto</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[20%]">Categoria</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[25%]">Descrição</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[20%]">Quantidade em estoque</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Valor total</th>
                  {showDelete && 
                    <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[2%]"></th>}
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dadosEstoque.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-4 py-2">{item.sku}</td>
                    <td className="px-4 py-2">{item.cat}</td>
                    <td className="px-4 py-2">{item.desc}</td>
                    <td className="px-4 py-2">{item.qnt}</td>
                    <td className="px-4 py-2">R$ {item.total.toFixed(2)}</td>
                    {showDelete &&
                    <td className="text-center"><button className="text-slate-50 bg-red-600 rounded-full cursor-pointer"><Minus/></button></td>}                    
                  </tr>
                ))}
              </tbody>
            </table>
            : <table className="min-w-full rounded-lg table-fixed border-collapse">
              <thead className="bg-slate-200 sticky top-0 z-20">
                <tr>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Movimentação</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Produto</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[15%]">Descrição</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[15%]">Tipo de movimento</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Quantidade</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Data</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Horário</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[10%]">Motivo</th>
                  <th className="px-4 py-2 text-left text-slate-800 font-semibold w-[15%]">Observação</th>
                  
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dadosEstoque.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-4 py-2">#432356</td>
                    <td className="px-4 py-2">{item.sku}</td>
                    <td className="px-4 py-2">{item.desc}</td>
                    <td className="px-4 py-2">Entrada</td>
                    <td className="px-4 py-2">10</td>
                    <td className="px-4 py-2">17/09/2025</td>
                    <td className="px-4 py-2">12:43</td>
                    <td className="px-4 py-2">Venda</td>
                    <td className="px-4 py-2">Pedido #8796869</td>
                    <td className="text-center px-1 lg:px-0"></td>
                  </tr>
                ))}
              </tbody>
            </table>}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Estoque