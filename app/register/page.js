import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      <div className='bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1d4ed8_50%,_#0891b2_100%)] hidden lg:flex flex-col justify-between p-12 text-white'>
        <div className='flex items-center gap-2 mb-12'>
          <div className='w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center'>
            <Image src="/logo.svg" alt="" height={20} width={20} />
          </div>
          <span className='text-2xl font-bold'>GigShield</span>
        </div>

        <div>
          <h2 className='text-4xl font-bold mb-6 leading-tight'>Join 15,000+ gig workers protected by GigShield</h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0'>
                <Image src="/tick.svg" alt="" width={14} height={14} />
              </div>
              <span className='text-blue-100 text-sm'>Setup in under 2 minutes</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0'>
                <Image src="/tick.svg" alt="" width={14} height={14} />
              </div>
              <span className='text-blue-100 text-sm'>Instant UPI payouts — no claims needed</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0'>
                <Image src="/tick.svg" alt="" width={14} height={14} />
              </div>
              <span className='text-blue-100 text-sm'>Cancel anytime, no lock-in</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-5 h-5 rounded-full bg-teal-400/20 flex items-center justify-center shrink-0'>
                <Image src="/tick.svg" alt="" width={14} height={14} />
              </div>
              <span className='text-blue-100 text-sm'>Coverage in 50+ Indian cities</span>
            </div>
          </div>
        </div>

        <div className='bg-white/10 rounded-2xl p-6'>
          <p className='text-sm text-blue-100 italic mb-3'>"Last monsoon season, GigShield paid me ₹9,000 across 6 payout events. Completely automatic. Changed my life."</p>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm'>R</div>
            <div>
              <div className='text-sm font-semibold'>Rahul K.</div>
              <div className='text-xs text-blue-300'>Swiggy Delivery · Mumbai</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center p-8 bg-white overflow-y-auto'>
        <div className='w-full max-w-md py-8'>
          <div className='flex items-center gap-2 mb-6 lg:hidden'>
            <div className='flex items-center gap-2 mb-12'>
              <div className='w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center'>
                <Image src="/logo.svg" alt="" height={20} width={20} />
              </div>
              <span className='text-xl font-bold'>GigShield</span>
            </div>
          </div>
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-[#111827] mb-2'>Create your account</h1>
            <p className='text-gray-500 text-sm'>Get protected in 2 minutes. No paperwork.</p>
          </div>

          <form action="" className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className="col-span-2">
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>Full Name</label>
                <input type="text" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Rahul Sharma'/>
              </div>
              <div className="col-span-2">
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>Email address</label>
                <input type="text" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='you@example.com'/>
              </div>
              <div>
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>Phone number</label>
                <input type="text" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='+91-9876543210'/>
              </div>
              <div>
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>Password</label>
                <div className='relative'>
                  <input type="password" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Min 6 characters'/>
                  <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'>
                  <Image src="/eye.svg" alt="" height={16} width={16}/></button>
                </div>
              </div>
              <div>
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>City</label>
                <select name="" id="" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
                  <option value="">Select City</option>
                  <option value="">Mumbai</option>
                  <option value="">Delhi</option>
                  <option value="">Bangalore</option>
                  <option value="">Chennai</option>
                  <option value="">Hyderabad</option>
                  <option value="">Kolkata</option>
                  <option value="">Pune</option>
                  <option value="">Ahmedabad</option>
                  <option value="">Jaipur</option>
                  <option value="">Surat</option>
                </select>
              </div>
              <div>
                <label className='text-sm font-medium text-[#111827] block mb-1.5'>Work type</label>
                <select name="" id="" required className='w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white'>
                  <option value="">Select type</option>
                  <option value="">Delivery (Swiggy, Zomato, Amazon)</option>
                  <option value="">Ride (Uber, Ola, Rapido)</option>
                  <option value="">Freelance (Urban Company, etc.)</option>
                  <option value="">Other gig work</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="" className='text-sm font-medium text-[#111827] block mb-2'>Choose your plan</label>
              <div className='grid grid-cols-3 gap-2'>
                <button className='relative border-2 rounded-xl p-3 text-left transition-all border-gray-200 bg-white hover:border-gray-300'>
                  <div className='font-semibold text-sm text-[#111827]'>Basic</div>
                  <div className='text-sm text-blue-600 font-medium'>&#8377;99/mo</div>
                  <div className='text-[10px] text-gray-500 mt-0.5'>&#8377;500 per event</div>
                </button>
                <button className='relative border-2 rounded-xl p-3 text-left transition-all border-blue-500 bg-blue-50'>
                  <div className='absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full'>Popular</div>
                  <div className='font-semibold text-sm text-[#111827]'>Pro</div>
                  <div className='text-sm text-blue-600 font-medium'>&#8377;249/mo</div>
                  <div className='text-[10px] text-gray-500 mt-0.5'>&#8377;1500 per event</div>
                </button>
                <button className='relative border-2 rounded-xl p-3 text-left transition-all border-gray-200 bg-white hover:border-gray-300'>
                  <div className='font-semibold text-sm text-[#111827]'>Ultra</div>
                  <div className='text-sm text-blue-600 font-medium'>&#8377;499/mo</div>
                  <div className='text-[10px] text-gray-500 mt-0.5'>&#8377;3500 per event</div>
                </button>
              </div>
            </div>

            <button type='submit' className='w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 mt-2'>Create Account</button>
          </form>

          <div className='mt-5 text-center text-sm text-gray-500'>Already have an account?
            <a href="/login" className='text-blue-600 font-medium hover:underline'>Sign in</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
