import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import * as api from '../../api/api';

const Home = () => {

    const fetchUsers = async () => {
        const res = await axios.get(' http://localhost:6000/users'); 
        return res.data;
    }

    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    })

    console.log(usersQuery.data);


    // const {data, isLoading, isError, error} = useQuery({
    //     queryKey:['users'],
    //     queryFn: api.fetchUsers
    // })

    // console.log(data);

    return (
        <div className="px-12 md:container md:mx-auto md:px-0">
    
        </div>
    )
}

export default Home;