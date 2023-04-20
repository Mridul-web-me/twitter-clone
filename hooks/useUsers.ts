import useSWR from 'swr'

import fetcher from '@/libs/fetcher'

const userUsers = () =>{
    const {data, error, isLoading, mutate} = useSWR('/api/users', fetcher);

    return{
        data,
        error,
        isLoading,
        mutate
    }
}

export default userUsers