import { X } from "lucide-react";
import React, { useState } from "react";
import { authStore } from "../../store/AuthStore";
import { modalStore } from "../../store/ModalStore";
import { PatternFormat } from "react-number-format";

function LogIn() {
  const [loginPhone, setLoginPhone] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const phone = "+998" + loginPhone;
    const res = await authStore.login({ phone, password: loginPassword });

    console.log("Login result:", res);
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>

        <div className="rounded-xl p-10 bg-white relative z-10">
          <div className="w-full flex justify-end absolute top-6 right-6 ">
            <button
              onClick={() => modalStore.close("login")}
              className="cursor-pointer"
            >
              <X />
            </button>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-2xl text-center font-semibold">Kirish</h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
              <div className="flex gap-2 flex-col">
                <label htmlFor="phone">Telefon raqam</label>
                <PatternFormat
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                  placeholder="+998 90 123 45 67"
                  required
                  value={loginPhone}
                  onValueChange={(values) => setLoginPhone(values.value)} // faqat raqamlarni oladi: 901234567
                  format="+998 ## ### ## ##"
                  mask=" "
                />
              </div>
              <div className="flex gap-2 flex-col">
                <label htmlFor="password">Parol</label>
                <input
                  name="password"
                  id="password"
                  className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                  type="password"
                  placeholder="******"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)} // ✅ to‘g‘ri event
                />
              </div>
              <button
                type="submit"
                disabled={authStore.loading}
                className="w-full mt-4 py-3 text-white bg-[#2E3192] rounded-[10px] disabled:opacity-50"
              >
                {authStore.loading ? "Yuklanmoqda..." : "Kirish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
