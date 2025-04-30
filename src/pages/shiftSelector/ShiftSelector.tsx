import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Sun, Moon } from "lucide-react";
import logo from "../../assets/logo.png";
import bgDay from "../../assets/bg-day.png";
import bgNight from "../../assets/bg-night.png";
import GenericPopup from "../../components/GenericPopup";

export default function ShiftSelector() {
  const [isNight, setIsNight] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const ShiftChange = () => {
    setIsNight((prev) => !prev);
    handlePopupClose();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const shift = sessionStorage.getItem("shift");
    setIsNight(shift === "night");
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    sessionStorage.setItem("shift", isNight ? "night" : "day");

    if (isNight) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isNight, initialized]);

  return (
    <section
      className="bg-cover bg-no-repeat transition-all duration-200 min-h-screen"
      style={{ backgroundImage: `url(${isNight ? bgNight : bgDay})` }}
    >
      <div className="absolute left-36 top-12">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[155px] h-[62px]" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center text-[#F6F6F6] font-bold gap-12 h-screen text-center">
        <h1 className="text-[95px] font-heading font-semibold">
          Escolha seu turno
        </h1>
        <div className="flex items-center gap-14 text-[50px]">
          <p className="font-heading font-semibold">Diurno</p>
          <div className="relative w-[200px] h-[50px] bg-white rounded-full flex items-center px-2 cursor-pointer">
            <div
              className={`absolute w-[70px] h-[70px] rounded-full flex items-center justify-center transition-transform ${
                isNight ? "translate-x-[130px]" : "translate-x-[-10px]"
              } bg-[#FE8B01]`}
              onClick={() => setShowPopup(true)}
            >
              {isNight ? (
                <Moon className="text-white w-8 h-8" />
              ) : (
                <Sun className="text-white w-8 h-8" />
              )}
            </div>
          </div>
          <p className="font-heading font-semibold">Noturno</p>
        </div>

        <div>
          <Link to="/obrigatorias">
            <button className="text-white bg-[#408CFF] w-[282px] h-[89px] rounded-[20px] text-[40px] font-bold cursor-pointer">
              Prosseguir
            </button>
          </Link>
        </div>
      </div>

      <GenericPopup
        open={showPopup}
        onClose={handlePopupClose}
        title="Tem certeza de que deseja mudar o turno?"
        message="Todas as informações adicionadas serão perdidas e essa ação não poderá ser desfeita!"
        confirmText="Mudar turno"
        cancelText="Não mudar"
        onConfirm={ShiftChange}
        shift={!isNight}
      />
    </section>
  );
}
