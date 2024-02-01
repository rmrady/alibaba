import React from "react";

import footer1_1 from "../assets/img/footer1-1.webp";
import footer1_2 from "../assets/img/footer1-2.webp";
import footer1_3 from "../assets/img/footer1-3.webp";
import logo from "../assets/img/logo.svg";
import footer1 from "../assets/img/footer1.jpg";
import footer2 from "../assets/img/footer2.png";
import footer3 from "../assets/img/footer3.png";
import footer4 from "../assets/img/footer4.svg";
import footer5 from "../assets/img/footer5.png";
import footer6 from "../assets/img/footer6.svg";

export default function Footer() {
  return (
    <footer className="w-[100%] pt-8 flex flex-col items-center">
      <div className=" lg:w-[80%] lg:flex justify-between border-b border-gray-300 pb-8 ">
        <div className="lg:w-[35%] flex ml-8">
          <img className="w-[20%]" src={footer1_1} alt="" />
          <div className="w-[70%] mt-3 ml-4">
            <p className="font-bold text-[20px]">رتبه یک سفر</p>
            <p className="text-gray-500 text-[13px]">
              معتبرترین عرضه‌کننده محصولات
            </p>
            <p className="text-gray-500 text-[13px]">گردشگری در ایران</p>
          </div>
        </div>
        <div className="lg:w-[35%] flex ml-8">
          <img className="w-[20%]" src={footer1_2} alt="" />
          <div className="w-[70%] mt-3 ml-4">
            <p className="font-bold text-[20px]">رتبه یک سفر</p>
            <p className="text-gray-500 text-[13px]">
              معتبرترین عرضه‌کننده محصولات
            </p>
            <p className="text-gray-500 text-[13px]">گردشگری در ایران</p>
          </div>
        </div>
        <div className="lg:w-[35%] flex ml-8">
          <img className="w-[20%]" src={footer1_3} alt="" />
          <div className="w-[70%] mt-3 ml-4">
            <p className="font-bold text-[20px]">رتبه یک سفر</p>
            <p className="text-gray-500 text-[13px]">
              معتبرترین عرضه‌کننده محصولات
            </p>
            <p className="text-gray-500 text-[13px]">گردشگری در ایران</p>
          </div>
        </div>
      </div>

      <div className="w-[80%] lg:flex justify-between border-b border-gray-300 py-5">

          <div className="lg:w-[50%] mt-5">
            <div className="flex justify-between mt-5">
              <ul>
                <li className="font-bold text-[20px]">علی‌بابا</li>
                <li className="text-gary-500 text-[14px] pt-3">درباره ما</li>
                <li className="text-gary-500 text-[14px] pt-3">تماس با ما</li>
                <li className="text-gary-500 text-[14px] pt-3">چرا علی‌بابا</li>
                <li className="text-gary-500 text-[14px] pt-3">
                  علی بابا پلاس
                </li>
                <li className="text-gary-500 text-[14px] pt-3">بیمه مسافرتی</li>
                <li className="text-gary-500 text-[14px] pt-3">
                  مجله علی‌بابا
                </li>
              </ul>
              <ul>
                <li className="font-bold text-[20px]">خدمات مشتریان</li>
                <li className="text-gary-500 text-[14px] pt-3">
                  مرکز پشتیبانی آنلاین
                </li>
                <li className="text-gary-500 text-[14px] pt-3">راهنمای خرید</li>
                <li className="text-gary-500 text-[14px] pt-3">
                  راهنمای استرداد
                </li>
                <li className="text-gary-500 text-[14px] pt-3">
                  قوانین و مقررات
                </li>
                <li className="text-gary-500 text-[14px] pt-3">پرسش و پاسخ</li>
              </ul>
              <ul>
                <li className="font-bold text-[20px]">اطلاعات تکمیلی</li>
                <li className="text-gary-500 text-[14px] pt-3">فروش سازمانی</li>
                <li className="text-gary-500 text-[14px] pt-3">
                  همکاری با آژانس‌ها
                </li>
                <li className="text-gary-500 text-[14px] pt-3">
                  فرصت‌های شغلی
                </li>
                <li className="text-gary-500 text-[14px] pt-3">
                  سنجش رضایتمندی
                </li>
              </ul>
            </div>

            <div className="flex mt-4">
              <p className="pl-3 text-[13px]"> بلیط چارتر.</p>
              <p className="pl-3 text-[13px]">تور کیش.</p>
              <p className="pl-3 text-[13px]">تور استانبول.</p>
              <p className="pl-3 text-[13px]">اجاره کلبه جنگلی.</p>
              <p className="pl-3 text-[13px]">بلیط قطار.</p>
              <p className="pl-3 text-[13px]">خرید بلیط هواپیما خارجی.</p>
            </div>
          </div>
          {/* --------------------------------- */}
          <div className="lg:w-[50%] flex flex-col items-center lg:items-end border-t border-gray-300 lg:border-t-0 mt-5">
            <img src={logo} alt="" />
            <p className="pt-4 text-[14px] text-gray-600">
              تلفن پشتیبانی: ۰۲۱ - ۴۳۹۰۰۰۰۰
            </p>
            <p className="pt-4 text-[14px] text-gray-600">
              دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه
              چهارم، بن‌بست گل‌ها، پلاک 1
            </p>
            <div className="mt-5 flex justify-end">
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer1} alt="" />
              </div>
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer2} alt="" />
              </div>
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer3} alt="" />
              </div>
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer4} alt="" />
              </div>
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer5} alt="" />
              </div>
              <div className="border border-gray-300 w-[14%] rounded-xl mr-2">
                <img className="" src={footer6} alt="" />
              </div>
            </div>
          </div>

      </div>

      <div className="w-[80%] lg:flex justify-between py-4">
        <div>
          <p className="text-[13px] text-gray-500">
            کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
            شرکت سفرهای علی‌بابا می‌باشد. (نسخه 2.89.0)
          </p>
        </div>
        <div>
          <i class="bi bi-telegram text-gray-600 ml-4 text-[20px]"></i>
          <i class="bi bi-youtube text-gray-600 ml-4 text-[20px]"></i>
          <i class="bi bi-twitter text-gray-600 ml-4 text-[20px]"></i>
          <i class="bi bi-instagram text-gray-600 ml-4 text-[20px]"></i>
          <i class="bi bi-linkedin text-gray-600 ml-4 text-[20px]"></i>
        </div>
      </div>
    </footer>
  );
}
