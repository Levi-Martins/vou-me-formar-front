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
      <div className="relative w-6 h-6 border-2 border-color-font-base rounded-2xl cursor-pointer">
        {checked && (
          <div className="absolute top-1/2 left-1/2 w-[15px] h-[15px] bg-[#FF71A6] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
        )}
      </div>

      {/* Texto indicando ação */}
      <span className="text-color-font-base font-semibold">
        {checked ? "Desmarcar todas" : "Marcar todas"}
      </span>
    </div>
  );
};

export default SemesterCheckbox;
