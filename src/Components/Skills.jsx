import React from 'react'
import Html from '../assets/icons/html.png'
import Css from '../assets/icons/css.png'
import Javascript from '../assets/icons/js.png'
import Reactjs from '../assets/icons/reactjs.png'
import Tailwind from '../assets/icons/tailwind.png'
import Nodejs from '../assets/icons/node-js.png'
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import AnimatedSection from '../animation/AnimatedPage.jsx'
const App =[
    {
        title :"HTML",
        description :"<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "<title>Title of the document</title>\n" +
            "</head>\n" +
            "\n" +
            "<body>\n" +
            "The content of the document......\n" +
            "</body>\n" +
            "\n" +
            "</html>",
        image:Html,
        imagePosition:"left",

    },
    {
        title :"CSS3",
        description :"body {\n" +
            "  margin: 25px;\n" +
            "  background-color: rgb(240,240,240);\n" +
            "  font-family: arial, sans-serif;\n" +
            "  font-size: 14px;\n" +
            "}\n" +
            "h1 {\n" +
            "  font-size: 35px;\n" +
            "  font-weight: normal;\n" +
            "  margin-top: 5px;\n" +
            "}",
        image:Css,
        imagePosition:"right",

    },
    {
        title :"JavaScript",
        description :"function highlight(text) {\n" +
            "  var inputText = document.getElementById(\"inputText\");\n" +
            "  var innerHTML = inputText.innerHTML;\n" +
            "  var index = innerHTML.indexOf(text);\n" +
            "  if (index >= 0) { \n" +
            "   innerHTML = innerHTML.substring(0,index) + \n" +
            "   inputText.innerHTML = innerHTML;\n" +
            "  }\n" +
            "}",
        image:Javascript,
        imagePosition:"left",

    },
    {
        title :"ReactJs",
        description :"import { useState } from 'react';\n" +
            "import { createRoot } from 'react-dom/client';\n" +
            "\n" +
            "function FavoriteColor() {\n" +
            "  const [color, setColor] = useState(\"red\");\n" +
            "\n" +
            "  return <h1>My favorite color is {color}!</h1>\n" +
            "}\n" +
            "\n" +
            "createRoot(document.getElementById('root')).render(\n" +
            "  <FavoriteColor />\n" +
            ");",
        image:Reactjs,
        imagePosition:"right",

    },
    {
        title :"Tailwind Css",
        description :"<div className='flex items-center space-x-2'>\n" +
            "<div className='w-2 h-2 rounded-full \n bg-red-500 '></div>\n" +
            "<div className='w-2 h-2 rounded-full bg-yellow-500 '> \n </div>\n" +
            "<div className='bg-green-500 sm:w-3 sm:h-3'></div>\n" +
            "</div>",
        image:Tailwind,
        imagePosition:"left",

    },
    {
        title :"Nodejs",
        description :"let http = require('http');\n" +
            "\n" +
            "http.createServer(function (req, res) {\n" +
            "  res.writeHead(200, {'Content-Type': 'text/plain'});\n" +
            "  res.end('Hello World!');\n" +
            "}).listen(8080);",
        image:Nodejs,
        imagePosition:"right",

    },
]
export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
        <div className='max-w-7xl mx-auto'>

            <div className='text-center mb-12 sm:mb-16 lg:mb-20'>
                <h2 className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                    <span className='bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent '>TECHNICAL SKILLS</span>
                    <br/>
                    <span className='bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Frontend&</span>
                    <span className='bg-gradient-to-b from-white-400 to-gray-400 bg-clip-text text-transparent'> & </span>
                    <span className='bg-gradient-to-b from-yellow-200 to-yellow-700 bg-clip-text text-transparent'>Backend</span>
                </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 duration-700 animate-in slide-in-from-bottom'>
                {App.map((App , key)=>(
                    <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${App.imagePosition === "right" ? "lg:flex-row-reverse" : '' }`}>

                        {/* Main Body*/}
                        <div className='flex-1 w-full'>
                            <div className='relative group'>
                        {/* body of Contant */}
                        <div className='relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 overflow-hidden group-hover:border-1 group-hover:border-blue-600/50 transition-all duration-300'>
                        {/* header*/}
                            <div className='bg-gray-950 rounded-lg p-2 sm:p-2 font-mono text-xs sm:text-sm' >
                        {/*header components*/}
                            <div className='flex items-center space-x-1 sm:space-x-2 mb-0 sm:mb-0 '>
                                    <div>
                                        <img src={App.image} alt="" className='w-4 h-4'/>
                                    </div>
                                    <div className='text-gray-400 ml-2 sm:ml-4 text-base sm:text-lg font-bold'>
                                        {App.title}
                                    </div>
                            </div>

                                </div>
                            <div className='h-40 w-auto relative mt-2 '>
                        <SyntaxHighlighter language="javascript" style={nightOwl}
                                           customStyle={{margin:0 ,borderRadius:"8px" ,fontSize:"0.75rem" ,
                                               lineHeight:"1.4",
                                               height:"100%",
                                               border:"1px solid #3c3c3c",
                                               overflow:"hidden",
                                           }}
                                           wrapLines={true}
                        >
                            {App.description}
                        </SyntaxHighlighter>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </AnimatedSection>
  )
}
