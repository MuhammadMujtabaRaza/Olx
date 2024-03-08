import React, { Fragment, useContext } from 'react';
import Header from '../Components/Header/Header';
import Create from '../Components/Create/Create';
import { AuthContext } from '../store/Context'
import { useHistory } from 'react-router';

const CreatePage = () => {
  const{user}=useContext(AuthContext)
  const history=useHistory()
  return (
    <Fragment>
      <Header />
{user?
      <Create/>
      :history.push('/login')}
    </Fragment>

  );
};

export default CreatePage;
