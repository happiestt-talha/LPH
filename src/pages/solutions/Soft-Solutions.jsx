import React from 'react'
import { useParams } from 'react-router-dom';

const SoftSolutions = () => {
    const { slug } = useParams();
    return (
        <>
            <div className="h-screen w-screen bg-green-400 flex justify-center items-center">
                Soft Solutions: {slug}
            </div>
        </>
    )
}

export default SoftSolutions