import React, {useEffect} from 'react';
import './App.css';
import {fetchUsers} from './bll/reducers/userReducers';
import {useAppDispatch, useAppSelector} from './customHooks/hooks';

function App() {
    const users = useAppSelector(state => state.users.data)
    const isLoading = useAppSelector(state => state.users.isLoading)
    const error = useAppSelector(state => state.users.error)
    const pageSize = useAppSelector(state => state.users.pageSize)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers(pageSize))
    }, [])


    return (
        <div>
            {users.map(el=> <div>
                {el.login}
            </div>)}
        </div>
    );
}

export default App;
