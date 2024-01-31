import React from "react";
import villa1 from "../assets/img/villa1.png";
import villa2 from "../assets/img/villa2.png";
import villa3 from "../assets/img/villa3.png";
import villa4 from "../assets/img/villa4.png";
import maghsad1 from "../assets/img/maghsad1.jpg";
import maghsad2 from "../assets/img/maghsad2.jpg";
import maghsad3 from "../assets/img/maghsad3.jpg";
import maghsad4 from "../assets/img/maghsad4.png";
import maghsad5 from "../assets/img/maghsad5.png";
import maghsad6 from "../assets/img/maghsad6.png";
import maghsad7 from "../assets/img/maghsad7.png";
import maghsad8 from "../assets/img/maghsad8.jpg";
import maghsad9 from "../assets/img/maghsad9.jpg";
import maghsad10 from "../assets/img/maghsad10.jpg";
import maghsad11 from "../assets/img/maghsad11.jpg";
import maghsad12 from "../assets/img/maghsad12.jpeg";
import Safar_Card1 from "../assets/img/Safar_Card1.png";
import Safar_Card2 from "../assets/img/Safar_Card2.png";
import Safar_Card3 from "../assets/img/Safar_Card3.png";
import Safar_Card4 from "../assets/img/Safar_Card4.png";
import section4 from "../assets/img/section4.png";
import section5_1 from "../assets/img/section5-1.jpg";
import section5_2 from "../assets/img/section5-2.jfif";
import section5_3 from "../assets/img/section5-3.jpg";
import section5_4 from "../assets/img/section5-4.jpg";

import section6_1 from "../assets/img/section6-1.jpg";
import section6_2 from "../assets/img/section6-2.jpg";
import section6_3 from "../assets/img/section6-3.jpeg";
import section6_4 from "../assets/img/section6-4.jfif";

import section7_1 from "../assets/img/section7-1.jpg";
import section7_2 from "../assets/img/section7-2.jpg";
import section7_3 from "../assets/img/section7-3.jpeg";
import section7_4 from "../assets/img/section7-4.jpg";

// Import Swiper React components
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "../../node_modules/swiper/swiper.css";
import "../../node_modules/swiper/modules/pagination.css";
import "../../node_modules/swiper/modules/Autoplay.css";

export default function Section() {
  return (
    <section className="w-[100%] flex flex-col items-center my-20">
      {/* section1 */}
      <div className="w-[80%] md:flex justify-between">
        <div className="md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4">
          <img src={villa1} alt="" />
          <h4 className="text-center text-[18px] font-bold py-5">اجاره ویلا</h4>
        </div>
        <div className="md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4">
          <img src={villa2} alt="" />
          <h4 className="text-center text-[18px] font-bold py-5">
            رزرو بومگردی
          </h4>
        </div>
        <div className="md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4">
          <img src={villa3} alt="" />
          <h4 className="text-center text-[18px] font-bold py-5">اجاره کلبه</h4>
        </div>
        <div className="md:w-[30%] rounded-xl border border-gray-300 mx-5 mt-4">
          <img src={villa4} alt="" />
          <h4 className="text-center text-[18px] font-bold py-5">
            اجاره آپارتمان مبله
          </h4>
        </div>
      </div>
      {/* section2 */}
      <div className="w-[80%] my-20">
        <h2 className="text-[23px] font-bold my-3">مقصدهای محبوب سفر</h2>
        <h5>شهرهای محبوب در بین مهمانان</h5>
        <div className="md:flex justify-between  mt-5">
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad1} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">شمال</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad2} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">کردان</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad3} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">مشهد</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad4} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">رامسر</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
        </div>
        {/* box2------------ */}
        <div className="md:flex justify-between  mt-5">
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad5} alt="" />
            <div>
              <p className="text-[14px] text-gray-500"> اجاره سوئیت در</p>
              <p className="font-bold">تهران</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad6} alt="" />
            <div>
              <p className="text-[14px] text-gray-500"> اجاره سوئیت در</p>
              <p className="font-bold">کیش</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad7} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">رزرو بومگردی در </p>
              <p className="font-bold">قشم</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad8} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">رشت</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
        </div>
        {/* box3------------ */}
        <div className="md:flex justify-between  mt-5">
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad9} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">ماسال</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad10} alt="" />
            <div>
              <p className="text-[14px] text-gray-500"> اجاره کلبه در</p>
              <p className="font-bold">اوسبلنگاه</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad11} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">اجاره ویلا</p>
              <p className="font-bold">فیلبند</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
          <div className="md:w-[25%] flex justify-between items-center border border-gray-300 rounded-xl p-2 ml-3">
            <img className="w-[30%] rounded-xl " src={maghsad12} alt="" />
            <div>
              <p className="text-[14px] text-gray-500">
                اجاره آپارتمان مبله در
              </p>
              <p className="font-bold">تهران</p>
            </div>
            <i class="bi bi-chevron-left"></i>
          </div>
        </div>
      </div>

      {/* secton3 */}
      <div className="w-[80%] h-[200px] cursor-pointer">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          Autoplay={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={Safar_Card1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Safar_Card2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Safar_Card3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Safar_Card4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Safar_Card1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* section4 */}
      <div className="w-[100%] lg:w-[80%] md:mt-28">
        <h2 className="text-[20px] font-bold px-3">
          به دنبال چه نوع اقامتگاهی هستید؟
        </h2>
        <div className="flex justify-between mt-5">
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-house-heart-fill lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">
              کلبه سوئیسی
            </p>
          </div>
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-umbrella lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">
              ساحلی شمال
            </p>
          </div>
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-water lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">استخردار</p>
          </div>
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-tree lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">
              جنگلی شمال
            </p>
          </div>
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-house-fill lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">
              سوئیت مبله
            </p>
          </div>
          <div className="w-[20%] border border-gray-300 rounded-xl text-center p-3 ml-3">
            <i class="bi bi-shop lg:text-[40px] font-black"></i>
            <p className="text-[15px] lg:text-[20px] lg:font-bold">هاستل</p>
          </div>
        </div>
        <div className="mt-14">
          <img src={section4} alt="" />
        </div>
      </div>

      {/* section5 */}
      <div className="w-[100%] lg:w-[80%] mt-20">
        <h2 className="text-[25px] font-bold">ویلا در کردان</h2>
        <p className="my-5">اقامتگاه هایی مناسب سفرهای خاص شما</p>
        <div className="md:flex justify-between">
          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section5_1} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section5_2} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section5_3} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section5_4} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>
        </div>
      </div>

      {/* section6 */}
      <div className="w-[100%] lg:w-[80%]  mt-20">
        <h2 className="text-[25px] font-bold text-green-600">
          رزروهای آنی و قطعی
        </h2>
        <p className="my-5">بدون نیاز به تایید میزبان</p>
        <div className="md:flex justify-between">
          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section6_1} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section6_2} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section6_3} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section6_4} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>
        </div>
      </div>

      {/* section7 */}
      <div className="w-[100%] md:w-[80%]  mt-20">
        <h2 className="text-[25px] font-bold my-5">ویلا در رامسر</h2>
        <div className="md:flex justify-between">
          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section7_1} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section7_2} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section7_3} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>

          <div className="md:w-[25%] md:h-[350px] rounded-2xl border border-gray-300 ml-3 mt-5">
            <img className=" rounded-t-2xl" src={section7_4} alt="" />
            <p className="text-[15px] text-gray-400 p-2">
              <span className="text-[#2c859b] font-bold">4.3</span>امتیاز
              کاربران (23نظر)
            </p>
            <p className="pr-2">رزرو ویلا دوخوابه استخردار آبگرم اقاقیا 1</p>
            <p className="text-[13px] text-gray-400 pr-2">چهارباغ، البرز</p>
            <p className="flex justify-between pt-4 px-3">
              <span>قیمت هر شب از</span>
              <span className="text-blue-600 font-bold ">13,680,000</span>
            </p>
          </div>
        </div>
      </div>

      {/* section8 */}
      <div className="w-[100%] lg:w-[80%] mt-20">
        <h2 className="text-[20px] font-bold my-5">سوالات متداول</h2>
        <div className="border border-gray-300 rounded-2xl p-7">
          <div className="h-[60px] overflow-hidden border-b border-gray-300 py-5">
            <h2 className="flex justify-between text-[18px] font-bold pb-5 ">
              <span>رزرو اینترنتی اقامتگاه در علی‌بابا چگونه است؟</span>
              <i class="bi bi-chevron-down"></i>
            </h2>
            <p>
              برای رزرو اقامتگاه کافیست وارد وب‌سایت یا اپلیکیشن علی‌بابا شوید.
              روی گزینه «ویلا و اقامتگاه» بزنید. بعد از اینکه اطلاعاتی مانند
              مقصد یا نوع اقامتگاهتان را تکمیل کردید، گزینه جستجو را بزنید و به
              لیست کامل اقامتگاه‌ها دسترسی پیدا کنید. در نهایت اقامتگاه مدنظرتان
              را انتخاب کنید و با انتخاب گزینه «مشاهده و رزرو» فرایند رزرو
              اقامتگاه را تکمیل کنید.
            </p>
          </div>

          <div className="h-[80px] overflow-hidden border-b border-gray-300 py-5">
            <h2 className="flex justify-between text-[18px] font-bold py-5 ">
              تاییدیه رزرو اقامتگاه در علی‌بابا چگونه است؟
              <i class="bi bi-chevron-down"></i>
            </h2>
            <p>
              واچر یا همان تاییدیه رزرو اقامتگاه یک رسید است که بعد از رزرو
              اقامتگاه برای مهمان صادر می‌شود. واچر نشان می‌دهد که مهمان همه یا
              بخشی از مبلغ اقامتش را پرداخت کرده است. توجه داشته باشید که واریز
              مبلغ به‌معنای قطعی‌شدن رزرو نیست و بعد از رزرو اقامتگاه بعد از
              تایید میزبان و صدور واچر، قطعی خواهد شد. برای هماهنگی‌های بیشتر،
              اطلاعات رزرو و اطلاعات تماس میزبان و مهمان از طریق پیامک و ایمیل
              برای هر دو طرف فرستاده می‌شود.
            </p>
          </div>

          <div className="h-[80px] overflow-hidden border-b border-gray-300 py-5">
            <h2 className="flex justify-between text-[18px] font-bold py-5 ">
              رزرو اقامتگاه در علی‌بابا برای چه مدت زمانی امکان‌پذیر است؟
              <i class="bi bi-chevron-down"></i>
            </h2>
            <p>
            رزرو اقامتگاه از حداقل یک شب شروع می‌شود و تا دو ماه ادامه پیدا می‌کند.
            </p>
          </div>

          <div className="h-[80px] overflow-hidden py-5">
            <h2 className="flex justify-between text-[18px] font-bold py-5">
              امکان رزرو اقامتگاه در کدام شهرها وجود دارد؟
              <i class="bi bi-chevron-down"></i>
            </h2>
            <p>
            از شمالی‌ترین نقطه کشور تا جنوبی‌ترین نقطه. از شرق تا غرب. کافیست مقصدتان را انتخاب کنید و اقامتگاه‌های علی‌بابا را ببینید.
            </p>
          </div>
        </div>
      </div>

      {/* section9 */}
      <div className="w-[80%] mt-20">
        <h2 className="text-[20px] font-bold my-5">رزرو اقامتگاه</h2>
        <p>اگر راهی سفر هستید و می‌خواهید برای آن برنامه‌ریزی کنید، احتمالا یکی از اولین اقداماتی که انجام می‌دهید جستجوی اقامتگاه است. شاید به‌دنبال یک اقامتگاه کوچک هستید که مناسب اسکان یک نفر باشد یا شاید هم می‌خواهید گروهی سفر کنید و به‌دنبال یک اقامتگاه بسیار بزرگ هستید؛ اقامتگاهی که تمام امکانات رفاهی را برای تجربه لوکس مسافرانش فراهم کرده باشد. <br /> <br />

جدا از متراژ، فاکتورهای دیگری هم در رزرو اقامتگاه مطرح است؛ به‌عنوان مثال بعضی از مسافران ترجیح می‌دهند اقامتگاهی را انتخاب کنند که دسترسی خوبی به مراکز مهم شهر دارد. با این حساب اگر نیاز به خرید چیزی داشته باشند یا بخواهند خدمات درمانی فوری دریافت کنند به مشکل نخواهند خورد. <br /><br />

برای بعضی دیگر از مسافران موضوع کاملا متفاوت است. آن‌ها ترجیح می‌دهند اقامتگاهی را رزرو کنند که کاملا با شهر فاصله دارد؛ یک اقامتگاه آرام و دنج، دور از شلوغی، آلودگی و سروصدا. لیست تمام‌وکمال اقامتگاه‌های علی‌بابا هر انتظاری که از یک اقامتگاه دارید را برآورده خواهد کرد. تنها کاری که لازم است انجام بدهید این است که در همین صفحه، مقصد یا نوع اقامتگاه مدنظرتان را جستجو کنید تا لیست بلند اقامتگاه‌ها را ببینید. حالا دیگر تنها کاری که لازم است انجام بدهید بررسی، مقایسه و انتخاب است. <br /><br />

از آنجایی که لیست اقامتگاه‌های علی‌بابا بسیار زیاد است، شما می‌توانید با کمک فیلترهای وب‌سایت انتخاب‌هایتان را هدفمندتر کنید. دنبال کلبه هستید یا ویلا؟ اقامتگاه‌های بوم‌گردی را بیشتر می‌پسندید یا ترجیح می‌دهید سوئیت رزرو کنید؟ شاید هم با خانه‌های سنتی موافق‌تر هستید یا اصلا می‌خواهید یک آپارتمان برای اقامتتان انتخاب کنید. ممکن است هیچکدام از این گزینه‌ها برایتان جذاب نباشد و بخواهید مجتمع‌های اقامتی یا حتی مسافرخانه رزرو کنید. انتخابتان هر کدام که باشد، فقط کافیست آن را در فیلترهای وب‌سایت علی‌بابا علامت بزنید تا لیست نمایش محدودتر و هدفمندتر شود. علاوه بر این، فیلترهای پرکاربرد دیگری هم هستند که می‌توانند شما را در انتخاب اقامتگاه مدنظرتان راهنمایی کنند؛ مثلا اگر برای شما امکان برگزاری مراسم و مهمانی یا ورود حیوانات خانگی مسئله است، پس حتما تیک آن را فعال کنید تا فقط همان اقامتگاه‌ها را ببینید. جنگلی، روستایی، کوهستانی، شهری یا ساحلی؟ فرقی ندارد؛ لیست کامل اقامتگاه‌های علی‌بابا منتظر میزبانی از شماست.</p>
      </div>
    </section>
  );
}
