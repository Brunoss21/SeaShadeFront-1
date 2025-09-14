import Sidebar from '../components/Sidebar'
import HeaderLogged from '../components/HeaderLogged'
import { Plus, Minus } from 'lucide-react'
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
];
    return (
        <div className="text-slate-600 h-screen">
            <div>
                <Sidebar/>
            </div>
            <div className="flex flex-col w-full pl-20 py-4 pr-4 md:pl-25 md:pr-9">
                <HeaderLogged/>
                <div className="flex items-center justify-between  pb-5">
                <h1 className="text-2xl md:text-3xl font-bold">Estoque</h1>
                <div className="shadow-sm rounded py-2 px-3 flex gap-2 font-semibold bg-indigo-500 text-slate-50 cursor-pointer transition-all duration-300">
                  Adicionar Item
                <Plus/>
                </div>
                </div>
                <main>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Código SKU</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Categoria</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Descrição</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Total unitário</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Total</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold border-b">Quantidade em estoque</th>
                          <th className="border-b"></th> {/* coluna do + */}
                          <th className="border-b"></th> {/* coluna do - */}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {dadosEstoque.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-2">{item.sku}</td>
                          <td className="px-4 py-2">{item.cat}</td>
                          <td className="px-4 py-2">{item.desc}</td>
                          <td className="px-4 py-2">R$ {item.totalun}</td>
                          <td className="px-4 py-2">R$ {item.total}</td>
                          <td className="px-4 py-2">{item.qnt}</td>
                          <td className="text-center px-1 lg:px-0"><button className="bg-slate-300 rounded"><Minus/></button></td>
                          <td className="text-center px-1 lg:px-0"><button className="bg-indigo-500 text-slate-50 rounded"><Plus/></button></td>
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

export default Estoque;