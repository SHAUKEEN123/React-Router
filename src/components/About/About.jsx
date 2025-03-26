import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://avatars.githubusercontent.com/u/153415311?v=4"
                            alt="shaukeen khan"
                             className="rounded-full border-4 border-gray-600 shadow-lg"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Passionate About React & Modern Web Technologies
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Shaukeen Khan, a final-year B.Tech Computer Science Engineering student, is deeply passionate about web development. With expertise in React, JavaScript, and modern CSS frameworks, he actively builds innovative projects.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Connect with him on: <br />
                            🔗 <a href="https://github.com/SHAUKEEN123" className="text-blue-500 hover:underline">GitHub</a> <br />
                            🔗 <a href="https://www.linkedin.com/in/shaukeen-khan-9a7071260" className="text-blue-500 hover:underline">LinkedIn</a> <br />
                            📧 Reach out at <a href="mailto:shaukeenkhan449@gmail.com" className="text-blue-500 hover:underline">shaukeenkhan449@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}