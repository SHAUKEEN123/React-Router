import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://avatars.githubusercontent.com/u/153415311?v=4"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Shaukeen Khan is a B.Tech Computer Science Engineering student passionate about web development and modern technologies. With a strong foundation in React, JavaScript, and CSS frameworks.
                      </p>
                      <p className="mt-4 text-gray-600">
                      He is professional GitHub profile https://github.com/SHAUKEEN123 <br /> LinkedIn  https://LinkedIn.com/shaukeenkhan.
                      <br />For inquiries or collaborations, Shaukeen can be reached at shaukeenkhan449@gmail.com.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}