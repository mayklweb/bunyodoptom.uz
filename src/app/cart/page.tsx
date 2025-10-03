import { Minus, MinusIcon, Plus, PlusIcon, Trash, Trash2Icon } from "lucide-react";
import Image from "next/image";

function Cart() {

  const cart: any[] = []

  return (
    <section>
      <div className="container">
        <div className="mt-[70px]">
          <h1 className="text-xl lg:text-4xl font-semibold mb-4">Savatcha</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-3 bg-[#E5E6FF] rounded-lg">
              <div className="mb-3 flex gap-2 items-start">
                <div className="w-[120px] h-[80px] rounded-md overflow-hidden">
                  <Image className="object-cover" src={'/cookie.webp'} alt="" width={240} height={160} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Pechenie</h3>
                  <p className="text-base">Lorem ipsum dolor...</p>
                </div>
              </div>
              <hr className="border-[#A8AAFF]" />
              <div className="my-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Yetkazib berish vaqti:</p>
                  <p className="text-sm">1 ish kun</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mahsulot narxi:</p>
                  <p className="text-sm font-medium">34 000 USZ</p>
                </div>
              </div>
              <hr className="border-[#A8AAFF]" />
              <div className="flex items-center gap-4 mt-3">
                <div className="bg-white border-[1px] border-[#2e3192] rounded-lg flex items-center gap-3 w-max">
                  <button className="p-2"><Minus color="#2e3192" strokeWidth={1.5} /></button>
                  <p>1</p>
                  <button className="p-2"><Plus color="#2e3192" strokeWidth={1.5} /></button>
                </div>
                <button className="bg-white p-2 border-[1px] border-solid border-[#fb2c36] rounded-lg"><Trash size={22} strokeWidth={1.5} color="#fb2c36" /></button>
              </div>
            </div>
            <div className="p-3 bg-[#E5E6FF] rounded-lg">
              <div className="mb-3 flex gap-2 items-start">
                <div className="w-[120px] h-[80px] rounded-md overflow-hidden">
                  <Image className="object-cover" src={'/cookie.webp'} alt="" width={240} height={160} />
                </div>
                <div>
                  <h3 className="text-base font-medium">Pechenie</h3>
                  <p className="text-sm">Lorem ipsum dolor...</p>
                </div>
              </div>
              <hr />
              <div className="my-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Yetkazib berish vaqti:</p>
                  <p className="text-sm">1 ish kuni</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mahsulot narxi:</p>
                  <p className="text-sm">34 000 USZ</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4 mt-3">
                <div className="border-[1px] border-[#2e3192] rounded-lg flex items-center gap-3 w-max">
                  <button className="p-2"><Minus color="#2e3192" strokeWidth={1.5} /></button>
                  <p>1</p>
                  <button className="p-2"><Plus color="#2e3192" strokeWidth={1.5} /></button>
                </div>
                <button className="p-2 border-[1px] border-solid border-[#fb2c36] rounded-lg"><Trash size={22} strokeWidth={1.5} color="#fb2c36" /></button>
              </div>
            </div>
            <div className="p-3 bg-[#E5E6FF] rounded-lg">
              <div className="mb-3 flex gap-2 items-start">
                <div className="w-[120px] h-[80px] rounded-md overflow-hidden">
                  <Image className="object-cover" src={'/cookie.webp'} alt="" width={240} height={160} />
                </div>
                <div>
                  <h3 className="text-base font-medium">Pechenie</h3>
                  <p className="text-sm">Lorem ipsum dolor...</p>
                </div>
              </div>
              <hr />
              <div className="my-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Yetkazib berish vaqti:</p>
                  <p className="text-sm">1 ish kuni</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mahsulot narxi:</p>
                  <p className="text-sm">34 000 USZ</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4 mt-3">
                <div className="border-[1px] border-[#2e3192] rounded-lg flex items-center gap-3 w-max">
                  <button className="p-2"><Minus color="#2e3192" strokeWidth={1.5} /></button>
                  <p>1</p>
                  <button className="p-2"><Plus color="#2e3192" strokeWidth={1.5} /></button>
                </div>
                <button className="p-2 border-[1px] border-solid border-[#fb2c36] rounded-lg"><Trash size={22} strokeWidth={1.5} color="#fb2c36" /></button>
              </div>
            </div>
            <div className="p-3 bg-[#E5E6FF] rounded-lg">
              <div className="mb-3 flex gap-2 items-start">
                <div className="w-[120px] h-[80px] rounded-md overflow-hidden">
                  <Image className="object-cover" src={'/cookie.webp'} alt="" width={240} height={160} />
                </div>
                <div>
                  <h3 className="text-base font-medium">Pechenie</h3>
                  <p className="text-sm">Lorem ipsum dolor...</p>
                </div>
              </div>
              <hr />
              <div className="my-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Yetkazib berish vaqti:</p>
                  <p className="text-sm">1 ish kuni</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Mahsulot narxi:</p>
                  <p className="text-sm">34 000 USZ</p>
                </div>
              </div>
              <hr />
              <div className="flex items-center gap-4 mt-3">
                <div className="border-[1px] border-[#2e3192] rounded-lg flex items-center gap-3 w-max">
                  <button className="p-2"><Minus color="#2e3192" strokeWidth={1.5} /></button>
                  <p>1</p>
                  <button className="p-2"><Plus color="#2e3192" strokeWidth={1.5} /></button>
                </div>
                <button className="p-2 border-[1px] border-solid border-[#fb2c36] rounded-lg"><Trash size={22} strokeWidth={1.5} color="#fb2c36" /></button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
