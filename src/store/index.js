import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { usersApi } from './apis/UsersApi';
import { exercisesApi } from './apis/ExercisesApi';

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [exercisesApi.reducerPath]: exercisesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(exercisesApi.middleware)
    }
})
setupListeners(store.dispatch);

export { store };
export { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } from './apis/UsersApi';
export { useFetchExercisesQuery, useAddExerciseMutation, useRemoveExerciseMutation } from './apis/ExercisesApi';