import React, { useContext } from 'react';
import { UserCont } from '../UserContext';

const Userprofile = () => {
  const { name } = useContext(UserCont);

  return (
    <div>
      Hi there: {name.name}
    </div>
  );
};

export default Userprofile;
