export interface Course {
  id: string;
  name: string;
  department: string;
}

export interface CourseResponse {
  content: Course[];
  total: number;
  page: number;
  size: number;
}