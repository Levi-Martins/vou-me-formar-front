import checkPng from '../assets/checkbox-all-true.png'


type SemesterCheckboxProps = {
  checked: boolean; 
  onToggleAll: () => void; 
};

const SemesterCheckbox = ({ checked, onToggleAll }: SemesterCheckboxProps) => {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer select-none"
      onClick={onToggleAll}
    >
      {/* Checkbox visual */}
      <div
        className={`flex justify-center items-center min-w-6 max-w-6 min-h-6 max-h-6 border-2 border-color-font-base rounded-2xl cursor-pointer`}
      >
        {checked && <img src={checkPng} alt="" className='pr-[0.25px]' />}
      </div>
      
      {/* Texto indicando ação */}
      <span className="text-color-font-base font-semibold">
        {checked ? "Desmarcar todas" : "Marcar todas"}
      </span>
    </div>
  );
};

export default SemesterCheckbox;
