import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='min-h-screen grid lg:grid-cols-2'>
            <div className='bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1d4ed8_50%,_#0891b2_100%)] flex flex-col justify-between p-12 text-white'>
                <div className='flex items-center gap-2 mb-12'>
                    <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
                        <Image src='/logo.svg' alt='' height={20} width={20} />
                    </div>
                    <span className='font-bold text-2xl'>GigShield</span>
                </div>

                <div>
                    <h2 className='text-4xl font-bold mb-4 leading-tight'>Your income, protected even when the sky falls</h2>
                    <p className='text-blue-100 leading-relaxed'>15,000+ gig workers trust GigShield to automatically protect their earnings from extreme weather and city disruptions.</p>
                </div>

                <div className='space-y-3'>
                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-4 py-3'>
                        <Image src="/heavy-rain2.svg" alt='' height={14} width={14} />
                        <span className='text-sm flex-1'>Heavy rain payout: &#8377;1,500 → Rahul K., Mumbai</span>
                        <span className='text-xs text-blue-300'>2 min ago</span>
                    </div>
                    <div className='flex items-center gap-3 bg-white/10 backdrop-blur rounded-xl px-4 py-3'>
                        <Image src="/lightning3.svg" alt='' height={14} width={14} />
                        <span className='text-sm flex-1'>Heat wave payout: &#8377;500 → Priya M., Delhi</span>
                        <span className='text-xs text-blue-300'>1 hr ago</span>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center p-8 bg-white'>
                <div className='w-full max-w-md'>
                    <div className='flex items-center gap-2 mb-8 lg:hidden'>
                        <div className='w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center'>
                            <Image src='/logo.svg' alt='' height={20} width={20} />
                        </div>
                        <span className='text-2xl font-bold'></span>
                    </div>
                    <div className='mb-8'>
                        <h1 className='text-3xl font-bold text-[#111827] mb-2'>Welcome Back</h1>
                        <p className='text-gray-500'>Sign in to your account</p>
                    </div>

                    <form action="" className='space-y-5'>
                        <div>
                            <label htmlFor="" className='text-sm font-medium text-[#111827] block mb-1.5'>Email address</label>
                            <input type="text" required placeholder='you@example.com' className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' />
                        </div>
                        <div>
                            <label className='text-sm font-medium text-[#111827] block mb-1.5'>Password</label>
                            <div className='relative'>
                                <input type="password" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Min 6 characters' />
                                <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
                                    <Image src="/eye.svg" alt="" height={16} width={16} />
                                </button>
                            </div>
                        </div>
                        <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60'>Sign In</button>
                    </form>

                    <div className='mt-6 text-center text-sm text-gray-500'>
                        Don't have an account?
                        <a href="/register" className='text-blue-600 font-medium hover:underline'>Create one free</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
