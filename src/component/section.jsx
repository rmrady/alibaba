import React from 'react'
import villa1 from '../assets/img/villa1.png'
import villa2 from '../assets/img/villa2.png'
import villa3 from '../assets/img/villa3.png'
import villa4 from '../assets/img/villa4.png'

export default function Section() {
  return (
    <section className='w-[100%] flex flex-col items-center my-20'>
        <div className='w-[80%] md:flex justify-between'>
            <div className='md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4'>
                <img src={villa1} alt="" />
                <h4 className='text-center text-[18px] font-bold py-5'>اجاره ویلا</h4>
            </div>
            <div className='md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4'>
                <img src={villa2} alt="" />
                <h4 className='text-center text-[18px] font-bold py-5'>رزرو بومگردی</h4>
            </div>
            <div className='md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4'>
                <img src={villa3} alt="" />
                <h4 className='text-center text-[18px] font-bold py-5'>اجاره کلبه</h4>
            </div>
            <div className='md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4'>
                <img src={villa4} alt="" />
                <h4 className='text-center text-[18px] font-bold py-5'>اجاره آپارتمان مبله</h4>
            </div>
        </div>

    </section>
  )
}

