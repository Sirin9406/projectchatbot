import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { Lesson } from "./Lesson";
import { Lesson11 } from "./Lesson11";
import { Lesson1 } from "./Lesson1";
import { Lesson12 } from "./Lesson12";
import { Lesson13 } from "./Lesson13";
import { Lesson14 } from "./Lesson14";
import { Lesson15 } from "./Lesson15";
import { Lesson16 } from "./Lesson16";
import { Lesson17 } from "./Lesson17";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
        case "/lesson1":
          title = "";
          metaDescription = "";
          break;
        case "/lesson11":
          title = "";
          metaDescription = "";
          break;
          case "/lesson12":
            title = "";
            metaDescription = "";
            break;
          case "/lesson13":
            title = "";
            metaDescription = "";
            break;
          case "/lesson14":
            title = "";
            metaDescription = "";
            break;
          case "/lesson15":
            title = "";
            metaDescription = "";
            break;
          case "/lesson16":
            title = "";
            metaDescription = "";
            break;
          case "/lesson17":
            title = "";
            metaDescription = "";
            break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Lesson/>} />

      <Route path="/lesson1" element={<Lesson1 />} />
      <Route path="/lesson11" element={<Lesson11 />} />
      <Route path="/lesson12" element={<Lesson12 />} />
      <Route path="/lesson13" element={<Lesson13 />} />

      <Route path="/lesson14" element={<Lesson14 />} />

      <Route path="/lesson15" element={<Lesson15 />} />

      <Route path="/lesson16" element={<Lesson16 />} />

      <Route path="/lesson17" element={<Lesson17 />} />
    </Routes>
  );
}
export default App;
