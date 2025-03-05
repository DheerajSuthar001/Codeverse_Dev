import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section className='w-full'>
        <div className='w-8/12 mx-auto'>
            <div className='flex justify-between py-10'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center w-[20%] text-center'>
                                <h1 className='text-3xl max-sm:text-2xl font-bold text-richblack-50 mb-5'>
                                    {data.count}
                                </h1>
                                <h2 className=' text-richblack-200 max-sm:text-sm'>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
