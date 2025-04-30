interface GenericPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  onConfirm: () => void;
  shift: boolean
}

export default function GenericPopup({
  open,
  onClose,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  shift
}: GenericPopupProps) {
  const dayGradient =
  "linear-gradient(63deg, rgba(0, 199, 208, 1) 0%, rgba(87, 199, 133, 1) 65%, rgba(119, 181, 71, 1) 100%)";

const nightGradient =
  "linear-gradient(63deg, rgba(134, 2, 87, 1) 0%, rgba(253, 122, 56, 1) 76%, rgba(253, 122, 56, 1) 100%)";

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div
            className="rounded-2xl overflow-hidden w-[666px] max-h-[329px] h-[329px] shadow-xl"
            style={{
              background: shift ? dayGradient : nightGradient,
            }}
            
          >
            <div className=" p-[30px] text-center">
              <h2 className="text-white font-bold text-[40px] font-heading leading-[1.2]">
                {title}
              </h2>
            </div>
            <div className="px-[30px] pb-[40px] text-center text-white text-[23px] font-base font-light leading-[1.2]">
              <p>{message}</p>
            </div>
            <div className="flex text-center text-black font-semibold text-[35px] font-heading ">
              <button
                onClick={onConfirm}
                className="flex-1 h-[87px] bg-white transition border-r-2 border-gray-500 flex items-center justify-center pb-[10px] cursor-pointer"
              >
                {confirmText}
              </button>
              <button
                onClick={onClose}
                className="flex-1 h-[87px] bg-white transition border-l-2 border-gray-500 flex items-center justify-center pb-[10px] cursor-pointer"
              >
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
