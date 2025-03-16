import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shoping from "./features/Menu/Shoping";
import Men from "./features/Menu/Men";
import Women from "./features/Menu/Women";
import Kid from "./features/Menu/Kid";
import Login from "./features/ui/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Shoping />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kid" element={<Kid />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
