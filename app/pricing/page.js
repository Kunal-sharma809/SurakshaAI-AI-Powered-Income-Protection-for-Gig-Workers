import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='bg-white border-b border-gray-100 sticky top-0 z-10'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            <div className="logo bg-blue-600 p-2 w-8 h-8 rounded-xl flex gap-4 items-center">
                <Image src="/logo.svg" alt="" width={20} height={20} loading="eager" />
                <h2 className="font-bold text-xl">GigShield</h2>
            </div>
            <a href="/login" className='text-sm text-gray-600 hover:text-blue-600'>Sign In</a>
        </div>
      </div>


      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='text-center mb-16'>
            <div className='inline-block text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4'>Transparent Pricing</div>
            <h1 className='text-5xl font-bold mb-4'>Coverage that fits your income</h1>
            <p className='text-xl text-gray-500 max-w-2xl mx-auto'>Choose the plan that matches how often you work. All plans include instant UPI payouts — no paperwork, no delays.</p>
        </div>


        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
            <div className='bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm relative '>
                <div className='mb-6'>
                    <h2 className='font-heading text-2xl font-bold text-[#111827] mb-1'>Basic</h2>
                    <p className='text-gray-500 text-sm mb-4'>Essential coverage for occasional gig workers</p>
                    <div className='flex items-end gap-1'>
                        <span className='text-4xl font-bold text-[#111827]'>&#8377;99</span>
                        <span className='text-gray-400 mb-1'>/month</span>
                    </div>
                    <div className='mt-2 text-sm'>
                        <span className='font-semibold text-teal-600'>Up to &#8377;500 per event</span>
                        <span className='text-gray-400'> · &#8377;6000/year</span>
                    </div>
                </div>
                <a href="" className='block text-center py-3 rounded-xl font-semibold transition-all mb-8 bg-gray-100 text-gray-800 hover:bg-gray-200'> Choose Basic</a>
                <div className="space-y-3">
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Rain trigger (&gt;60mm rainfall)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Heat trigger (&gt;42°C)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>3 cities covered</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>UPI instant payout</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>SMS alert</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Basic dashboard</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Pollution trigger</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Flood trigger</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Curfew trigger</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Priority support</span>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-2xl border-2 border-blue-500 p-8 shadow-sm relative '>
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-5 py-1.5 rounded-full flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-4 h-4 text-yellow-400" aria-hidden="true" data-replit-metadata="artifacts/gigshield/src/pages/Landing.tsx:66:14" data-component-name="Zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    <p> Most Popular</p>
                </div>
                <div className='mb-6'>
                    <h2 className='font-heading text-2xl font-bold text-[#111827] mb-1'>Pro</h2>
                    <p className='text-gray-500 text-sm mb-4'>Complete protection for full-time gig workers</p>
                    <div className='flex items-end gap-1'>
                        <span className='text-4xl font-bold text-[#111827]'>&#8377;249</span>
                        <span className='text-gray-400 mb-1'>/month</span>
                    </div>
                    <div className='mt-2 text-sm'>
                        <span className='font-semibold text-teal-600'>Up to &#8377;1500 per event</span>
                        <span className='text-gray-400'> · &#8377;18000/year</span>
                    </div>
                </div>
                <a href="" className='block text-center py-3 rounded-xl font-semibold transition-all mb-8 bg-gray-100 text-gray-800 hover:bg-gray-200'> Choose Pro</a>
                <div className="space-y-3">
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Rain trigger (&gt;40mm rainfall)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Heat trigger (&gt;40°C)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Pollution trigger (AQI&gt;200)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>10 cities covered</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>UPI instant payout</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>SMS + Email + App alerts</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Full dashboard + analytics</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Priority email support</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Pollution trigger</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Flood trigger</span>
                    </div>
                    <div className='flex items-start gap-2 opacity-40'>
                        <div className='w-4 h-4 border border-gray-300 rounded mt-0.5 shrink-0'></div>
                        <span className='text-sm text-gray-500'>Curfew trigger</span>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-sm relative '>
                <div className='mb-6'>
                    <h2 className='font-heading text-2xl font-bold text-[#111827] mb-1'>Ultra</h2>
                    <p className='text-gray-500 text-sm mb-4'>Maximum protection for professional gig workers</p>
                    <div className='flex items-end gap-1'>
                        <span className='text-4xl font-bold text-[#111827]'>&#8377;499</span>
                        <span className='text-gray-400 mb-1'>/month</span>
                    </div>
                    <div className='mt-2 text-sm'>
                        <span className='font-semibold text-teal-600'>Up to &#8377;3500 per event</span>
                        <span className='text-gray-400'> · &#8377;42000/year</span>
                    </div>
                </div>
                <a href="" className='block text-center py-3 rounded-xl font-semibold transition-all mb-8 bg-gray-900 text-white hover:bg-gray-800'> Choose Ultra</a>
                <div className="space-y-3">
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Rain trigger (&gt;20mm rainfall)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Heat trigger (&gt;38°C)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Pollution trigger (AQI&gt;150)</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Flood trigger</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Curfew/disruption trigger</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>All 50+ cities covered</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>UPI instant payout</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>All notification channels</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Full dashboard + analytics</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>24/7 priority support</span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <Image src="/tick.svg" alt='' height={16} width={16}/>
                        <span className='text-sm text-gray-700'>Monthly earnings report</span>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default page
