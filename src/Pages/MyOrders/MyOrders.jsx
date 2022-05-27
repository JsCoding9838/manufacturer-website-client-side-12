import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MyOrder from "./MyOrder";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyOrders = () => {
  const [user] = useAuthState(auth);
  
  const {
    isLoading,
    error,
    data: myOrders,
    refetch,
  } = useQuery("order", () =>
    fetch(
      `https://fathomless-beach-67972.herokuapp.com/order/${user.email}`
    ).then((res) => res.json())
  );
  // console.log(myOrders);
  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {myOrders.map(order => <MyOrder refetch={refetch} key={ order._id} order={ order } />)}
      </div>
    </div>
  );
};

export default MyOrders;