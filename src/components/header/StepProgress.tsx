import { useLocation } from "react-router";

interface Step {
  label: string;
  path: string;
}

const steps: Step[] = [
  { label: "Obrigatórias", path: "/obrigatorias" },
  { label: "Eletivas", path: "/eletivas" },
  { label: "Optativas", path: "/optativas" },
  { label: "TCC e Horas", path: "/tcc-e-horas" },
  { label: "Resultado", path: "/resultado" },
];

const StepProgress = () => {
  const location = useLocation();
  const currentStepIndex = steps.findIndex(
    (step) => step.path === location.pathname
  );

  return (
    <div>
      <div className="relative flex items-center w-[900px]">
        {/* Linha horizontal atrás das bolinhas */}
        <div className="absolute top-[25px] left-[10%] right-[10%] h-0.5 bg-white z-0 transform -translate-y-1/2" />

        {/* Bolinhas */}
        {steps.map((step, index) => {
          const isActive = index === currentStepIndex;

          return (
            <div
              key={index}
              className="flex flex-col items-center relative z-10 w-1/5"
            >
              <div
                className={`flex items-center justify-center rounded-full border-2 border-white font-heading font-semibold
                ${
                  isActive
                    ? "bg-color-font-pink w-12 h-12 text-lg border-3"
                    : "bg-[#FF9128] w-10 h-10 text-sm"
                }
                text-white font-bold`}
              >
                {index + 1}
              </div>
              <span className="text-white text-lg mt-2 text-center font-heading font-semibold leading-4">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgress;
