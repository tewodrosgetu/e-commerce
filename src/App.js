import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shoping from "./features/Menu/Shoping";
import Men from "./features/Menu/Men";
import Women from "./features/Menu/Women";
import Kid from "./features/Menu/Kid";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Shoping />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kid" element={<Kid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
