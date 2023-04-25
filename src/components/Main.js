import React from 'react'
import ME from '../images/me2.png'
import Resume from '../assets/resume.pdf'

const Main = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800"> 
        <div className="flex flex-row">
            <div className='flex flex-col items-center justify-center w-[40%]'>
                <h1 className='pt-20 text-4xl text-white'>Stavan Patel</h1>
                    <img src={ME} alt="me" className=" w-80 h-80 mt-10 border-solid border-2 rounded-full"/>
                    <a href={Resume} target="_blank" class="inline-block px-5 py-2 mx-auto mt-6 text-white bg-gray-800 rounded-md border-solid border-2 hover:bg-cyan-500 hover:border-black hover:text-black md:mx-0">Resume</a>
                <div className='grid gap-8 items-start justify-center'>
                    <button className='space-x-9 mt-8 px-5 py-2 w-3bg-transparent rounded-lg leading-none flex justify-center items-center'>
                        <span>
                            <a href="https://www.linkedin.com/in/stavan-patel-b974131ba/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='fill-white hover:fill-sky-500'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </span>
                        <span>
                            <a href="https://github.com/stavan30" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='fill-white hover:fill-black'><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        </span>
                    </button>
                </div>
                <a href="mailto:stavan301298@gmail.com" className='text-white mt-4 hover:text-orange-300'>Email: stavan301298@gmail.com</a>    
            </div>
            <div className='flex flex-col w-[60%]'>
                <div className='flex flex-col items-center justify-center mr-5'>
                    <h1 className='text-cyan-500 text-2xl pt-7'>About Me</h1>
                    <p className='text-white text-center pt-6'>Welcome to my page. I am Stavan Patel. I am currently pursuing my Masters at San Jose State University majoring in Software Engineering. I am actively looking for internship opportunities for SWE/SDE roles.

I am open to work in hybrid as well as in-person setting. My goal is to work in a work culture and environment where I can freely apply the knowledge learned for the best interest of the company and gain experience thereby enhancing my knowledge.</p>
                </div>
                <h1 className='flex flex-col items-center justify-center pt-5 pr-5 text-cyan-400 text-2xl'>Education</h1>
                <div className='grid grid-cols-2 gap-5 mt-6'>
                    <div className='text-white border border-sky-500 rounded-md h-auto p-3'>
                        <h2 className='text-center text-xl pb-1 underline'>Masters</h2>
                        <ul className='list-disc list-inside'>
                            <li>San Jose State University</li>
                            <li>Master of Science in Software Engineering</li>
                            <li>2022 - 2024</li>
                            <li>GPA : 3.9</li>
                        </ul>
                    </div>
                    <div className='text-white border border-sky-500 rounded-md h-auto p-3'>
                        <h2 className='text-center text-xl pb-1 underline'>Bachelors</h2>
                        <ul className='list-disc list-inside'>
                            <li>Sacramento State University</li>
                            <li>Bachelors of Science in Computer Science</li>
                            <li>2018 - 2022</li>
                            <li>GPA : 3.3</li>
                        </ul>
                    </div>
                </div>

                <h1 className='flex flex-col items-center justify-center pt-8 pr-5 text-cyan-400 text-2xl'>Skills</h1>
                <div className='flex items-start justify-start text-lg pt-5'>
                    <ul className='list-disc list-inside'>
                        <li className='text-white'>Programming Languages - Python,  Java,  JavaScript,  HTML,  CSS, C, SQL</li>
                        <li className='text-white'>Frameworks/Tools - ReactJS, Django, AWS, Tableau, Git, Docker, FastAPI, Postman, Apache Kafka, Git</li>
                        <li className='text-white'>IDEs - Visual Studio Code, WebStorm, Eclipse, PyCharm, Jupyter Notebook</li>
                        <li className='text-white'>Operating Systems - Windows, Linux, Mac OS</li>
                    </ul>                                  
                </div>
                <h1 className='flex items-center justify-center text-lg pt-10 text-cyan-400'>Thank You!!!</h1> 
                <h3 className='flex items-center justify-center text-sm pt-2 text-cyan-700'>Information about projects in Resume</h3>  
            </div>        
        </div>
    </div>
  )
}

export default Main