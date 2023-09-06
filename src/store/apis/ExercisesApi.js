import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exercisesApi = createApi({
    reducerPath: 'exercises',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
    }),
    endpoints(builder) {
        return {
            fetchExercises: builder.query({
                providesTags: (result, error, user) => {
                    const tags = result.map(exercise => {
                        return {
                            type: 'Exercise', id: exercise.id
                        }
                    })
                    tags.push({ type: 'UsersExercise', id: user.id })
                    return tags;
                },
                query: (user) => {
                    return {
                        url: '/exercises',
                        params: {
                            userId: user.id
                        },
                        method: "GET"
                    }

                }
            }),
            addExercise: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'UsersExercise', id: user.id }]
                },
                query: ({ userId, exerciseData }) => {
                    return {
                        url: '/exercises',
                        method: "POST",
                        body: {
                            userId: userId,
                            name: exerciseData.name,
                            duration: exerciseData.duration,
                            date: exerciseData.date
                        }
                    }
                }
            }),
            removeExercise: builder.mutation({
                invalidatesTags: (result, error, exercise) => {
                    return [{ type: 'Exercise', id: exercise.id }]
                },
                query: (exercise) => {
                    return {
                        url: `/exercises/${exercise.id}`,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useFetchExercisesQuery, useAddExerciseMutation, useRemoveExerciseMutation } = exercisesApi;
export { exercisesApi };