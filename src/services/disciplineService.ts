import api from "../api/api";
import { DisciplineResponse, Discipline } from "../types/Discipline";

export const gerAllObligatoryDisciplines = async (): Promise<Discipline[]> => {
  let allDisciplines: Discipline[] = [];
  let page = 0;
  const size = 10;
  let totalRecords = 0;

  try {
    do {
      const response = await api.get<DisciplineResponse>("/discipline", {
        params: {
          page,
          size,
          typeOfDiscipline: "OBRIGATORIA",
          courseId: "1f9de3b5-6b67-42bf-8479-02865744543d",
        },
      });

      allDisciplines = [...allDisciplines, ...response.data.content];
      totalRecords = response.data.total;
      page++;
    } while (allDisciplines.length < totalRecords);
  } catch (error) {
    throw new Error("Erro ao carregar todas as disciplinas");
  }

  return allDisciplines;
};
