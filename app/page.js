import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen bg-cover bg-no-repeat bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1d4ed8_50%,_#0891b2_100%)] px-36">
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

      <div className="hero py-[10vh] flex justify-between items-center">
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
              <span data-component-name="span" className="text-white/60 text-xs ml-auto">GigShield Dashboard</span></div>
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
      </div>
    </div>
  );
}
