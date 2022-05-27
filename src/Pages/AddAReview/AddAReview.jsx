import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const AddAReview = () => {
    const [user] = useAuthState(auth);
    const {email,photoURL,displayName} = user;
  
    
    const onSubmit = async(event) => {
        event.preventDefault();
        const review = event.target.Review.value;
        // console.log(review);
        const { data } = await axios.post(
          "https://fathomless-beach-67972.herokuapp.com/review",
          {
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            review: review,
          }
        );
        // console.log(data);
        if(data.insertedId){
            toast.success('your review successfully')
        }
        event.target.reset();
    }
    return (
      <div>

        <div className="px-4 flex justify-center md:justify-start items-center">
        <form className="" onSubmit={onSubmit}>
          <div className="form-control">
            <img className="w-1/2 mx-auto rounded-full mb-4"
              src={photoURL ? photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
              alt=""
            />
            <input type="text" class="input input-bordered w-full  text-2xl mb-4" value={displayName} />
            <input type="text" class="input input-bordered w-ful  text-2xl mb-4" value={user?.email} />
            <textarea
              required
              maxLength="200"
              minLength="10"
              className="textarea textarea-bordered text-xl w-full  h-28 mb-4"
              name="Review"
              placeholder="Send your Review..."
            ></textarea>
            </div>
          <input
            type="submit"
            value="Add a review"
            className="btn bg-gradient-to-r  from-sky-500 to-[#2BAAA9] border-none text-white px-10 "
          />
        </form>
        </div>
      </div>
    );
};

export default AddAReview;