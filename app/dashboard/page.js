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

        <div className='flex-1 flex flex-col overflow-hidden'>
            <div className='lg:hidden bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3'>
                <button className='p-1 rounded-lg hover:bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu w-5 h-5 text-gray-600" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:91:12" data-component-name="Menu"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                </button>
                <div className='flex items-center gap-2'>
                    <div className='w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-3 h-3 text-white" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/components/DashboardLayout.tsx:95:14" data-component-name="Shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    </div>
                    <span className='font-bold text-[#111827]'>GigShield</span>
                </div>
            </div>

            <main className='flex-1 overflow-y-auto'>
                <div className='p-6 space-y-6'>
                    <div>
                        <h1 className='font-heading text-2xl font-bold text-[#111827]'>Dashboard</h1>
                        <p className='text-sm text-gray-500 mt-1'>Your insurance overview and risk status</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm'>
                            <div className='w-10 h-10 rounded-xl text-orange-600 bg-orange-50 flex items-center justify-center mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-5 h-5" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:74:20" data-component-name="Icon"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                            </div>
                            <div className='text-xs text-gray-500 mb-1'>Risk Level</div>
                            <div className='font-bold text-[#111827] text-lg leading-tight'>HIGH</div>
                            <div className='text-xs text-gray-400 mt-0.5'>75/100</div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm'>
                            <div className='w-10 h-10 rounded-xl text-blue-600 bg-blue-50 flex items-center justify-center mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-5 h-5" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:74:20" data-component-name="Icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                            </div>
                            <div className='text-xs text-gray-500 mb-1'>Active Policy</div>
                            <div className='font-bold text-[#111827] text-lg leading-tight'>PRO Plan</div>
                            <div className='text-xs text-gray-400 mt-0.5'>&#8377;1500 coverage</div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm'>
                            <div className='w-10 h-10 rounded-xl text-teal-600 bg-teal-50 flex items-center justify-center mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-5 h-5" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:74:20" data-component-name="Icon"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                            </div>
                            <div className='text-xs text-gray-500 mb-1'>Total Claims</div>
                            <div className='font-bold text-[#111827] text-lg leading-tight'>2 claims</div>
                            <div className='text-xs text-gray-400 mt-0.5'>&#8377;1500 paid out</div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-5 shadow-sm'>
                            <div className='w-10 h-10 rounded-xl text-green-600 bg-green-50 flex items-center justify-center mb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee w-5 h-5" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:74:20" data-component-name="Icon"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M6 13h3"></path><path d="M9 13c6.667 0 6.667-10 0-10"></path></svg>
                            </div>
                            <div className='text-xs text-gray-500 mb-1'>Earnings Protected</div>
                            <div className='font-bold text-[#111827] text-lg leading-tight'>&#8377;18000</div>
                            <div className='text-xs text-gray-400 mt-0.5'>&#8377;0 pending</div>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-6'>
                        <div className='lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                            <h2 className='font-semibold text-[#111827] mb-1'>Risk Trend (14 days)</h2>
                            <p className='text-xs text-gray-400 mb-4'>Weather conditions affecting your earnings</p>

                            <div className='recharts-responsive-container w-full h-[200px] min-w-0'>
                                <div className='recharts-wrapper relative w-full h-full max-w-[200px] max-w-[650px]'>
                                    <Image src='' alt='Chart for risk trends' height={200} width={650}/>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                            <div className='flex items-center justify-between mb-4'>
                                <h2 className='font-semibold text-[#111827]'>Active Alerts</h2>
                                <span className='text-xs font-medium bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full'>2 alerts</span>
                            </div>

                            <div className='space-y-2'>
                                <div className='border-l-4 border-l-red-400 bg-red-50 rounded-r-xl px-3 py-2.5'>
                                    <div className='flex items-center gap-1.5 mb-0.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-3 h-3" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:114:26" data-component-name="Bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                                        <span className='text-xs font-semibold capitalize'>Rain · Mumbai</span>
                                    </div>
                                    <p className='text-xs text-gray-600 leading-relaxed line-clamp-2'>Extremely heavy rainfall expected. IMD Red Alert issued. Payouts will trigger automatically if rainfall exceeds 80mm.</p>
                                </div>

                                <div className='border-l-4 border-l-yellow-400 bg-yellow-50 rounded-r-xl px-3 py-2.5'>
                                    <div className='flex items-center gap-1.5 mb-0.5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-3 h-3" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Dashboard.tsx:114:26" data-component-name="Bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                                        <span className='text-xs font-semibold capitalize'>Pollution · Mumbai</span>
                                    </div>
                                    <p className='text-xs text-gray-600 leading-relaxed line-clamp-2'>AQI has risen to 162 over the past 6 hours. Monitor conditions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-2xl border border-gray-100 p-6 shadow-sm'>
                        <h2 className='font-semibold text-[#111827] mb-4'>Recent Payments</h2>
                        <div className='overflow-x-auto'>
                            <table className='w-full text-sm'>
                                <thead>
                                    <tr className='text-xs text-gray-500 border-b border-gray-100'>
                                        <th className='pb-2 text-left font-medium'>Transactions</th>
                                        <th className='pb-2 text-left font-medium'>Method</th>
                                        <th className='pb-2 text-right font-medium'>Amount</th>
                                        <th className='pb-2 text-right font-medium'>Status</th>
                                    </tr>
                                </thead>
                                <tbody className='divide-y divide-gray-50'>
                                    <tr>
                                        <td className='py-3 text-gray-700 font-mono text-xs'>TXN_GS_20260401_001</td>
                                        <td className='py-3 text-gray-500'>UPI</td>
                                        <td className='py-3 text-right font-semibold text-[#111827]'>&#8377;1500</td>
                                        <td className='py-3 text-right'>
                                            <span className='text-xs px-2 py-0.5 rounded-full font-medium bg-green-50 text-green-600'>completed</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </main>
        </div>
    </div>
  )
}

export default page
