import { useEffect, useState } from "react";
import bgDiurno from "../../assets/fundo-diurno.png";
import ArrowButton from "../../components/ArrowButton";
import CleanAll from "../../components/CleanAll";
import DisciplineCards from "../../components/DisciplineCards";
import Header from "../../components/header/Header";
import SpeechBubble from "../../components/SpeechBubble";
import { getAllObligatoryDisciplines } from "../../services/disciplineService";
import { DisciplineWithCheck } from "../../types/DisciplineWithCheck";

const ObligatorySubjectsPage = () => {
  const [obrigatorias, setObrigatorias] = useState<DisciplineWithCheck[]>([]);

  useEffect(() => {
    const fetchDisciplines = async () => {
      const storedDisciplines = localStorage.getItem("obrigatorias");

      if (storedDisciplines) {
        setObrigatorias(JSON.parse(storedDisciplines));
        return;
      }

      try {
        const disciplines = await getAllObligatoryDisciplines();

        if (disciplines) {
          const disciplinesWithCheck = disciplines.map((d) => ({
            ...d,
            check: false,
          }));

          localStorage.setItem(
            "obrigatorias",
            JSON.stringify(disciplinesWithCheck)
          );

          setObrigatorias(disciplinesWithCheck);
        }
      } catch (error) {
        console.error("Erro ao carregar disciplinas:", error);
      }
    };

    fetchDisciplines();
  }, []);

  const handleCleanAll = () => {
    const updatedDisciplines = obrigatorias.map((d) => ({
      ...d,
      check: false,
    }));
    setObrigatorias(updatedDisciplines);
    localStorage.setItem("obrigatorias", JSON.stringify(updatedDisciplines));
    localStorage.removeItem("selectedDisciplines");
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center px-[100px] py-[50px]"
      style={{ backgroundImage: `url(${bgDiurno})` }}
    >
      <Header />

      <div className="flex gap-[55px] justify-center items-center p-5">
        <ArrowButton direction={"left"} />
        <div className="bg-background-semester w-full max-w-[1390px] min-h-[935px] py-5 px-[30px] rounded-2xl">
          <h1 className="font-heading text-center md:text-[50px] font-bold text-color-font-pink pt-[30px] pb-[25px]">
            Obrigatórias
          </h1>
          <DisciplineCards
            obrigatorias={obrigatorias}
            setObrigatorias={setObrigatorias}
          />
          <div className="w-full flex justify-end pb-5">
            <CleanAll onCleanAll={handleCleanAll} />
          </div>
          <SpeechBubble>
            Aqui, você vai adicionar as suas cadeiras obrigatórias já feitas.
            Caso queira voltar e mudar o turno, ou avançar para a próxima etapa,
            é só clicar nas setas ao lado ;)
          </SpeechBubble>
        </div>
        <ArrowButton direction={"right"} />
      </div>
    </div>
  );
};

export default ObligatorySubjectsPage;
