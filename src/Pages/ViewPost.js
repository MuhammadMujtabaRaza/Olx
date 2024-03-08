import React, { useContext } from 'react'

import Header from '../Components/Header/Header'
import View from '../Components/View/View'
import { AuthContext } from '../store/Context'
import { useHistory } from 'react-router';


function ViewPost(props) {
    const {user} = useContext(AuthContext);
    const history = useHistory();

    return (
        <div>
            <Header />
            { user ? 
            <View/> : history.push('/login')}
        </div>
    )
}

export default ViewPost
