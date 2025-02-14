import { useState, useEffect } from "react";
import CleanAll from "../../components/CleanAll";
import DisciplineCards from "../../components/DisciplineCards";
import { Discipline } from "../../types/Discipline";
import { gerAllObligatoryDisciplines } from "../../services/disciplineService";
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
        const disciplines = await gerAllObligatoryDisciplines();

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
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="bg-background-semester w-full max-w-[1390px] min-h-[935px] mx-auto">
        <h1 className="text-center md:text-[50px] font-bold text-color-font-pink pt-[30px] pb-[25px]">
          Obrigatórias
        </h1>
        <DisciplineCards obrigatorias={obrigatorias} setObrigatorias={setObrigatorias} />
        <div className="w-full flex justify-end pr-[25px]">
          <CleanAll onCleanAll={handleCleanAll} />
        </div>
      </div>
    </div>
  );
};

export default ObligatorySubjectsPage;
