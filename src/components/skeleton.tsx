import React from 'react'

function Skeleton() {
    return (
        <div>

            <SkeletonComponent/>
            <SkeletonComponent/>
            <SkeletonComponent/>
            <SkeletonComponent/>
            <SkeletonComponent/>


           
            


        </div>
    )
}

const SkeletonComponent =()=>{
    return(
        <div role="status" className="max-w-sm animate-pulse mb-8">
        <div className='flex items-center  gap-2'>
        <div className="h-8 w-8 bg-gray-200 rounded-full dark:bg-gray-800  mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-800 w-48 mb-4"></div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-800 w-[650px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-800 w-[550px] mb-2.5"></div>
        {/* <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-800 w-[500px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-800 w-[560px] mb-2.5"></div> */}
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-800 w-[600px]"></div>
        <span className="sr-only">Loading...</span>
    </div>
    )
}


export default Skeleton
