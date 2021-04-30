import { useState } from "react"

export default function useAuthtoken() {
    const getAuthtoken = () => {
        const tokenString = sessionStorage.getItem('authtoken')
        const userToken = JSON.parse(tokenString)
        return userToken
    }

    const [authtoken, setAuthtoken] = useState(getAuthtoken())

    const saveAuthtoken = userToken => {
        sessionStorage.setItem('authtoken', JSON.stringify(userToken))
        setAuthtoken(userToken)
    }

    return {
        setAuthtoken: saveAuthtoken,
        authtoken
    }
}
