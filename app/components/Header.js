"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const { data: session } = useSession()

    const handleLogout = async () => {
        await signOut({ redirect: false })
    }
    return (
        <div className="">
            <div className="flex items-start justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-bold mb-6">theBlog 👋</h1>
                </Link>
                <div className="flex gap-3">
                    {session && session?.user && (
                        <Link href="/blog/create">
                            <button className="p-2 px-5 hover:bg-[#FFFFFF30] cursor-pointer duration-300 transition">Create blog</button>
                        </Link>
                    )}
                    <Link href="/about">
                        <button className=" p-2 px-5 hover:bg-[#FFFFFF30] cursor-pointer duration-300 transition">About</button>
                    </Link>
                    {session && session?.user ? (
                        <button onClick={handleLogout} className="border-[#FFFFFF30] border p-2 px-5 hover:bg-[#FFFFFF30] cursor-pointer duration-300 transition">Log out</button>
                    ) : (
                        <Link href="/login">
                            <button className="border-[#FFFFFF30] border p-2 px-5 hover:bg-[#FFFFFF30] cursor-pointer duration-300 transition">Log in</button>
                        </Link>
                    )}
                </div>
            </div>
            <p className="text-gray-600 mb-10">Welcome to my blog where I write about web development and tech!</p>
        </div>
    )
}

export default Header