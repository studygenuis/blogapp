"use client"
import withAuth from '../../utils/withAuth'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('pwd')

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            router.push('/')
        }
    }
    return (
        <div>
            <h1 className='font-bold text-2xl'>Create blog</h1>
            <form action="" onSubmit={handleSubmit} className='mt-6 flex flex-col gap-5'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="">Blog title:</label>
                        <input type="email" name='email' className='p-3 outline-0 border border-[#FFFFFF50]' placeholder='My Blog - 101' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label htmlFor="">Blog Description:</label>
                        <textarea name='desc' rows={5} className='p-3 outline-0 border border-[#FFFFFF50]' placeholder='This is a very good blog...'></textarea>
                    </div>
                </div>
                <button className='p-3 border border-[#FFFFFF50] cursor-pointer hover:bg-[#FFFFFF50] transition duration-200'>Create blog</button>
            </form>
        </div>
    )
}

export default withAuth(page)