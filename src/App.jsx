import Home from '../src/Components/Pages/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Course from '../src/Components/Pages/Course/Course';
import Login from '../src/Components/Pages/Auth/Login';
import { useAuthContext } from './Hooks/useAuthContext';
import Quiz from './Components/Pages/Quiz/Quiz';
import Register from './Components/Pages/Auth/Register';
import Attestation from './Components/Pages/Attestation/Attestasion';
import QuizError from './Components/Pages/Quiz/QuizError';
import Course2 from './Components/Pages/Course/CoursePartTwo';

function App() {
  const { user } = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={user ? <Course /> : <Navigate to="/login" />}
        />
        <Route
          path="/course2"
          element={user ? <Course2 /> : <Navigate to="/login" />}
        />
        <Route
          path="/quiz"
          element={user ? <Quiz /> : <Navigate to="/login" />}
        />
        <Route
          path="/attestation"
          element={user ? <Attestation /> : <Navigate to="/login" />}
        />
        <Route path="/quizError" element={<QuizError />} />
      </Routes>
    </div>
  );
}

export default App;
