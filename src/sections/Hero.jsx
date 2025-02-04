import { ArrowRight, Clock } from "lucide-react";
import pizzaImage from "../assets/pizza.png";

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden px-4'>
      {/* background shapes */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
        <div className='absolute top-40 left-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
        <div className='absolute -bottom-8-40 left-40 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70'></div>
      </div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-20'>
          {/* left content */}
          <div className='lg:w-1/2 space-y-12'>
          {/* minimal badge */}
          <div className='inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm'>
            <span className='h-2 w-2 bg-red-500 rounded-full'></span>
            <span className='text-sm font-medium text-gray-600'>New Release</span>
          </div>

          {/* heading */}
          <div className='space-y-4'>
            <h1 className='text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-800'>Experience the</span>
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500'>perfect taste</span>
            </h1>
            <p className='text-lg text-gray-600 max-w-lg'>
              Premium pizzas crafted with passion, delivering an unforgettable dining experience to your doorstep.
            </p>
          </div>

          {/* buttons */}
          <div className='flex flex-col sm:flex-row gap-6'>
            <button className='group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-red-500 rounded-xl hover:bg-red-600 focus:ring-red-500 focus:ring-2 focus:ring-offset-2'>
              <span className='absolute inset-0 w-full h-full mt-1 ml-1 translate-all duration-300 ease-in-out bg-black rounded-xl group-hover:mt-0 group-hover:ml-0'></span>

              <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-red from-red-500 to-red-600 rounded-xl'></span>
              <span className='relative flex items-center'>
                Order Now <ArrowRight className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button className='group relative inline-flex items-center justify-center px-8 py-4 font-bold text-red-500 transition-colors duration-300 bg-white rounded-xl border-2 border-red-500 hover:bg-red-500 focus:outline-none hover:text-white'>
              <span className='relative flex items-center'>
                Track Order
                <Clock className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* key features */}
          <div className='flex items-center gap-8 pt8'>
            <div className='flex items-center gap-2'>
              <span className='h-1 w-1 bg-red-500 rounded-full'></span>
              <span className='text-sm font-semibold text-gray-600'>30 Min Delivery</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='h-1 w-1 bg-red-500 rounded-full'></span>
              <span className='text-sm font-semibold text-gray-600'>100% Secure</span>
            </div>
          </div>
          </div>

          {/* right content */}
          <div className='lg:w-1/2 relative perspective-[1000]'>
            {/* circles */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[120%] border-2 border-dashed border-red-200 rounded-full'></div>
              <div className='absolute w-[90%] h-[90%] border-2 border-dashed border-red-200 rounded-full'></div>
            </div>

            <div className="relative group cursor-pointer transform-gpu transition-all duration-300 hover:scale-105 hover:rotate-6">
              <div className="relative">
                <img src={pizzaImage} alt="" className="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-500 hover:rotate-12" />

                <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg transform hover:scale-100 transition-transform">
                  <span className="font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">New</span>
                </div>

                <div className="absolute -bottom-4 -left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg transform hover:scale-100 transition-transform">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero