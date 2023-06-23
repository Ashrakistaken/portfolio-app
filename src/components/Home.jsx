import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-black'>


            {/*Container*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white'>
                <p className='text-orange-600 font-semibold'>Merhaba, Benim adım</p>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">Emirhan Sarac</h1>
                <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>Ben Junior Front-End Web Developer'ım.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dicta eos fugit nulla enim iure quasi laboriosam. Totam, alias? Distinctio, explicabo debitis. Officiis voluptates consequuntur ea eveniet quae. Dolores, accusantium? Corporis at sapiente deleniti amet!</p>
                <div>
                    <button className='group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>Projelerimi Görüntüle
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>

                </div>

            </div>
        </div >
    )
}

export default Home