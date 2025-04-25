"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { signIn } from "next-auth/react"

const page = () => {
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('pwd')

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        })

        if (result.error) {
            alert(result.error)
            console.log(result.error)
        } else {
            window.location.href = '/'
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' name='email' className='p-3 outline-0 border border-[#FFFFFF50]' placeholder='John Doe' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="password">Password:</label>
                        <input name='pwd' id='password' type="password" className='p-3 outline-0 border border-[#FFFFFF50]' placeholder='********' />
                    </div>
                </div>
                <button className='p-3 border border-[#FFFFFF50] cursor-pointer hover:bg-[#FFFFFF50] transition duration-200'>Login</button>
            </form>
        </div>
    )
}

export default page