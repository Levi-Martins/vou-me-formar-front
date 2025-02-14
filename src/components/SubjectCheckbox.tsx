import checkPng from '../assets/checkbox-true.png'

interface SubjectCheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

const SubjectCheckbox = ({ checked, onToggle }: SubjectCheckboxProps) => {

  return (
    <div 
      onClick={onToggle} 
      className="flex justify-center items-center min-w-6 max-w-6 min-h-6 max-h-6 border-2 border-color-font-base rounded cursor-pointer"
    >
      {checked && <img src={checkPng} alt=""/>}
    </div>
  );
};

export default SubjectCheckbox;
