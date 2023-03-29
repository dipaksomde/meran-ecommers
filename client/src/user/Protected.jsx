import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Protected = ({ compo }) => {
    const { info } = useSelector(state => state.user)
    // const navigate = useNavigate()
    return info ? compo : <Navigate to="/login" />
}

export default Protected