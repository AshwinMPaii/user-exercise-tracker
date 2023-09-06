import { NavLink } from "react-router-dom";
import Button from './Button';
import { useFetchUsersQuery } from "../store";
import UserListItem from './UserListItem';
import Skeleton from "./Skeleton";

function UserList() {
    const { data, error, isFetching } = useFetchUsersQuery();

    let content;
    if (isFetching) {
        content = <div><Skeleton className='h-10 w-full' /></div>
    } else if (error) {
        content = <div>Error Fetching Users</div>
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id} user={user} />
        })
    }
    return (
        <div>

            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold'>List of Users</h3>
                <NavLink to='/create-user'>
                    <Button className='text-green-500'>
                        + Create User
                    </Button>
                </NavLink>
            </div>
            <div>{content}</div>
        </div>
    )
}

export default UserList