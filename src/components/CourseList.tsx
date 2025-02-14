import React, { useEffect, useState } from "react";
import axios from "../api/api";
import { Course, CourseResponse } from "../types/Course";

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<CourseResponse>("/course", {
          params: { page: 0, size: 10 },
        });

        setCourses(response.data.content);
        setTotal(response.data.total);
      } catch (err) {
        setError("Erro ao carregar os cursos");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <p>Total de cursos: {total}</p>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>Departamento: {course.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;