import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const MyProfile = () => {
  const [user] = useAuthState(auth);
  const {photoURL} = user;
  console.log(user);
    
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <div className="avatar online">
          <div className="w-28 rounded-full mt-6 bg-gray-300 border-2xl p-2">
            {/* <img className="rounded-full" src="https://api.lorem.space/image/face?hash=28212" alt='' /> */}
            <img className="rounded-full" src={
            photoURL ? photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
          } alt='' />
          </div> 
        </div>
        <h1 className=' text-4xl text-secondary font-bold pt-2'>{user.displayName}</h1>
        <h1 className=' text-xl text-secondary font-bold pt-2'>{user.email}</h1>
      </div>
      <div className='flex  justify-center mt-4'>
        <div className="card  bg-base-100 shadow">
          <div className="card-body ">
            <div className='flex items-center'>
              <p className='text-xl font-bold'>Add Profile Name</p>
              <div className="btn btn-outline mx-2">Upload</div>
            </div>
            <form className='flex items-center'>
              <p className='text-xl font-bold'>Add Profile Picture</p>
              <input type='file' name='profile'  className='mx-2'></input>
              <input type="submit" value="Upload" className='btn btn-outline' />
            </form>
            <div className='flex items-center'>
              <p className='text-xl font-bold'>Add Linkdin</p>
              <div className="btn btn-outline mx-2">Upload</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default MyProfile;