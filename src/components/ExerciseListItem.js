// import ExpandablePanel from "./ExpandablePanel"
// import Button from "./Button";
// import { GoTrash } from "react-icons/go";
// import { useRemoveExerciseMutation } from "../store";


// function ExerciseListItem({ exercise }) {
//     const [removeExercise, results] = useRemoveExerciseMutation();

//     const handleRemoveExercise = () => {
//         removeExercise(exercise)
//     }
//     const header = <>
//         <Button className='mr-3' loading={results.isLoading} onClick={handleRemoveExercise}>
//             <GoTrash />
//         </Button>
//         <span className="text-green-500 font-bold">{exercise.name}</span>

//     </>
//     return (

//         <div>
//             <ExpandablePanel key={exercise.id} header={header}>
//                 <div className="flex flex-row justify-center ">
//                     <span>{exercise.duration}</span>
//                     <span>{exercise.duration}</span>
//                 </div>
//             </ExpandablePanel>
//         </div>

//     )
// }

// export default ExerciseListItem
import ExpandablePanel from "./ExpandablePanel"
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemoveExerciseMutation } from "../store";

function ExerciseListItem({ exercise }) {
    const [removeExercise, results] = useRemoveExerciseMutation();

    const handleRemoveExercise = () => {
        removeExercise(exercise)
    }
    const header = (
        <>
            <Button className='mr-3' loading={results.isLoading} onClick={handleRemoveExercise}>
                <GoTrash />
            </Button>
            <span className="text-green-500 font-bold">{exercise.name}</span>
        </>
    );
    return (
        <div>
            <ExpandablePanel key={exercise.id} header={header}>
                <div className="flex flex-row justify-between ">
                    <span>Duration: {exercise.duration} minutes</span>
                    <span>Date: {exercise.date}</span>
                </div>
            </ExpandablePanel>
        </div>
    );
}

export default ExerciseListItem;
