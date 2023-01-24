import { useContext } from "react"
import { AppContext } from "../App"
import ChangeProfile from "../components/ChangeProfile"

export default function Profile() {
    const {username} = useContext(AppContext)

    return (
        <div>
            <h1>This is Profile Page with user: {username}</h1>
            <ChangeProfile />
        </div>
    )
}