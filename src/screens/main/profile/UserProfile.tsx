import React from 'react'
import { useSelectorApp } from '../../../store/redux/store';
import BabysitterProfile from './BabysitterProfile';
import ParentProfile from './ParentProfile';


const UserProfile = () => {
  const isBabysitter = useSelectorApp((state) => state.userSlice.isBabysitter);

  return <>
    { isBabysitter &&
      <BabysitterProfile/>
    }
    { !isBabysitter &&
      <ParentProfile/>
    }
  </>
}

export default UserProfile;