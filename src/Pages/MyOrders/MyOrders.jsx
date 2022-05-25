import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MyOrder from "./MyOrder";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyOrders = () => {
  const [user] = useAuthState(auth);
  
  const { isLoading, error, data:myOrders, refetch } = useQuery('order', () =>
    fetch(`http://localhost:5000/order/${user.email}`).then((res) => res.json())
  );
  // console.log(myOrders);
  if(isLoading){
    return <Loading/>
  }
  return (
    <div>
      <p className="text-[20px] text-[#2BAAA9] font-semibold py-6 pl-4">MY ORDERS</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {myOrders.map(order => <MyOrder refetch={refetch} key={ order._id} order={ order } />)}
      </div>
    </div>
  );
};

export default MyOrders;