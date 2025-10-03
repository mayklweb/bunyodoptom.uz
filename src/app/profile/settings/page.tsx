import Link from 'next/link'
import React from 'react'

function Settings() {
  return (
    <section className='mt-[80px]'>
      <div className='container'>
        <div>
          <div>
            <h1 className='text-2xl font-semibold mb-2'>Maʼlumotlarim</h1>
            <div className='mb-4 flex items-center gap-2'>
              <Link href={'/'} className="text-[#2E3192] text-base"> Asosiy </Link> /
              <Link href={'/profile'} className="text-[#2E3192] text-base"> Profil </Link> /
              <p className="text-[#2E3192] text-base"> Maʼlumotlarim </p>
            </div>
          </div>
          <div className='flex flex-col gap-6 bg-white'>
            <div>
              <label htmlFor="surname">Familiya <span className='text-red-500'>*</span></label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input placeholder='Familiya' id='surname' type="text" className='outline-none' />
              </div>
            </div>
            <div>
              <label htmlFor="firstname">Ism <span className='text-red-500'>*</span></label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input placeholder='Ism' id='firstname' type="text" className='outline-none' />
              </div>
            </div>
            <div>
              <label htmlFor="parentsname">Otasining ismi</label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input id='parentsname' type="text" className='outline-none' />
              </div>
            </div>
            <div>
              <label htmlFor="brightday">Tugʻilgan sana</label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input placeholder='Familiya' id='brightday' type="text" className='outline-none' />
              </div>
            </div>
            <div>
              <label htmlFor="phone">Telefon raqami <span className='text-red-500'>*</span></label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input placeholder='+998 (90) 123-45-67' id='phone' type="text" className='outline-none' />
              </div>
            </div>
            <form></form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings