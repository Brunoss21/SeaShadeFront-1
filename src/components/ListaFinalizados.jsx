import { Check, ZoomIn } from 'lucide-react';

const ListaFinalizados = () => {
  const dadosComandas = [
    {
      id: '8796869',
      numeroComanda: '#003',
      guardaSol: '1',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:08',
    },
    {
      id: '8796870',
      numeroComanda: '#004',
      guardaSol: '2',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:09',
    },
    {
      id: '8796871',
      numeroComanda: '#005',
      guardaSol: '3',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:10',
    },
    {
      id: '8796872',
      numeroComanda: '#006',
      guardaSol: '4',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:11',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
    {
      id: '8796873',
      numeroComanda: '#007',
      guardaSol: '5',
      status: 'Concluída',
      data: '06/09/2025',
      horario: '00:12',
    },
  ];

  return (
   <div className="w-full overflow-x-auto overflow-y-auto h-78">
  <table className="min-w-full rounded-lg shadow-md text-sm md:text-base table-fixed">
    {/* Cabeçalho da Tabela */}
    <thead className="bg-slate-800 text-slate-50 font-semibold text-sm md:text-lg sticky top-0 z-10">
      <tr>
        <th className="py-2 text-center w-[10%]">ID</th>
        <th className="py-2 text-center w-[15%]">Nº da Comanda</th>
        <th className="py-2 text-center w-[15%]">Guarda-sol</th>
        <th className="py-2 text-center w-[10%]">Status</th>
        <th className="py-2 text-center w-[20%]">Data</th>
        <th className="py-2 text-center w-[10%]">Horário</th>
        <th className="py-2 text-center w-[5%]"></th>
      </tr>
    </thead>

    {/* Corpo da Tabela */}
    <tbody>
      {dadosComandas.map((comanda) => (
        <tr
          key={comanda.id}
          className="bg-slate-50 border-b border-slate-200"
        >
          <td className="py-2 text-center">{comanda.id}</td>
          <td className="py-2 text-center">{comanda.numeroComanda}</td>
          <td className="py-2 text-center">{comanda.guardaSol}</td>
          <td className="py-2 text-center">
            <span className="bg-green-300 px-2 mx-2 py-1 font-medium flex justify-center items-center gap-1">
              {comanda.status} <Check size="16" />
            </span>
          </td>
          <td className="py-2 text-center">{comanda.data}</td>
          <td className="py-2 text-center">{comanda.horario}</td>
          <td className="py-2 text-center">
            <ZoomIn className="text-indigo-700 cursor-pointer mx-auto" size="20" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default ListaFinalizados;