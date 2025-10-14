import { X } from 'lucide-react'

const Modal = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

   const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
   } 
  return (
    <div id="wrapper" className="z-50 fixed inset-0 bg-black/25  backdrop-blur-sm flex justify-center items-center" onClick ={handleClose}>
      <div className="w-[400px] lg:w-[600px] flex flex-col">
        <button onClick={() => onClose()} className="text-slate-50 text-xl place-self-end cursor-pointer"><X/></button>
        <div className="bg-slate-50 p-2 rounded">
            {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
