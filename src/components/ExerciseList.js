import { NavLink } from "react-router-dom";
import Button from './Button'
import { useFetchExercisesQuery } from "../store";
import Skeleton from './Skeleton';
import ExerciseListItem from "./ExerciseListItem";

function ExerciseList({ user }) {
    const { data, error, isFetching } = useFetchExercisesQuery(user);
    let content;
    if (isFetching) {
        content = <div><Skeleton times={3} className='h-10 w-full' /></div>
    } else if (error) {
        content = <div>Error Fetching Exercises</div>
    }
    else {
        content = data.map((exercise) => {
            return <ExerciseListItem key={exercise.id} exercise={exercise} />
        })
    }
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold'> Exercises by {user.name}</h3>
                <NavLink to={`/create-exercise/${user.id}`} >
                    <Button>
                        + Create exercise
                    </Button>
                </NavLink>
            </div>
            <div>{content}</div>
        </div>
    )
}

export default ExerciseList