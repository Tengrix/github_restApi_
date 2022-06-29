import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getUsers} from '../../dal/api';
import {userReducerType} from '../../Types/usersType';

export const initialState:userReducerType = {
    isLoading: false,
    data: [],
    error: '',
    pageSize:10,
}
export const slice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.error = ''
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string
            })
    }
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (perPage: number, thunkAPI) => {
    try {
        const res = await getUsers(perPage)
        return res.data
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }

})
export const userReducer = slice.reducer