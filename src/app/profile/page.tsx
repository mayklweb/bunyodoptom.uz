import Link from 'next/link'
import React from 'react'

function Profile() {
  return (
    <section>
      <div className='container'>
        <div className='mt-[80px]'>
          <div>
          <div>
            <h1 className='text-2xl font-semibold mb-2'>Hisobim</h1>
            <div className='mb-4 flex items-center gap-2'>
              <Link href={'/'} className="text-[#2E3192] text-base"> Asosiy </Link> /
              <Link href={'/profile'} className="text-[#2E3192] text-base"> Hisobim </Link> /
            </div>
          </div>
            <div className="bg-white w-full flex flex-col gap-6">
              <Link href={'/profile/settings'} className='w-full border-[1px] border-solid border-[#E4E4E4] py-4 px-2 text-lg font-medium rounded-2xl flex items-c
             justify-center gap-2 hover:bg-[#E5E6FF] transition-all duration-200 ease-in-out'>
                Maʼlumotlarim
              </Link>
              <Link href={'/profile/orders'} className='w-full border-[1px] border-solid border-[#E4E4E4] py-4 px-2 text-lg font-medium rounded-2xl flex items-c
             justify-center gap-2 hover:bg-[#E5E6FF] transition-all duration-200 ease-in-out'>
                Buyurtmalarim
              </Link>
              <Link href={'/profile/locations'} className='w-full border-[1px] border-solid border-[#E4E4E4] py-4 px-2 text-lg font-medium rounded-2xl flex items-c
             justify-center gap-2 hover:bg-[#E5E6FF] transition-all duration-200 ease-in-out'>
                Manzillar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile