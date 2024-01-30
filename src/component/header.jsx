import React, { useState } from 'react'
import logo from '../assets/img/logo.svg'
import headerimg from '../assets/img/header.webp'
import card from '../assets/img/card.svg'
import bima from '../assets/img/bima.svg'
import visa from '../assets/img/visa.svg'
import gtour from '../assets/img/gtour.svg'

export default function Header() {
    const [inp , setInp] = useState({
        inp1: 'مقصد یا نوع اقامتگاه',
        inp2: 'تاریخ ورود',
        inp3: 'تاریخ خروج',
        inp4:'یک نفر'
    })
  return (
    <header className='flex flex-col items-center pb-10'>
        <div className='w-[100%] flex justify-between text-gray-500 border-t-2 border-gray-300 px-10 pt-5'>
            <img src={logo} alt="" />
            <ul className='hidden lg:flex justify-between' >
                <li className='h-6 border-l border-gray-300 px-4'>بلیط<i class="bi bi-chevron-down pr-3"></i></li>
                <li className='h-6 border-l border-gray-300 px-4'>اقامت<i class="bi bi-chevron-down pr-3"></i></li>
                <li className='h-6 border-l border-gray-300 px-4'>تور</li>
                <li className='px-4'>بیشتر<i class="bi bi-chevron-down pr-3"></i></li>
            </ul>
            <ul className='flex '>
                <li className='text-[10px] md:text-[16px] px-4'><i class="bi bi-patch-question"></i>مرکز پشتیبانی آنلاین</li>
                <li className='text-[10px] md:text-[16px] px-4'><i class="bi bi-suitcase"></i>سفرهای من</li>
                <li className='text-[10px] md:text-[16px] px-4'><i class="bi bi-person"></i>ورود یا ثبت‌نام</li>

            </ul>
        </div>

        <div>
            <img src={headerimg} alt="" />
        </div>

        <div className='w-[80%] h-[300px] bg-white z-10 border border-gray-300 rounded-xl  mt-[-70px]'>
            <div className='w-[100%] border-b border-gray-300 py-5 px-10'>
                <ul className='flex justify-between text-center'>
                    <li><i class="bi bi-airplane text-[25px] font-bold"></i><br /> پرواز داخلی</li>
                    <li><i class="bi bi-airplane-engines text-[25px] font-bold"></i><br />پرواز خارجی</li>
                    <li><i class="bi bi-train-freight-front text-[25px] font-bold"></i> <br />قطار</li>
                    <li><i class="bi bi-bus-front-fill text-[25px] font-bold"></i> <br />اتوبوس</li>
                    <li><i class="bi bi-backpack3-fill text-[25px] font-bold"></i> <br />تور</li>
                    <li><i class="bi bi-building-check text-[25px] font-bold"></i> <br />هتل</li>
                    <li className='text-blue-500 '><i class="bi bi-house-heart text-[25px] font-bold"></i> <br />ویلا و اقامتگاه</li>
                </ul>
            </div>
            <div className='pt-20 p-10'>
                <input className='w-[20%] text-[13px] text-gray-500 border border-gray-300 rounded-xl p-3 mx-3' type="text" value={inp.inp1} />
                <input className='w-[15%] text-[13px] text-gray-500 border border-gray-300 rounded-xl p-3 mx-3' type="text" value={inp.inp2} />
                <input className='w-[20%] text-[13px] text-gray-500 border border-gray-300 rounded-xl p-3 mx-3' type="text" value={inp.inp3} />
                <input className='w-[20%] text-[13px] text-gray-500 border border-gray-300 rounded-xl p-3 mx-3' type="text" value={inp.inp4} />
                <button className=' w-[15%] p-3 rounded-xl border-yellow-800 bg-yellow-500'>جستجو</button>
            </div>
        </div>

        <div className='w-[80%] mt-14'>
            <h2 className='text-[20px] font-bold my-5'>سایر خدمات علی‌بابا</h2>
            <div className='w-[100%] border border-gray-300 rounded-md py-5 px-10'>
                <ul className='flex justify-between items-center'>
                    <li className='flex text-center border-l border-gray-300 px-10'><img src={card} alt="" /><span className='pt-2'>سفرکارت (سازمانی)</span></li>
                    <li className='flex text-center border-l border-gray-300 px-10'><img src={bima} alt="" /><span className='pt-2'>بیمه مسافرتی</span></li>
                    <li className='flex text-center border-l border-gray-300 px-10'><img src={visa} alt="" /><span className='pt-2'>ویزای سفر</span></li>
                    <li className='flex text-center '><img src={gtour} alt="" /><span className='pt-2'>تور گروهی</span></li>
                </ul>
            </div>
        </div>
    </header>
  )
}
