import logo from "../../assets/logo.png";
import sunSymbol from "../../assets/sun-symbol.svg";

export const LogoAndShiftButton = () => {
  return (
    <div className="flex items-center gap-[70px]">
      <img
        src={logo}
        alt="Logo da VMF"
        className="w-[155px] h-[62px] cursor-pointer"
      />
      <div className="bg-white text-[#FF9629]  w-[131px] h-[40px] font-heading rounded-md font-bold text-[19px] flex items-center justify-center gap-2 cursor-pointer shadow-lg">
        <img
          src={sunSymbol}
          alt="símbolo de um sol"
          className="w-[20px] h-[20px]"
        />
        <p>integral</p>
      </div>
    </div>
  );
};
