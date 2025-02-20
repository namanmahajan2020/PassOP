import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
            </div>
            <div className="mycontainer">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
                <div class="flex flex-col p-4 text-black gap-8 items-center">
                    <input className='rounded-full bg-white border-green-500 w-full border-1 p-4 py-1' type="text" name="" id="" />
                    <div className="flex w-full gap-8">
                        <input placeholder='Enter website URL' className='rounded-full bg-white border-green-500 w-full border-1 p-4 py-1' type="text" name="" id="" />
                        <input className='rounded-full bg-white border-green-500 w-full border-1 p-4 py-1' type="text" name="" id="" />
                    </div>
                    <button className='flex justify-center items-center bg-green-400 rounded-full px-8 py-2 w-fit hover:bg-green-300 gap-2 border-green-900 border'>
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover">
                    </lord-icon>
                    Add Password</button>
                </div>
            </div>
        </>
    )
}

export default Manager
