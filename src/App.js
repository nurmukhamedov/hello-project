// import Lesson52 from "./components/lesson-52/Lesson52";
import { useTranslation } from "react-i18next";
import ToDo from "./components/to-do/ToDo";

function App() {

  const { t, i18n } = useTranslation();

  const handleChangeLaguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      {/* <Lesson52 /> */}
      <button onClick={() => handleChangeLaguage('eng')}>Eng</button>
      <button onClick={() => handleChangeLaguage('ru')}>Ru</button>
      <h1>
        {
          t("text")
        }

        <ToDo />
      </h1>
    </div>
  );
}

export default App;
