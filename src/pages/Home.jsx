import { useContext } from "react"
import { AppContext } from "../App"
import { useCount } from "../hooks/useCount"

export default function Home() {
    const {username} = useContext(AppContext)
    const [count, increase,decrease, reset] = useCount()

    return (
        <div>
            <h1>This is {username} Home Page</h1>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={reset}>Restart</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}