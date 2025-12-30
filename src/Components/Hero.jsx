import {  ChevronDown, Sparkles } from 'lucide-react';
import React, { useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeExamples, floatingCards } from '../data/CodeExample';
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { FaGithub, FaLinkedin,FaEnvelope ,FaFileDownload } from "react-icons/fa";
import Resume from '../../public/Eyad-Resume.pdf';
import AnimatedSection from '../animation/AnimatedPage.jsx';
export default function Hero() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })


   const [activeTab, setActiveTab] = React.useState("App.jsx");
  useEffect(()=>{
    function handleMouseMove(e){
      setMousePosition({x: e.clientX, y:e.clientY});
    }
    window.addEventListener('mousemove', handleMouseMove);

    return ()=>window.removeEventListener('mousemove', handleMouseMove);
  },[]);
  
  const currentFloatingCard = floatingCards[activeTab];
  
  return (
      <AnimatedSection id='hero' className='relative flex items-center justify-center min-h-screen overflow-hidden'>
      
      <div className='absolute inset-0 opacity-30' 
      style={{background:`radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px , rgba(59,130,246,0.40),transparent 40%)`}}></div>
     
      <div className='absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>

       <div className='absolute bottom-20 right-4 sm:right-10 w-48 sm:w-72 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>      
       
       <div className='w-full max-w-7xl mx-auto text-center relative '>
        <div className='max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative'>
          <div className='mt-4'>
            <div className='inline-flex items-center space-x-2 bg-blue-500/10 border px-3 sm:px-4 py-2 border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
              <Sparkles className='w-4 h-4 text-blue-400 '/>
              <span className='text-xs sm:text-sm text-blue-300 '>Front-End Web Developer </span>
            </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight'>
            <span className='bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2'>I'm Eyad Odeh</span>
            <span className='bg-gradient-to-b from-blue-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent block mb-1 sm:mb-2'>React Developer</span>
            <span></span>
          </h1>

          <p className=' text-md sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed'>
              Front-End React Developer focused on building fast, responsive, and scalable
              web applications. Passionate about clean UI, performance optimization, and
              delivering high-quality user experiences using modern web technologies.
          </p>

             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">

                 <div className="flex gap-6 justify-center mt-6">

                     {/* GitHub */}
                     <a
                         href="https://github.com/eyad96"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-slate-400 hover:text-white transition text-5xl"
                         aria-label="GitHub"
                     >
                         <FaGithub />
                     </a>

                     {/* LinkedIn */}
                     <a
                         href="https://www.linkedin.com/in/eyad-odeh/"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-slate-400 hover:text-blue-500 transition text-5xl"
                         aria-label="LinkedIn"
                     >
                         <FaLinkedin />
                     </a>
                     <a
                         href="mailto:odeh.eyad96@gmail.com"
                         className="text-slate-400 hover:text-red-400 transition text-5xl"
                     >
                         <FaEnvelope />
                     </a>

                     <a
                         href={Resume}
                         download
                         className="text-slate-400 hover:text-green-400 md:hidden transition text-5xl"
                     >
                         <FaFileDownload />
                     </a>

                 </div>


             </div>

          </div>

      <div className='relative order-2 w-full'>
      <div className='relative bg-white/5 backdrop-blur-xl  rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10'>
        
      <div className='bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border-white/5 '>
          
          <div className='flex items-center justify-between px-3 sm:px:4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10'>

            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 rounded-full bg-red-500 sm:w-3 sm:h-3'></div>
              <div className='w-2 h-2 rounded-full bg-yellow-500 sm:w-3 sm:h-3'></div>
              <div className='w-2 h-2 rounded-full bg-green-500 sm:w-3 sm:h-3'></div>
              <span className='text-xs sm:text-sm text-gray-300'>Front End Developer</span>
            </div>
            <ChevronDown className='w-3 h-3 sm:w-4 sm:h-4 text-gray-400'/>
          </div>
          <div className='p-3 sm:p-4 relative h-full'>
            <div className='flex space-x-1 sm:space-x-2 mb-4 overflow-x-auto'>
              <button
              onClick={()=>{ setActiveTab("App.jsx")}}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
               ${activeTab === "App.jsx" 
              ? "bg-blue-500/30 text-white border-blue-400/20"
              : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"


              }  transition-all duration-200 whitespace-nowrap `}>App.jsx</button>

              <button
              onClick={()=>{ setActiveTab("Hero.jsx")}}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
               ${activeTab === "Hero.jsx" 
              ? "bg-blue-500/30 text-white border-blue-400/20"
              : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"


              }  transition-all duration-200 whitespace-nowrap `}>Hero.jsx</button>

              <button
              onClick={()=>{ setActiveTab("Navbar.jsx")}}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
               ${activeTab === "Navbar.jsx" 
              ? "bg-blue-500/30 text-white border-blue-400/20"
              : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"


              }  transition-all duration-200 whitespace-nowrap `}>Navbar.jsx</button>
            </div>

            {/* Content of Code*/}
           <div>
            <SyntaxHighlighter language="javascript" style={nightOwl} 
            customStyle={{margin:0 ,borderRadius:"8px" ,fontSize:"13px" ,
              lineHeight:"1.4",
              height:"100%",
              border:"1px solid #3c3c3c",
            }}
            >
              {codeExamples[activeTab]}
            </SyntaxHighlighter>
           </div>
               
          </div>
          
          



        </div>
        <div className={`hidden lg:block absolute bottom-4 right-9 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
            
            <div className='flex items-center space-x-2 mb-2'>
            <div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}>
              {currentFloatingCard.icon}
            </div>
            <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>
              {currentFloatingCard.title}
            </span>

            </div>
            <div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>
              {currentFloatingCard.content}
            </div>

          </div>
      </div>
    </div>
    </div>
      </div>



      </AnimatedSection>
  )
}
