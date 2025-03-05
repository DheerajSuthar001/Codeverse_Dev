import React from 'react'
import HighlightText from "../components/core/homePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Quote from '../components/core/AboutPage/Quote'
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/Stats'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from '../components/core/common/Footer'

const About = () => {
    return (
        <div className='w-full flex justify-center text-white'>
            {/* section 1 */}
            <div className='flex flex-col items-center'>
                <div className='w-full bg-richblack-700 flex flex-col items-center'>
                    <section className='w-8/12 max-sm:w-full max-md:w-full  max-sm:px-4  max-md:px-4  flex flex-col gap-10 items-center mt-16 relative '>
                        <div className=' text-richblack-200'>About us</div>
                        <div className='flex flex-col gap-10 '>
                            <header className='text-center text-3xl '>
                                <p>Driving Innovation in Online Education for a </p>
                                <HighlightText text={"Brighter Future"} />
                            </header>
                            <p className=' text-richblack-200 text-center'>Codeverse is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>

                            <div className='flex gap-3 mx-auto py-10 max-sm:flex-col max-md:flex-col max-lg:w-full max-md:items-center max-lg:justify-center  '>
                                <img src={BannerImage1} className=' md:w-[30%] max-md:w-[70%]' />
                                <img src={BannerImage2} className=' md:w-[30%] max-md:w-[70%]' />
                                <img src={BannerImage3} className=' md:w-[30%] max-md:w-[70%]' />
                            </div>
                        </div>
                    </section>
                </div>


                {/* section 2 */}

                <div className='border-b-[1px] border-richblack-200'>
                <section className='w-8/12 mx-auto '>
                    
                        <Quote />
                    
                </section>
                </div>


                {/* section 3 */}

                <section>
                    <div className='flex flex-col items-center gap-10 py-10'>
                        {/* foudning story wala div */}
                        <div className=' w-8/12 flex max-sm:flex-col max-md:flex-col max-lg:flex-col max-sm:items-center max-md:items-center max-lg:items-center  gap-10 '>
                            {/* founding story left box */}
                            <div className='flex-1 flex flex-col gap-5  max-lg:items-center'>
                                <h1 className=' text-transparent bg-clip-text bg-gradient-to-br from-pink-700 to-pink-200 text-3xl font-bold'>Our Founding Story</h1>

                                <p className=' text-richblack-200 max-lg:text-center'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                                <p className=' text-richblack-200 max-lg:text-center'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                            </div>
                            {/* foudning story right box */}
                            <div>
                                <img src={FoundingStory} />
                            </div>
                        </div>

                        {/* vision and mission wala parent div */}
                        <div className='w-8/12 flex gap-10 py-10 text-justify max-sm:flex-col'>
                            {/* left box */}
                            <div className='flex-1 '>
                                <h1 className='text-3xl font-bold mb-10 text-yellow-400'>Our Vision</h1>
                                <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                            </div>

                            {/* right box */}
                            <div className='flex-1'>
                                <h1 className='text-3xl font-bold mb-10 text-blue-100'>
                                    Our Mission
                                </h1>
                                <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 4 */}
                <StatsComponent />

                {/* section 5 */}
                <section className='w-full'>
                <div className='w-full flex flex-col items-center justify-between gap-5 mb-[140px]'>
                    <LearningGrid />
                    <ContactFormSection />
                </div>
                </section>

                <section>
                    <div>
                        Reviews from other learners
                        {/* <ReviewSlider /> */}
                    </div>
                </section>

                <Footer />

            </div>
        </div>
    )
}

export default About
