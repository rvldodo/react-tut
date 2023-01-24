import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'

export default function WaifuGenerator() {

    const {data, isLoading, refetch} = useQuery(['waifu'], () => {
        return Axios.get('https://api.waifu.pics/sfw/waifu').then(res => res.data)
    })

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={data.url} alt={data.url} style={{ height: "300px" }}/>
            <button onClick={refetch}>Generator Waifu</button>
        </div>
    )
}