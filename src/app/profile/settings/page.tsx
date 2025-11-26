"use client";
import Link from "next/link";
import React from "react";

function Settings() {
  const user = JSON.parse(localStorage.getItem("user") || "{}") || "";
  console.log("user:", user);

  return (
    <section className="mt-[80px]">
      <div className="container">
        <div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Maʼlumotlarim</h1>
            <div className="mb-4 flex items-center gap-2">
              <Link href={"/"} className="text-[#2E3192] text-base">
                Asosiy
              </Link>
              /
              <Link href={"/profile"} className="text-[#2E3192] text-base">
                Profil
              </Link>
              /<p className="text-[#2E3192] text-base"> Maʼlumotlarim </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 bg-white">
            {/* <div>
              <label htmlFor="surname">Familiya <span className='text-red-500'>*</span></label>
              <div className='border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3'>
                <input placeholder='Familiya' id='surname' type="text" className='outline-none' />
              </div>
            </div> */}
            <div>
              <label htmlFor="name">
                Ism <span className="text-red-500">*</span>
              </label>
              <div className="border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3">
                <input
                  defaultValue={user.name}
                  placeholder="Ism"
                  id="name"
                  type="text"
                  className="outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone">
                Telefon raqami <span className="text-red-500">*</span>
              </label>
              <div className="border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3">
                <input
                  placeholder="+998 (90) 123-45-67"
                  defaultValue={"+998" + user.phone}
                  id="phone"
                  type="text"
                  className="outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone">
                Parol <span className="text-red-500">*</span>
              </label>
              <div className="border-[1px] border-solid border-[#E4E4E4] rounded-lg mt-2 py-2 px-3">
                <input
                  placeholder="+998 (90) 123-45-67"
                  defaultValue={"+998" + user.phone}
                  id="phone"
                  type="password"
                  className="outline-none"
                />
              </div>
            </div>
            <form></form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
