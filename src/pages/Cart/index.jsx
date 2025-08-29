import React from 'react'
import {
  MinusIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';


function Cart() {

  const navigate = useNavigate()

  const handlBack = () => {
    navigate('/')
  }

  const productData = {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa platea...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    estimatedDeliveryLabel: "Taxminiy yetkazib berish vaqti:",
    estimatedDeliveryValue: "1 ish kuni",
    deliveryPriceLabel: "Yetkazib berish narxi",
    deliveryPriceValue: "Mahsulotni tanlang",
    quantity: 1,
  };


  // Customer information
  const customerInfo = {
    phone: "+998335136053",
    name: "Farrux Bozorboyev",
    address:
      "Xorazm viloyati, Xonqa tumani, Qirq-yop qishlog'i, Do'rman maxallasi, Yashnar ko'chasi 24-uy",
    total: "1 000 000 000 UZS",
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full mt-10">
      <div className='container max-w-[1260px] w-full mx-auto relative'>
        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-4">
          Savat
        </h1>

        {/* Select All Products Checkbox */}


        {/* Main Content Layout */}
        <div className="flex flex-col mt-4">
          {/* Main Content Sections */}
          <div className="flex gap-6">
            <main className="w-2/3">
              <div className="w-full rounded-[10px] bg-[#CECFFF] p-3">
                <input
                  type="checkbox"
                  className="ml-[15px] w-6 h-6 rounded-[5px]"
                />
                <span className="text-lg font-semibold text-[#0d0d2d] ml-2 ">
                  Barcha mavjud mahsulotlarini tanlash
                </span>

              </div>
              <div className="w-full mx-auto mt-6">
                <div className="w-full bg-[#e5e6ff] p-5 rounded-[10px] flex">
                  <div className='flex'>
                    <input type="checkbox" className="mr-[16px] w-6 h-6 rounded-[5px]" />
                  </div>

                  <div className='w-full flex flex-col gap-4'>

                    <div className='flex gap-6'>
                      <div className='rounded-[8px] bg-[#e5e6ff] w-[140px] h-[120px] flex items-center justify-center overflow-hidden'>
                        <img src="/product.jfif" alt="product" className='w-full h-full' />
                      </div>
                      <div>
                        <h1 className='text-2xl'>
                          Lorem ipsum dolor sit amet.</h1>
                      </div>
                    </div>

                    <div className='w-full'>
                      <div className='w-full flex justify-between'>
                        <p className='text-lg'>Taxminiy yetkazib berish vaqti:</p>
                        <p className='text-lg'>1 ish kuni</p>
                      </div>
                      <div className='w-full flex justify-between'>
                        <p className='text-lg'>Yetkazib berish narxi:</p>
                        <p className='text-lg'>0 so'm</p>
                      </div>
                    </div>

                    <div className='flex gap-4'>
                      <div className='inline-flex gap-4 border-[1px] rounded-[8px] p-2  items-center'>
                        <button className=''>
                          <MinusIcon />
                        </button>
                        <p>1</p>
                        <button className=''>
                          <PlusIcon />
                        </button>
                      </div>
                      <button className='border-[1px] p-2 rounded-[8px] flex items-center'><Trash2Icon /></button>
                    </div>
                  </div>

                </div>
              </div>


            </main>

            <div className="w-1/3">
              <div className='w-full p-5 bg-[#e5e6ff] rounded-[10px]'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-2xl font-semibold'>Telefon:</h3>
                  <p className='text-xl'>+998335136053</p>
                </div>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-2xl font-semibold'>F.I.O:</h3>
                  <p className='text-xl'>Farrux Bozorboyev</p>
                </div>

                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-2xl font-semibold'>Mainzil:</h3>
                  <p className='text-base ml-14'>Xorazm, Xonqa tumani, Qirq-yop qishlog’i, Do’rman maxallasi, Yashnar ko’chasi 24-uy</p>
                </div>

                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-2xl font-semibold'>Jami:</h3>
                  <p className='text-xl'>10 000 000 UZS</p>
                </div>

                <button className='w-full text-white text-xl p-4 bg-[#2E3192] rounded-[10px] cursor-pointer'>To'lash</button>

              </div>

              {/* <div className="bg-[#] rounded-[10px] border-none">
                <div className="p-5">
                  <div className="space-y-[17px]">
                    <div className="flex justify-between">
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#0d0d2dcc] text-xl tracking-[0.40px]">
                        Telefon
                      </div>
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#0d0d2db2] text-xl text-right tracking-[0.40px]">
                        {customerInfo.phone}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#0d0d2dcc] text-xl tracking-[0.40px]">
                        F.I.O
                      </div>
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#0d0d2db2] text-xl text-right tracking-[0.40px]">
                        {customerInfo.name}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <div className="w-[218px]">
                        <div className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#0d0d2db2] text-lg tracking-[0.36px]">
                          {customerInfo.address}
                        </div>
                      </div>
                      <MapPinIcon className="w-6 h-6 flex-shrink-0" />
                    </div>

                    <div className="flex justify-between pt-[31px]">
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#0d0d2d] text-[23px] tracking-[0.46px]">
                        Jami:
                      </div>
                      <div className="[font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#0d0d2d] text-[23px] text-right tracking-[0.46px]">
                        {customerInfo.total}
                      </div>
                    </div>

                    <button className="w-full bg-[#6769bf] text-app-secondary rounded-[10px] mt-[23px]">
                      <span className="[font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg tracking-[0] leading-[26px]">
                        Mahsulotni tanlang
                      </span>
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <SidebarSection /> */}
              {/* <SummarySection /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default Cart