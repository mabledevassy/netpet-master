import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const [viewData, setViewData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3005/view1/${id}`).then(({ data }) => {
            setViewData(data)
            console.log(data)
        })
    }, [])

    return (
        <div>
            {viewData.Category}
        </div>
    )
}

export default View
