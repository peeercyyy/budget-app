import "./MainPage.css";
import { Chart } from "./Components/Chart/Chart";
import UserBlock from "./Components/UserBlock/UserBlock";
import { InfoBlock } from './Components/InfoBlock';

const MainPage = () => {
  return (
    <div className="main_page">
      <InfoBlock />
      <UserBlock
        name="Тест тестович"
        imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrF38eUbnQeSEjiEJmUNJPvCZ1iHInjDfk10-xtKdAA&s"
        imageAlt="user picture"
      />
      <Chart />
    </div>
  );
};

export default MainPage;
