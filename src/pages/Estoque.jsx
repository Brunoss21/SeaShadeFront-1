import Sidebar from '../components/Sidebar'
import HeaderLogged from '../components/HeaderLogged'
import { Plus, Minus } from 'lucide-react'
import Modal from '../components/Modal'
import { useState } from 'react'

const Estoque = () => {
  const dadosEstoque = [
    // Condimentos
    { sku: 'ALI-COND-SAL', cat: 'Condimentos', desc: 'Sal refinado 1kg', qnt: '50 kg', totalun: 2.95, total: 2.95 * 50 },
    { sku: 'ALI-COND-ACUCAR', cat: 'Condimentos', desc: 'Açúcar refinado 1kg', qnt: '40 kg', totalun: 3.50, total: 3.50 * 40 },
    { sku: 'ALI-COND-OREGANO', cat: 'Condimentos', desc: 'Orégano seco 50g', qnt: '1.5 kg', totalun: 4.00, total: 4.00 * 30 },
    // Carnes (vendidas por peso)
    { sku: 'ALI-CAR-FRANGO', cat: 'Carnes', desc: 'Frango desfiado', qnt: '30 kg', totalun: 15.00, total: 15.00 * 30 },
    { sku: 'ALI-CAR-BOVINO', cat: 'Carnes', desc: 'Carne moída', qnt: '20 kg', totalun: 28.00, total: 28.00 * 20 },
    // Laticínios
    { sku: 'ALI-LAT-LEITE', cat: 'Laticínios', desc: 'Leite integral 1L', qnt: '60 L', totalun: 4.50, total: 4.50 * 60 },
    { sku: 'ALI-LAT-QUEIJO', cat: 'Laticínios', desc: 'Queijo mussarela 1kg', qnt: '25 kg', totalun: 22.00, total: 22.00 * 25 },
    // Bebidas
    { sku: 'BEB-AGUA-CRIS-500', cat: 'Água', desc: 'Água Cristal 500ml', qnt: '50 L', totalun: 2.00, total: 2.00 * 100 },
    { sku: 'BEB-REFR-FANT-350', cat: 'Refrigerantes', desc: 'Fanta Laranja 350ml', qnt: '28 L', totalun: 3.50, total: 3.50 * 80 },
    // Frutas e vegetais (vendidos por peso)
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
    { sku: 'ALI-FRUT-MACA', cat: 'Frutas', desc: 'Maçã vermelha', qnt: '120 kg', totalun: 2.50, total: 2.50 * 120 },
    { sku: 'ALI-VEG-TOMATE', cat: 'Vegetais', desc: 'Tomate', qnt: '6 kg', totalun: 5.00, total: 5.00 * 60 },
  ];

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-slate-600 h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
        <HeaderLogged />
        <h1 className="text-2xl md:text-3xl font-bold mb-5">Estoque</h1>
        <div className=" flex items-center justify-between">
          <div className="flex gap-1 h-full">
          <h2 className="bg-slate-100 rounded-t px-3 flex items-center pb-1 font-semibold text-indigo-500 cursor-pointer">Lista de produtos</h2>
          <h2 className="bg-slate-100 rounded-t px-2 mb-1 flex items-center font-semibold text-indigo-500 cursor-pointer">Histórico</h2>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="shadow-sm rounded py-2 px-3 flex gap-1 bg-indigo-500 text-slate-50 cursor-pointer transition-all duration-300 mb-1"
          ><Plus />
            Adicionar Item
            
          </button>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-slate-700 mb-7">Adicionar item ao estoque</h3>
              <form className="text-lg flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="produto" className="">Descrição do produto</label>
                  <input type="text" name="produto" id="produto" required className="bg-white p-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="categoria" className="">Categoria</label>
                  <input type="text" name="categoria" id="categoria" required className="bg-white p-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="qntInicial" className="">Quantidade de entrada</label>
                  <input type="text" name="qntInicial" id="qntInicial" required className="bg-white p-2 rounded" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="valor" className="">Valor pago (opcional)</label>
                  <input type="text" name="valor" id="valor" className="bg-white p-2 rounded" />
                </div>
                <button className="cursor-pointer bg-indigo-600 text-slate-50 py-2 text-xl rounded">Adicionar</button>
              </form>
            </div>
          </Modal>
        </div>
        <main className="flex-1 overflow-visible">
          <div className="w-full overflow-x-auto overflow-y-auto h-[780px]">
            <table className="min-w-full rounded-lg table-fixed border-collapse">
              <thead className="bg-slate-100 sticky top-0 z-20">
                <tr>
                  <th className="px-4 py-2 text-left text-slate-700 font-semibold w-[15%]">Código SKU</th>
                  <th className="px-4 py-2 text-left text-slate-700 font-semibold w-[15%]">Categoria</th>
                  <th className="px-4 py-2 text-left text-gray-700 font-semibold w-[25%]">Descrição</th>
                  <th className="px-4 py-2 text-left text-slate-700 font-semibold w-[15%]">Total unitário</th>
                  <th className="px-4 py-2 text-left text-slate-700 font-semibold w-[15%]">Total</th>
                  <th className="px-4 py-2 text-left text-slate-700 font-semibold w-[15%]">Quantidade em estoque</th>
                  <th className="px-4 py-2 text-center w-[5%]"></th>
                  <th className="px-4 py-2 text-center w-[5%]"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dadosEstoque.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-4 py-2">{item.sku}</td>
                    <td className="px-4 py-2">{item.cat}</td>
                    <td className="px-4 py-2">{item.desc}</td>
                    <td className="px-4 py-2">R$ {item.totalun.toFixed(2)}</td>
                    <td className="px-4 py-2">R$ {item.total.toFixed(2)}</td>
                    <td className="px-4 py-2">{item.qnt}</td>
                    <td className="text-center px-1 lg:px-0">
                      <button className="cursor-pointer bg-slate-300 rounded p-1">
                        <Minus size={16} />
                      </button>
                    </td>
                    <td className="text-center px-1 lg:px-0">
                      <button className="cursor-pointer bg-indigo-500 text-slate-50 rounded p-1">
                        <Plus size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Estoque