import { Minus, Plus } from "lucide-react";
import Image from "next/image";


interface ProductPageProps {
  params: {
    id: string;
  };
}


function Product({ params }: ProductPageProps){
  const { id } = params;
  console.log(id);

  return (
    <section>
      <div className="container">
        <div className="mt-[80px] lg:mt-[100px]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/candy.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/cookie.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/candy.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-full rounded-md overflow-hidden">
                <Image
                  src="/cookie.webp"
                  alt=""
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl lg:text-4xl">Shrinliklar</h1>
              <p className="text-base lg:text-xl mt-2.5 lg:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, et?
              </p>
              <p className="text-lg lg:text-2xl mt-2.5 lg:mt-5">50 000 USZ</p>
              <div className="flex items-center gap-3 border border-solid border-black w-max my-5 px-3 py-1 rounded-lg">
                <button>
                  <Minus />
                </button>
                <span>1</span>
                <button>
                  <Plus />
                </button>
              </div>
              <button className="text-white w-full h-10 bg-[#2e3192] rounded-lg cursor-pointer">
                SAVATGA
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-medium">Tavsia etamiz</h1>
            <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 cursor-pointer">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <Image
                    className="w-full h-full object-cover"
                    src={`/candy.webp`}
                    alt="product"
                    width={300}
                    height={200}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">Mahsulot nomi</h3>
                  <p className="text-sm">55 000 USZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
