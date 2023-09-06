import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query({
                providesTags: ['Users'],
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET',
                    }
                }
            }),
            addUser: builder.mutation({
                invalidatesTags: ['Users'],
                query: (user) => {
                    return {
                        url: '/users',
                        method: "POST",
                        body: {
                            name: user.name,
                            phone: user.phone
                        }
                    }
                }
            }),
            removeUser: builder.mutation({
                invalidatesTags: ['Users'],
                query: (id) => {
                    return {
                        url: `/users/${id}`,
                        method: "DELETE"
                    }
                }
            })
        }
    }
})

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } = usersApi;
export { usersApi };