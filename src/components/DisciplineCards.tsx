import { DisciplineWithCheck } from "../types/DisciplineWithCheck";
import SemesterCheckbox from "./SemesterCheckbox";
import SubjectCheckbox from "./SubjectCheckbox";

type DisciplineCardsProps = {
  obrigatorias: DisciplineWithCheck[];
  setObrigatorias: (disciplines: DisciplineWithCheck[]) => void;
};

const DisciplineCards = ({ obrigatorias, setObrigatorias }: DisciplineCardsProps) => {
  if (obrigatorias.length === 0) return <p>Carregando...</p>;

  const handleCheckboxToggle = (id: string) => {
    const updatedDisciplines = obrigatorias.map((d) =>
      d.id === id ? { ...d, check: !d.check } : d
    );

    setObrigatorias(updatedDisciplines);
    localStorage.setItem("obrigatorias", JSON.stringify(updatedDisciplines));

    const selectedDisciplines = updatedDisciplines.filter((d) => d.check);
    localStorage.setItem("selectedDisciplines", JSON.stringify(selectedDisciplines));
  };

  const handleToggleAll = (semester: number) => {
    const allChecked:boolean = obrigatorias.filter(d => d.semester === semester).every(d => d.check);

    const updatedDisciplines = obrigatorias.map((d) =>
      d.semester === semester ? { ...d, check: !allChecked } : d
    );

    setObrigatorias(updatedDisciplines);
    localStorage.setItem("obrigatorias", JSON.stringify(updatedDisciplines));

    const selectedDisciplines = updatedDisciplines.filter((d) => d.check);
    localStorage.setItem("selectedDisciplines", JSON.stringify(selectedDisciplines));
  };

  // Cria a lista de semestres de forma única e ordenada
  const semesters = [...new Set(obrigatorias.map(d => d.semester))];
  
  // Adiciona o semestre 5 manualmente, se não estiver presente
  if (!semesters.includes(5)) semesters.push(5);
  
  // Ordena os semestres em ordem crescente
  semesters.sort((a, b) => a - b);

  return (
    <div className="flex flex-wrap justify-center items-center gap-9 font-base w-full">
      {semesters.map(semester => {
        const semesterDisciplines = obrigatorias.filter(d => d.semester === semester);
        const allChecked = semesterDisciplines.every(d => d.check);

        return (
          <div key={semester} className="w-full max-w-[305px] h-full min-h-[345px] max-h-[345px] bg-white shadow-lg border border-transparent rounded-2xl">
            <h3 className="font-heading text-center md:text-xl text-white font-bold bg-color-orange rounded-t-lg md:p-2">
              Semestre {semester}
            </h3>
            {semester === 5 && semesterDisciplines.length === 0 ? (
              <p className=" md:text-lg text-color-font-base p-4">
                Nenhuma obrigatória aqui! Nessa você escapou!
              </p>
            ) : (
              <>
                {semesterDisciplines.length > 0 && (
                  <div className="flex md:py-1.5 md:px-2.5">
                    <SemesterCheckbox checked={allChecked} onToggleAll={() => handleToggleAll(semester)} />
                  </div>
                )}
                {semesterDisciplines.map(discipline => (
                  <div key={discipline.id} className="flex gap-x-1.5 items-center md:py-1.5 md:px-2.5 ">
                    <SubjectCheckbox checked={discipline.check} onToggle={() => handleCheckboxToggle(discipline.id)} />
                    <p className="md:text-lg text-color-font-base">{discipline.name.toLowerCase()}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DisciplineCards;
