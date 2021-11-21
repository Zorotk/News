import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    auth: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    auth: false,
}

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        signIn(state, action) {
            state.auth = action.payload;
        },
    },
    // extraReducers: {
    //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //         state.isLoading = false;
    //         state.error = ''
    //         state.users = action.payload;
    //     },
    //     [fetchUsers.pending.type]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchUsers.rejected.type]: (state,  action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     },
    // }
})

export default userSlice.reducer;
export const {signIn} = userSlice.actions
