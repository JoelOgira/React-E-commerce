import { useQuery } from "@tanstack/react-query";
import * as api from '../api/api';

const Home = () => {

    const {data, isLoading, isError, error} = useQuery({
        queryKey:['users'],
        queryFn: api.fetchUsers
    })

    console.log(data);

    return (
        <div className="px-12 md:container md:mx-auto md:px-0">
            {JSON.stringify(data)}
        </div>
    )
}

export default Home;