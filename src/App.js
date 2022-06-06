import { Routes, Route } from "react-router-dom";
import CompleteStatments from "./Pages/ClientPage/CompleteStatments";
import DisplayStatments from "./Pages/ClientPage/DisplayStatments";
import ControlScroll from "./Pages/AdminPage/ControlScroll";
import ListScrollStatment from "./Pages/AdminPage/ListScrollStatment";
import NotFoundPage from "./Pages/NotFoundPage";
import Container from "./Components/Container";
import Loading from "./Components/Loading/loading";
import { Suspense} from "react";
import "./App.css"

function App() {
  return (
      <Container>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/:id" element={<CompleteStatments />} />
            <Route path="/:id/view" element={<DisplayStatments />} />
            <Route path="/:id/list" element={<ListScrollStatment />} />
            <Route path="/" element={<ControlScroll />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Container>
  );
}

export default App;
