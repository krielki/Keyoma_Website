/* From React Router v6 Youtube Clip
import React from "react";
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1000)
    }, [])
    return <h1>NotFound</h1>
}

export default NotFound;
*/