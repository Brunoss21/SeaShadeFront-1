import { PiUmbrellaFill } from "react-icons/pi";
// mudar a cor do guarda-sol conforme seu status
function IconList({ quantidade }) {
  return (
    <div className="flex flex-wrap gap-4">
      {Array.from({ length: quantidade }).map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <PiUmbrellaFill className="text-slate-600 text-4xl md:text-5xl" />
          <span className="text-sm font-semibold">{i + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default IconList;