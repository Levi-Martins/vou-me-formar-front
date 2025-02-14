type CleanAllProps = {
  onCleanAll: () => void;
};

const CleanAll = ({ onCleanAll }: CleanAllProps) => {
  return (
    <div
      onClick={onCleanAll} // Chama a função ao clicar
      className="bg-gray-400 hover:bg-blue-400 max-w-[129px] text-[25px] center text-center font-semibold text-white rounded-lg py-1 px-2.5 mt-5 cursor-pointer shadow"
    >
      Limpar
    </div>
  );
};

export default CleanAll;
