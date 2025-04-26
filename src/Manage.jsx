import React from 'react'
import { asstes } from './asstes2/asstes'
const Manage = () => {
  return (
    < >
      <nav className="container p-7 mx-auto px-7">
        <div className="flex justify-between ">
            <div>
                <img src={asstes.logo} alt="" />
            </div>
            <div className="md:flex space-x-5 hidden ">
                <a href="" className="hover:text-red-400 ">pricing</a>
                <a href="" className="hover:text-red-400 "> product</a>
                <a href="" className="hover:text-red-400 ">About us</a>
                <a href="" className="hover:text-red-400 "> carrers</a>
                <a href="" className="hover:text-red-400 ">Community</a>
                
            </div>
            <div>
                <a className="text-white p-3 bg-red-600 rounded-full hover:bg-red-700 cursor-pointer hidden md:block">
                    Get started
                </a>
            </div>
        </div>
      </nav>
      <section className="container mx-auto ">
        <div className="md:flex-row flex flex-col-reverse mt-10  ">
            <div className="md:w-1/2 space-y-5 flex flex-col  mt-0 md:mt-9 px-15 " >
                <h1 className="md:text-5xl font-bold text-center md:text-left max-w-md mx-auto md:mx-0 text-3xl"> Bring everyone together to build better products.</h1>
                <h2 className="text-[#c4c7c5] max-w-sm md:text-left text-center ml-3 md:ml-0 mx-auto ">manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in veiw</h2>
                <a href="" className=" text-white bg-red-500 p-3 px-7 rounded-4xl text-center  md:inline-block self-start mx-auto md:mx-0  hover:bg-red-600">
                    Get started
                </a>
            </div>
            <div id ="secound-hero-section ">
                <img src={asstes.illustration} alt="image rhat will be shown in the " />
            </div>
        </div>
       
      </section>
     <section>
        <div className="container mt-6 mx-auto  space-y-6 flex flex-col md:flex-row md:justify-center px-8">
            <div className="flex flex-col space-y-5 md:w-1/2 px-10 " id="this-for-left-section">
                <h2 className="text-4xl font-bold max-w-md">What's diffrent about manage ? </h2>
                <p className="text-[#c4c7c5] max-w-sm">Manage provides all the functionality your team needs , without the 
                    complexity our software tailord mode for modern digital roduct teams 
                </p>
            </div>
            <div className="flex flex-col  md:w-1/2 space-y-7 justify-center  ">
                <div className="flex flex-col space-y-3  md:flex-row ">
                    {/* this is item one window here we cereated item 1  */}
                    <div className="rounded-l-full bg-red-50 md:bg-transparent ml-5">
                        <div className="flex space-x-2 items-center">
                            <div className="rounded-full p-1 px-4  bg-red-400 ">
                                01
                            </div>
                            <div className="font-bold md:mb-4 text-base md:hidden">
                                Track-company wide progress
                            </div>
                        </div>
                    </div>
                    <div>
                    <h3 className="font-bold  hidden md:block md:mb-4 text-lg">
                        Track-company wide progress
                    </h3>
                    <p className="px-15 md:px-0 md:pr-25 text-[#c4c7c5]">
                        see how your day to day task fits into the wider vision . go from tracking 
                        progress at the milestone level all the way done to the smallest of detail 
                        Never lose sight of bigger picture again
                    </p>
                   </div> 
                </div>
                   {/** here we goona create item number 2  */}
                <div className="flex flex-col md:flex-row">
                    <div className="rounded-l-full ml-5 bg-red-50 md:bg-transparent">
                        <div className="flex items-center  space-x-2">
                            <div className="rounded-full px-4 p-1 bg-red-400">
                                02
                            </div>
                            <div className="font-bold text-base md:hidden md:mb-4">
                                Adavanced built in reports
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="hidden md:block text-lg md:mb-4 font-bold"> Adavanced built in reports</h2>
                        <p className="text-[#c4c7c5] px-15 md:px-0 md:pr-25 ">
                            Set internal delivery estimates and track progress towards company goals .Our coutomisable 
                            dashboard helps you build out of the reports you need to keep key stakeholders informed 
                        </p>
                    </div>

                </div>
                {/** here we will create 3 serial number of the list  */}
                <div className="flex flex-col sapace-y-3 md:flex-row">
                    <div className="rounded-l-full bg-red-50 md:bg-transparent ml-5">
                        <div className="flex items-center space-x-5 ">
                            <div className="rounded-full bg-red-400 px-4 p-1 ">
                                03
                            </div>
                            <div className="font-bold text-base md:hidden">
                                Everything you need  in one place 
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg md:mb-4 hidden md:block">
                        Everything you need  in one place 
                        </h2>
                        <p className="text-[#c4c7c5] px-15 md:px-0 md:pr-25 ">
                            Stop jumping from one service to other to communicate store files, track task
                            and share documents.Manage offer an all-in-one team productivity solutions
                        </p>
                    </div>
                </div>
                

            </div>
        </div>
     </section>
     {/** testimonials  */}
     <section>
        {/** now we have heading and testimonials of the user  */}
        <div className="mt-12  min-w-screen md:text-4xl  md:mt-32   mx-auto ">
            <h2 className="font-bold text-3xl text-center md:text-4xl">
                What They've said 
            </h2>
            <div className="flex flex-col md:flex-row  md:space-x-4 mt-24">
                {/** under this we are making testimonials cards */}
                <div className="p-5 mt-5 md:w-1/3 text-center flex flex-col items-center rounded-2xl bg-[#f0f4f9] ">
                    <img src={asstes.avataranish} alt="" className="w-15 -mt-9" />
                    <h3 className="">
                        Anisha Ali 
                    </h3>
                    <p className="text-[#c4c7c5] text-lg">
                        Manged has superchanged our team work flow they maintaiend visibilty on larger milestone at all times keep everone motivated
                    </p>
                </div>
                <div className="p-5 mt-5 md:w-1/3 text-center flex flex-col items-center rounded-2xl bg-[#f0f4f9] ">
                    <img src={asstes.avatarali} alt="" className="w-15 -mt-9" />
                    <h3 className="">
                        Ali bravo
                    </h3>
                    <p className="text-[#c4c7c5] text-lg">
                        "we have been able to cancel so many subscriptions since using manage . There is no moer cross-channel confusion and everyone is much more focused "
                    </p>
                </div>
                <div className="p-5 mt-5 md:w-1/3 text-center flex flex-col items-center rounded-2xl bg-[#f0f4f9] ">
                    <img src={asstes.avatarrichard} alt="" className="w-15 -mt-9" />
                    <h3 className="">
                        Richard watts
                    </h3>
                    <p className="text-[#c4c7c5] text-lg">
                        "Manage allows us to provide structure and product keep us organised and focused i can't stop recommeding them to everyone i talk to "
                    </p>
                </div>
            </div>
        </div>
     </section>
     <section>
        <div className="mt-24 flex justify-center ">
            <a href="" className="bg-red-400 rounded-4xl text-center text-white shadow p-2 px-5 "> Get Started </a>
        </div>
     </section>
     <footer>
        <div className="flex  flex-col space-y-0 mt-10">
            <div id="this-div-for-the-first-section" className="bg-red-400 py-24 flex flex-col justify-between  text-center items-center space-y-10 md:flex-row md:px-30 md:py-12  px-10 ">
                <div>
                    <h3 className="text-white md:text-5xl px-6 md:max-w-lg text-4xl text-center  md:text-left" >
                        Simplfy how your team works today 
                    </h3>
                </div>
                <div>
                <a href="" className="bg-white font-bold  rounded-4xl text-center text-red-400 shadow p-2 px-5 "> Get Started </a>
    
                </div>
            </div>
            <div id="now-this-div-for-secound-section" className="bg-black px-20 py-48 md:py-12   ">
                <div className="flex flex-col-reverse space-y-10 md:flex-row justify-between items-center md:space-x-10  ">
                    <div className="flex flex-col-reverse justify-between items-center md:flex-col space-y-12 md:items-start">
                        <img src={asstes.logo} alt="" className="mt-10" />
                        <div className="flex space-x-4 items-center  ">
                            <img src={asstes.facebookicon} alt="" className="w-10 md:w-5 cursor-pointer " />
                            <img src={asstes.youtube} alt="" className="w-10 md:w-5  cursor-pointer" />
                            <img src={asstes.twitter} alt="" className="w-10 md:w-5  cursor-pointer"  />
                            <img src={asstes.pintrest} alt="" className="w-10 md:w-5  cursor-pointer"/>
                            <img src={asstes.instagram} alt="" className="w-10 md:w-5 cursor-pointer  "/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5 text-[#c4c7c5] ">
                        <a href="" className="hover:text-red-400">Home</a>
                        <a href="" className="hover:text-red-400">Pricing</a>
                        <a href="" className="hover:text-red-400">Products</a>
                        <a href="" className="hover:text-red-400">About us </a>
                    </div>
                    <div className="flex flex-col space-y-5 text-[#c4c7c5] items-start ">
                        <a href="" className="hover:text-red-400">carrers</a>
                        <a href="" className="hover:text-red-400">community</a>
                        <a href="" className="hover:text-red-400">Privacy policy </a>
                    </div>
                    <div className="flex space-x-3">
                        <input type="text" className="bg-white rounded-4xl p-2 placeholder:text-sm placeholder:text-[#c4c7c5] outline-none border-none px-3 text-[#c4c7c5]"placeholder="updates in your index..."/>
                        <a href="" className="text-white bg-red-500 rounded-full px-5 p-2  hover:bg-red-600">Go</a>
                    </div>
                </div>
                
            </div>
        </div>
     </footer>
    </>
  )
}

export default Manage
