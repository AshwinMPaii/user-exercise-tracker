import React, { useState } from 'react';
import { useAddExerciseMutation } from '../store';
import { useNavigate, useParams } from 'react-router-dom';
import Button from './Button';

function CreateExercise() {
    const { userId } = useParams();
    console.log(userId);
    const [addExercise, results] = useAddExerciseMutation();
    const [exerciseData, setExerciseData] = useState({
        name: '',
        duration: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExerciseData({ ...exerciseData, [name]: value });
    };
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addExercise({ userId, exerciseData });
            navigate('/')
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Create Exercise</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-600">Exercise Name</label>
                    <input
                        type="text"
                        name="name"
                        value={exerciseData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter exercise name"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Duration (minutes)</label>
                    <input
                        type="number"
                        name="duration"
                        value={exerciseData.duration}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                        placeholder="Enter exercise duration"
                    />
                </div>
                <div>
                    <label className="block text-gray-600">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={exerciseData.date}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div>
                    <Button
                        loading={results.isLoading}
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default CreateExercise;
