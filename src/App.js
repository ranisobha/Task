
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectUser } from "./Components/userSlice";

import Logout from "./Logout";
export default function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}
