import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <header className="h-full w-full flex flex-col bg-cover bg-no-repeat bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1d4ed8_50%,_#0891b2_100%)] px-36">
        <nav className="py-4 flex justify-between">
          <div className="logo bg-blue-600 p-2 w-8 h-8 rounded-xl flex gap-4 items-center">
            <Image src="/logo.svg" alt="" width={20} height={20} loading="eager" />
            <h2 className="font-bold text-2xl text-white">GigShield</h2>
          </div>

          <ul className="flex gap-8 items-center text-sm">
            <li>How it Works?</li>
            <li>Pricing</li>
            <li>Login</li>
            <li className="bg-blue-600 px-4 py-2 rounded-lg font-semibold text-white">Get Started</li>
          </ul>
        </nav>
        <section className="hero flex justify-between items-center py-20">
          <div className="left flex flex-col gap-8 lg:w-[45vw] w-[80vw]">
          <div className="bg-white/10 backdrop-blur flex gap-3 items-center px-4 py-2 w-fit rounded-full">
            <Image className="text-yellow-400" height={16} width={16} src="/lightning.svg" alt="" />
            <p className="text-sm text-white">AI-powered instant payouts</p>
          </div>

          <div className="text-white flex flex-col gap-6">
            <h1 className="text-6xl font-bold">Insurance that pays automatically when disasters hit</h1>
            <p className="text-lg">Protect your gig income from heavy rain, extreme heat, pollution, and city disruptions. GigShield monitors conditions in real-time and pays you automatically — no claims needed.</p>
          </div>

          <div className="flex gap-6">
            <button className="flex gap-2 items-center bg-white px-6 py-3 rounded-2xl text-blue-700 font-semibold hover:bg-white/90">
              <span>Get Started Free</span>
              <Image src="/right-arrow.svg" alt="" width={18} height={18} />
            </button>
            <button className="border border-white/30 px-6 py-3 text-white rounded-2xl hover:bg-white/10">See How It Works</button>
          </div>

          <div className="flex gap-6 text-white">
            <div>
              <h2 className="font-semibold text-2xl">&#8377;2.4Cr+</h2>
              <p className="text-xs text-blue-200">Paid out</p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">15000+</h2>
              <p className="text-xs text-blue-200">Workers covered</p>
            </div>
            <div>
              <h2 className="font-semibold text-2xl">4.2 hrs</h2>
              <p className="text-xs text-blue-200">Avg payout time</p>
            </div>
          </div>
        </div>

        <div className="right hidden lg:block w-[35vw]">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              <span className="text-white/60 text-xs ml-auto">GigShield Dashboard</span></div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-white/50 text-xs mb-1">Risk Level</div>
                <div className="font-bold text-sm text-orange-400">HIGH</div>
              </div><div className="bg-white/10 rounded-xl p-3">
                <div className="text-white/50 text-xs mb-1">Active Policy</div>
                <div className="font-bold text-sm text-teal-400">PRO Plan</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-white/50 text-xs mb-1">Total Claims</div>
                <div className="font-bold text-sm text-blue-300">₹4,500</div>
              </div><div className="bg-white/10 rounded-xl p-3">
                <div className="text-white/50 text-xs mb-1">Earnings Protected</div>
                <div className="font-bold text-sm text-green-400">₹18,000</div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-3">
              <div className="text-white/50 text-xs mb-2">Risk Trend</div>
              <div className="flex items-end gap-1 h-10">
                <div className="flex-1 rounded-t h-[30%] bg-[#60A5FA]"></div>
                <div className="flex-1 rounded-t h-[45%] bg-[#60A5FA]"></div>
                <div className="flex-1 rounded-t h-[35%] bg-[#60A5FA]"></div>
                <div className="flex-1 rounded-t h-[70%] bg-[#14B8A6]"></div>
                <div className="flex-1 rounded-t h-[85%] bg-[#F59E0B]"></div>
                <div className="flex-1 rounded-t h-[60%] bg-[#14B8A6]"></div>
                <div className="flex-1 rounded-t h-[40%] bg-[#60A5FA]"></div>
                <div className="flex-1 rounded-t h-[55%] bg-[#14B8A6]"></div>
                <div className="flex-1 rounded-t h-[90%] bg-[#F59E0B]"></div>
                <div className="flex-1 rounded-t h-[75%] bg-[#F59E0B]"></div>
                <div className="flex-1 rounded-t h-[65%] bg-[#14B8A6]"></div>
                <div className="flex-1 rounded-t h-[80%] bg-[#F59E0B]"></div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 bg-orange-400/20 rounded-lg px-3 py-2">
              <Image src="/danger.svg" alt="" width={15} height={15} />
              <span className="text-xs text-orange-200">Heavy rain expected tomorrow — payout ready</span></div>
          </div>
        </div>
        </section>
      </header>

      <main className="flex flex-col bg-white">
        <section className="problems flex flex-col justify-center items-center py-24 px-36">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Your income stops. Your expenses don't.</h2>
              <p className="text-lg text-gray-500 max-w-2xl text-center mt-4 mx-auto">Gig workers lose 30-60% of income on bad weather days. Traditional insurance doesn't cover this. GigShield does.</p>
            </div>
            <div className="cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="heavy-rain bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex justify-center items-center mb-4">
                  <Image src="/heavy-rain.svg" alt="" height={24} width={24} />
                </div>
                <p className="font-semibold mb-2">Heavy Rain</p>
                <p className="text-gray-500 text-sm">Zero visibility, no deliveries, zero income</p>
              </div>
              <div className="extreme-heat bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex justify-center items-center mb-4">
                  <Image src="/heat.svg" alt="" height={24} width={24} />
                </div>
                <p className="font-semibold mb-2">Exteme Heat</p>
                <p className="text-gray-500 text-sm">42°C+ temperatures make riding dangerous</p>
              </div>
              <div className="air-pollution bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex justify-center items-center mb-4">
                  <Image src="/air-pollution.svg" alt="" height={24} width={24} />
                </div>
                <p className="font-semibold mb-2">Air Pollution</p>
                <p className="text-gray-500 text-sm">AQI &gt; 300 forces gig workers indoors</p>
              </div>
              <div className="city-disruption bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex justify-center items-center mb-4">
                  <Image src="/danger2.svg" alt="" height={24} width={24} />
                </div>
                <p className="font-semibold mb-2">City Disruptions</p>
                <p className="text-gray-500 text-sm">Curfews, protests, lockdowns cut income instantly</p>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works bg-[#F9FAFB] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 w-fit rounded-full mb-4 mx-auto">How It Works</div>
              <h2 className="text-4xl font-bold mb-4">Three steps to financial protection</h2>
              <p className="text-lg text-gray-500 mb-16">No paperwork. No waiting. No claims to file.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-blue-100"></div>
              <div className="text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md z-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image src="/track-data.svg" alt="" height={24} width={24}/>
                </div>
                <p className="text-sm font-bold text-blue-600 mb-2">01</p>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Track Data</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Our AI monitors weather stations, AQI sensors, and city alerts across 50+ Indian cities in real-time.</p>
              </div>
              <div className="text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md z-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image src="/logo.svg" alt="" height={24} width={24}/>
                </div>
                <p className="text-sm font-bold text-blue-600 mb-2">02</p>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Detect Risk</h3>
                <p className="text-gray-500 text-sm leading-relaxed">When conditions match your policy triggers — rainfall, temperature, AQI thresholds — the system fires automatically.</p>
              </div>
              <div className="text-center bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md z-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Image src="/lightning2.svg" alt="" height={24} width={24}/>
                </div>
                <p className="text-sm font-bold text-blue-600 mb-2">03</p>
                <h3 className="text-xl font-bold text-[#111827] mb-3">Auto Payout</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Money hits your UPI account within 4 hours. No claim form. No documents. Just instant financial relief.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="statistics bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1d4ed8_50%,_#0891b2_100%)] text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4 text-center">Trusted by gig workers across India</h2>
            <p className="text-blue-200 mb-16 text-center">Real numbers. Real impact.</p>
            <div className="real-numbers grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <Image className="w-8 h-8 text-teal-400 mx-auto mb-4" src="/rupee.svg" alt="" width={24} height={24}/>
                <h3 className="text-3xl font-bold text-white mb-2 text-center mx-8">&#8377;2.4 Crore</h3>
                <p className="text-blue-200 text-sm">Total Payouts Made</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <Image className="w-8 h-8 text-teal-400 mx-auto mb-4" src="/workers.svg" alt="" width={24} height={24}/>
                <h3 className="text-3xl font-bold text-white mb-2 text-center mx-8">15000+</h3>
                <p className="text-blue-200 text-sm">Workers Paid</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <Image className="w-8 h-8 text-teal-400 mx-auto mb-4" src="/clock.svg" alt="" width={24} height={24}/>
                <h3 className="text-3xl font-bold text-white mb-2 text-center mx-8">4.2hrs</h3>
                <p className="text-blue-200 text-sm">Average Payout Time</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8">
                <Image className="w-8 h-8 text-teal-400 mx-auto mb-4" src="/accuracy.svg" alt="" width={24} height={24}/>
                <h3 className="text-3xl font-bold text-white mb-2 text-center mx-8">98.7%</h3>
                <p className="text-blue-200 text-sm">Claim Accuracy Rate</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials mx-auto py-24 max-w-7xl px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Gig workers love GigShield</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"Monsoon season used to mean zero income. Last July, GigShield paid me ₹1,500 automatically when heavy rain hit. I didn't have to do anything."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">R</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">Rahul K.</div>
                  <p className="text-xs text-gray-400">Swiggy · Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"The Delhi heat wave was brutal. I couldn't drive, but GigShield detected the 44°C temperature and sent ₹500 to my UPI before I even knew it triggered."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">P</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">Priya M.</div>
                  <p className="text-xs text-gray-400">Uber · Delhi</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
                <Image src="/star.svg" alt="" height={18} width={18}/>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">"₹249/month for the Pro plan. I've received ₹4,500 in payouts this year alone. Best investment I've made."</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-xs font-bold text-blue-600">A</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#111827]">Arjun T.</div>
                  <p className="text-xs text-gray-400">Zomato · Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing bg-[#F9FAFB] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 w-fit rounded-full mb-4">Pricing</div>
              <h2 className="text-4xl font-bold mb-4">Coverage that fits your earning</h2>
              <p className="text-lg text-gray-500">Starting at just ₹99/month</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm relative">
                <h3 className="font-bold text-xl font-bold mb-1">Basic</h3>
                <h2 className="text-3xl font-bold text-[#111827] mb-1">&#8377;99<span className="text-sm font-normal text-gray-400">/mo</span></h2>
                <p className="text-sm text-teal-600 font-medium mb-4">Up to &#8377;500 per payout</p>
                <div className="block text-center py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200">Get Basic</div>
              </div>
              <div className="bg-white rounded-2xl border border-blue-500 ring-2 ring-blue-500 p-6 shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</div>
                <h3 className="font-bold text-xl font-bold mb-1">Pro</h3>
                <h2 className="text-3xl font-bold text-[#111827] mb-1">&#8377;249<span className="text-sm font-normal text-gray-400">/mo</span></h2>
                <p className="text-sm text-teal-600 font-medium mb-4">Up to &#8377;1500 per payout</p>
                <div className="block text-center py-2 rounded-xl text-sm font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700">Get Pro</div>
              </div>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm relative">
                <h3 className="font-bold text-xl font-bold mb-1">Ultra</h3>
                <h2 className="text-3xl font-bold text-[#111827] mb-1">&#8377;499<span className="text-sm font-normal text-gray-400">/mo</span></h2>
                <p className="text-sm text-teal-600 font-medium mb-4">Up to &#8377;3500 per payout</p>
                <div className="block text-center py-2 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200">Get Ultra</div>
              </div>
            </div>
            <div className="text-center mt-8">
              <a className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1 justify-center" href="">See full pricing details <Image src="/right-arrow.svg" alt="" height={12} width={12}/></a>
            </div>
          </div>
        </section>

        <section className="get-started py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="bg-blue-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="font-heading text-4xl font-bold text-white mb-4">Start protecting your income today</h2>
              <p className="text-blue-100 mb-8">Join 15,000+ gig workers who never worry about weather again. Setup takes 2 minutes.</p>
              <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg text-lg">Get Started Free <Image src="/right-arrow.svg" alt="" height={24} width={24}/></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111827] text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Image src="/logo.svg" alt="" height={20} width={20}/>
                </div>
                <span className="font-heading text-lg font-bold text-white">GigShield</span>
              </div>
              <p className="text-sm leading-relaxed">AI-powered parametric insurance built for India's 15 crore gig workers.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2">
                <li className="text-sm hover:text-white transition-colors">How It Works</li>
                <li className="text-sm hover:text-white transition-colors">Pricing</li>
                <li className="text-sm hover:text-white transition-colors">Coverage</li>
                <li className="text-sm hover:text-white transition-colors">Cities</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                <li className="text-sm hover:text-white transition-colors">About</li>
                <li className="text-sm hover:text-white transition-colors">Blog</li>
                <li className="text-sm hover:text-white transition-colors">Careers</li>
                <li className="text-sm hover:text-white transition-colors">Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
              <ul className="space-y-2">
                <li className="text-sm hover:text-white transition-colors">Help Center</li>
                <li className="text-sm hover:text-white transition-colors">Contact</li>
                <li className="text-sm hover:text-white transition-colors">Privacy Policy</li>
                <li className="text-sm hover:text-white transition-colors">Terms</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-center">2026 GigShield Technologies Pvt. Ltd.</div>
        </div>
      </footer>
    </div>
  );
}
