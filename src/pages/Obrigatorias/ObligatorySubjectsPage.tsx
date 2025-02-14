import DisciplineCards from "../../components/DisciplineCards";

const ObligatorySubjectsPage = () => {
  return (
    <div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="bg-background-semester w-full max-w-[1390px] min-h-[935px]">
          <h1 className="text-center md:text-[50px] font-bold text-color-font-pink pt-[30px] pb-[25px]">Obrigatórias</h1>
          <DisciplineCards />
        </div>
      </div>
    </div>
  );
};

export default ObligatorySubjectsPage;
