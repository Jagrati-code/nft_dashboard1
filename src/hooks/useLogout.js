import { useAuthContext } from "./useAuthContext";
import { useHistory } from 'react-router-dom';


export const useLogout = () => {

    const {dispatch} = useAuthContext();
    const history = useHistory();

    const logout = () => {

        //remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({type: 'LOGOUT'});
        history.push('/auth');


    }

    return {logout};

}