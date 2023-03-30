import "./App.css";
import HomePage from "./pages/HomePage";
import TodayPage from "./pages/TodayPage";
import TodoPage from "./pages/TodoPage"
import CalendarPage from './pages/CalendarPage'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route exect path="/" element={<HomePage />} />
      <Route exect path="/todo" element={<TodoPage />} />
      <Route exect path="/today" element={<TodayPage />} />
      <Route exect path="/calendar" element={<CalendarPage />} />
    </Routes>
  );
}

export default App;

