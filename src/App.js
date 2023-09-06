import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import CreateExercise from './components/CreateExercise';
//import ExerciseList from './components/ExerciseList';

function App() {
    return (
        <div >
            <Routes>
                <Route path='/' element={<UserList />}></Route>
                <Route path='create-user' element={<CreateUser />}> </Route>
                {/* <Route path='exercise-list' element={<ExerciseList />} ></Route> */}
                <Route path='create-exercise/:userId' element={<CreateExercise />}></Route>
            </Routes>
        </div>
    )
}

export default App