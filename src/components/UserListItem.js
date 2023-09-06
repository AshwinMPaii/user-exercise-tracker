import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExerciseList from './ExerciseList';
import { useRemoveUserMutation } from "../store";

function UserListItem({ user }) {
    const [removeUser, results] = useRemoveUserMutation();

    const handleRemoveUser = async () => {
        try {
            // Call the removeUser mutation with the user's id
            await removeUser(user.id); // Pass the user's id here
            console.log(`User with ID ${user.id} deleted successfully`);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const header = (
        <>
            <Button className='mr-3' loading={results.isLoading} onClick={handleRemoveUser}>
                <GoTrash />
            </Button>
            <span className='text-blue-600 font-semibold'>{user.name}</span>
        </>
    );

    return (
        <div>
            <ExpandablePanel key={user.id} header={header}>
                <ExerciseList user={user} />
            </ExpandablePanel>
        </div>
    );
}

export default UserListItem;
