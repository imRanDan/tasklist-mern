import React from 'react'

const Hero = () => {
  return (
  <section className="bg-gray-100 text-gray-800">
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
      <h1 className="text-4xl font-bold leading-none sm:text-5xl">Get organized today!
        <span className="text-blue-600"> myTaskList</span> is for the doers
      </h1>
      <p className="px-8 mt-8 mb-12 text-lg"></p>
      <div className="flex flex-wrap justify-center">
        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-blue-600 text-gray-50">Get started</button>
        <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Learn more</button>
      </div>
    </div>
</section>
  )
}

export default Hero