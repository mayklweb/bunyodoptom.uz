"use client";
import { useState } from "react";
import { authStore } from "@/store/AuthStore";
import { ArrowLeft } from "lucide-react";
import { PatternFormat } from "react-number-format";
import { LogInType } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const [loginPhone, setLoginPhone] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res: any = await authStore.login({
      phone: loginPhone,
      password: loginPassword,
    });

    console.log("Login result:", res);

    if (res?.token || res?.success) {
      router.push("/profile"); // <-- Redirect page
    } else {
      // optional UX
      alert(res?.message || "Login failed");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="mt-10">
          <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
            <div className="w-full h-full relative flex items-center justify-center bg-white">
              <div className="absolute top-10 left-10 z-10">
                <Link href="/" className="cursor-pointer">
                  <ArrowLeft size={32} />
                </Link>
              </div>

              <div className="w-[400px] p-10 relative z-10">
                <div className="flex gap-4 flex-col items-center">
                  <h1 className="text-2xl text-center font-semibold">Kirish</h1>

                  <form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-4 w-full"
                  >
                    <div className="flex gap-2 flex-col">
                      <label htmlFor="phone">Telefon raqam</label>
                      <PatternFormat
                        name="phone"
                        id="phone"
                        className="w-full px-4 py-2.5 rounded-[10px] bg-[#eeeeee] outline-none"
                        placeholder="+998 90 123 45 67"
                        required
                        value={loginPhone}
                        onValueChange={(values: {
                          value: string;
                          formattedValue: string;
                          floatValue?: number;
                        }) => setLoginPhone(values.value)} // faqat raqamlarni oladi: 901234567
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
                    <div className="flex justify-end">
                      <Link
                        href="/forgot-password"
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Parolni unutdingizmi?
                      </Link>
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
                <div>
                  <p className="mt-4 text-center text-sm text-gray-600">
                    Akkauntingiz yo‘qmi?{" "}
                    <Link
                      href="/signup"
                      className="text-blue-600 font-medium hover:underline"
                    >
                      Ro‘yxatdan o‘ting
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

export default Login;
