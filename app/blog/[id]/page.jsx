import React from 'react'

const page = () => {
  return (
    <div className="p-4 hover:border-[#FFFFFF50] cursor-pointer border border-[#FFFFFF30] shadow hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">
        <div className="text-blue-400 hover:text-blue-600">
          Getting Started with Next.js
        </div>
      </h2>
      <p className="text-sm text-gray-500 mb-2">April 20, 2025</p>
      <p className="text-gray-700">A beginner-friendly guide to building with Next.js.</p>
    </div>
  )
}

export default page