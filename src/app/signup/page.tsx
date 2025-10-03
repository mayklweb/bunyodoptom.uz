"use client";
import { authStore } from "@/store/AuthStore";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PatternFormat } from "react-number-format";

function SignUp() {
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [name, setName] = useState<string>("");


  const handelSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const res = await authStore.signup({
      name,
      password,
      phone,
    });
    console.log("Signup result:", res);
  };

  return (
    <section>
      <div className='container'>
        <div className='mt-10'>
          <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
            <div className="w-full h-full relative flex items-center justify-center bg-white">
              <div className="absolute top-10 left-10 z-10">
                <Link href="/"
                  className="cursor-pointer"
                >
                  <ArrowLeft size={32}
                  />
                </Link>
              </div>
              <div className="flex gap-4 flex-col items-center">
                <h1 className="text-2xl text-center font-semibold">
                  Ro’yxatdan o’tish
                </h1>

                {/* ✅ Formga onSubmit qo‘shildi */}
                <form onSubmit={handelSignUp}>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={phone}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                <div>
                  <p className="mt-4 text-center text-sm text-gray-600">
                    Allaqachon akkauntingiz bormi?{" "}
                    <Link href="/login" className="text-blue-600 font-medium hover:underline">
                      Tizimga kiring
                    </Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
