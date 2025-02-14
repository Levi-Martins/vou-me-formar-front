import { Course } from "./Course";

interface Prerequisite{
  id: string;
  name: string;
  disciplineCode: string;
}

export interface Discipline{
  id: string;
  name: string;
  typeOfDiscipline: string;
  workload: number;
  classCredits: number;
  description: string;
  semester: number;
  course: Course;
  prerequisites: Prerequisite[];
  disciplineCode: string;
}

export interface DisciplineResponse{
  content: Discipline[];
  total: number;
  page: number;
  size: number;
}