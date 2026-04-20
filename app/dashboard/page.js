import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex h-screen bg-[#F9FAFB] overflow-hidden'>
        <div className='hidden lg:flex'>
            <aside className='w-64 bg-white border-r border-gray-100 flex flex-col h-full'>
                <div className='p-6 border-b border-gray-100'>
                    <a href="" className='flex items-center gap-2'>
                        <div className='w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center'>
                            <Image src='/logo.svg' alt='' height={24} width={24}/>
                        </div>
                        <span className='text-lg font-bold text-[#111827]'>GigShield</span>
                    </a>
                </div>

                <nav className='flex-1 p-4 space-y-1'>
                    <a href="/dashboard" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all bg-blue-600 text-white shadow-sm'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideLayout-dashboard w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                        Dashboard
                    </a>
                    <a href="/dashboard/policy" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-[#111827]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        Policy
                    </a>
                    <a href="/dashboard/claims" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-[#111827]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                        Claims
                    </a>
                    <a href="/dashboard/payment" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-[#111827]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                        Payment
                    </a>
                    <a href="/dashboard/alerts" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-[#111827]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                        Alerts
                    </a>
                    <a href="/dashboard/profile" className='flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-gray-600 hover:bg-gray-50 hover:text-[#111827]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:42:14" data-component-name="Icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Profile
                    </a>
                </nav>

                <div className='p-4 border-t border-gray-100'>
                    <div className='flex items-center gap-3 mb-3 px-3'>
                        <div className='w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm'>R</div>
                        <div className='flex-1 min-w-0'>
                            <div className='text-sm font-medium text-[#111827] truncate'>Rahul Sharma</div>
                            <div className='text-xs text-gray-400 truncate'>rahul@gigshield.in</div>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideLog-out w-4 h-4" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:62:10" data-component-name="LogOut"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                        Sign Out
                    </button>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default page
