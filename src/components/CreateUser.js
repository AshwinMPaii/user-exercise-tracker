import { useState } from "react";
import Button from "./Button";
import { useAddUserMutation } from "../store";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [addUser, results] = useAddUserMutation();
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(formData);
            navigate('/');
        } catch (error) {
            console.error('Error adding user:', error);
        }

    }
    return (
        <div className="p-10 flex flex-col justify-between items-center">
            <h4 className="mb-3">Add User</h4>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center">
                    <div className="mb-0 mr-10">
                        <label className="w-70">Name</label>
                        <input className="w-full  border-2 border-blue-500 rounded focus:border-none "
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-0 mr-10">
                        <label className="w-70">Phone No:</label>
                        <input className="w-full border-2 border-blue-500 rounded focus:border-none"
                            name='phone'
                            type="phone"
                            value={formData.phone}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <Button className="outline secondary rounded my-3" loading={results.isLoading} type="submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateUser;