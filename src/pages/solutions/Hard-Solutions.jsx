import React from 'react'
import { useParams } from 'react-router-dom';

const HardSolutions = () => {
    const { slug } = useParams();
    return (
        <>
            <div className="h-screen w-screen bg-green-400 flex justify-center items-center">
                HardSolutions:
                {slug}
            </div>
        </>
    )
}

export default HardSolutions