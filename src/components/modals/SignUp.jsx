import React, { useState } from "react";
import { X } from "lucide-react";
import { PatternFormat } from "react-number-format";
import { observer } from "mobx-react-lite";
import { modalStore } from "../../store/ModalStore";
import { authStore } from "../../store/AuthStore";

function SignUp() {
  const [password, setPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [brightday, setBrightday] = useState("");

  const handleClose = () => {
    modalStore.close("signUp");
  };

    const handelSignUp = async (e) => {
      e.preventDefault();
      const res = await authStore.signup({ name, password });
      console.log("Login result:", res);
    };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>

        <div className="w-full h-full lg:w-auto lg:h-auto lg:rounded-xl p-10 bg-white relative z-10">
          <div className="w-full flex justify-end absolute top-6 right-6 ">
            <button onClick={handleClose} className="cursor-pointer">
              <X />
            </button>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-2xl text-center font-semibold">
              Ro’yxatdan o’tish
            </h1>
            <form>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 flex-col">
                  <label htmlFor="name">Ism</label>
                  <input
                    name="name"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                    type="text"
                    placeholder="Ismingiz..."
                    required
                  />
                </div>
                <div className="flex gap-2 flex-col">
                  <label htmlFor="phone">Telefon raqam</label>
                  <PatternFormat
                    format="+998 ## ### ## ##"
                    mask="_"
                    allowEmptyFormatting={false}
                    name="phone"
                    id="phone"
                    className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                    placeholder="+998 90 123 45 67"
                    value={phone} // string bo'lishi shart
                    onValueChange={(values) => setPhone(values.value)}
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
                  />
                </div>
                <div className="flex gap-2 flex-col">
                  <label htmlFor="brightday">brightday</label>
                  <input
                    name="brightday"
                    id="brightday"
                    className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                    type="text"
                    placeholder="brightday"
                    required
                  />
                </div>
                <div className="text-sm flex gap-2">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    Foydalanish shartlariga rozilik bildiraman
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={authStore.loading}
                className="w-full mt-4 py-3 text-white bg-[#2E3192] rounded-[10px] cursor-pointer disabled:opacity-50"
              >
                {authStore.loading ? "Yuklanmoqda..." : "Ro’yxatdan o’tish"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
