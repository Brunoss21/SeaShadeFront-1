import { Check, ZoomIn } from 'lucide-react';

const Finalizados = () => {
  return (
    <div className="px-2 text-sm md:text-base bg-slate-50 py-2 flex items-center text-center border-b border-slate-200">
      <p className="basis-2/6">#003</p>
      <p className="basis-2/6">1</p>
      <p className="basis-1/6 bg-green-300 px-1 font-medium flex justify-center gap-2 items-center">
        Concluída <Check size="20" />
      </p>
      <p className="basis-2/6">06/09/2025</p>
      <p className="basis-2/6">00:08</p>
      <ZoomIn className="text-indigo-700 cursor-pointer" size="28" />
    </div>
  );
};

export default Finalizados;