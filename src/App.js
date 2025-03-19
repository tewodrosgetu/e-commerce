import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shoping from "./features/Menu/Shoping";
import Men from "./features/Menu/Men";
import Women from "./features/Menu/Women";
import Kid from "./features/Menu/Kid";
import Login from "./features/ui/Login";
import SignUp from "./features/ui/SignUp";
import ChoosenItem from "./features/Menu/ChoosenItem";
import Cart from "./features/Menu/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shoping />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/men/:id",
    element: <ChoosenItem />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/women/:id",
    element: <ChoosenItem />,
  },
  {
    path: "/kid",
    element: <Kid />,
  },
  {
    path: "/kid/:id",
    element: <ChoosenItem />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Shoping />} />
//           <Route path="/men" element={<Men />}>
//             <Route path=":id" element={<ChoosenItem />} />
//           </Route>
//           <Route path="/women" element={<Women />} />
//           <Route path="/kid" element={<Kid />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
