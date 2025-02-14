import { useEffect, useState } from "react";
import { getAllDisciplines } from "../services/disciplineService";
import { Discipline } from "../types/Discipline";
import SubjectCheckbox from "./SubjectCheckbox";


const DisciplineCards = () => {
  const [obrigatorias, setObrigatorias] = useState<Discipline[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDisciplines = async () => {
      const disciplines = await getAllDisciplines();

      if (disciplines) {
        setObrigatorias(disciplines);
      }
      setLoading(false);
    };

    fetchDisciplines();
  }, []);

  // Organiza as disciplinas por semestre
  const disciplinesBySemester = obrigatorias.reduce((acc, discipline) => {
    if (!acc[discipline.semester]) {
      acc[discipline.semester] = [];
    }
    acc[discipline.semester].push(discipline);
    return acc;
  }, {} as { [key: number]: Discipline[] });

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="flex flex-wrap justify-center items-center gap-9 font-base">
      {Object.entries(disciplinesBySemester).map(([semester, disciplines]) => (
        <div
          key={semester}
          className="w-full max-w-[306px] h-full min-h-[300px] max-h-[300px] bg-white border border-transparent rounded-2xl"
        >
          <h3 className="text-center md:text-xl text-white font-bold bg-color-orange rounded-t-lg md:p-2">
            Semestre {semester}
          </h3>
          {disciplines.map((discipline) => (
            <div
              key={discipline.id}
              className="flex gap-x-1.5 jus items-center md:py-1.5 md:px-2.5"
            >
              <SubjectCheckbox />
              <p className="md:text-lg text-color-font-base ">
                {discipline.name.toLocaleLowerCase()}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DisciplineCards;
