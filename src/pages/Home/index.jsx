import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, HeartIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { modalStore } from "../../store/ModalStore";
import { getCategories, getProducts } from "../../api/apiServices";
import { set } from "mobx";
import { ProductModal } from "../../components/modals";
import { createPortal } from "react-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      const categoryList = await getCategories();
      setProducts(productList);
      setCategories(categoryList);
    };

    fetchProducts();
  }, []);

  const openProductModal = (item) => {
    modalStore.open("product");
    setProduct(item);
  };

  useEffect(() => {
    setProduct(product);
  }, [product]);

  const setOpenModal = (item) => {
    modalStore.open("product");
    setProduct(item);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Testimonial data
  const testimonials = Array(4).fill({
    name: "Umidbek Jumaniyozov",
    text: "This product is exactly what I was needed. Awesome construction and incredible comfort while using.",
    rating: 4.5,
  });

  // Partner logos data
  const partners = [
    {
      id: 1,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNdbvN0bX7w2pfZ-WUcRemHKd2qtab_AiLw&s",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkp9K8dyld6eYE3Vn31PchhuWzC1rIBQL9oA&s",
    },
    {
      id: 4,
      image:
        "data:image/png;base64,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",
    },
    {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PrxwFGl7npvLsVxlU8lEyig-Xf5chNsGG1i0RDORUV1ivHioEzwaBRKUnIEi3tmyt0M&usqp=CAU",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section>
        <div className="container">
          <div className="">
            <Swiper
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className="w-full h-[50vh] mt-5 lg:mt-10 relative rounded-xl overflow-hidden"
            >
              {products.data?.map((banner, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="w-full h-full bg-black">
                    <div className="absolute w-[483px] h-[168px] top-24 left-10">
                      <h1 className="absolute w-[483px] top-0 left-0 [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-[#ffffff] text-[23px] leading-[28.8px]">
                        KitKatdan mazali shokolad tatib ko'rib
                        keyin&nbsp;&nbsp;bizga baho bering
                      </h1>
                      <p className="absolute w-[386px] top-[63px] left-0 [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#d9d9d9] text-lg leading-[27px]">
                        KitKatdan mazali shokolad tatib ko'rib
                        keyin&nbsp;&nbsp;bizga baho bering KitKatdan mazali.
                      </p>
                      <button
                        variant="outline"
                        className="absolute top-[127px] left-0 h-[41px] border-[#cdcfff] text-[#cdcfff] [font-family:'Source_Sans_Pro',Helvetica] font-semibold text-lg"
                      >
                        Batafsil
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="">
        <div className="">
          <div className="mt-5 lg:mt-10">
            <div className="container">
              <div className="flex items-center justify-between">
                <h2 className=" font-semibold text-[#102440] text-2xl lg:text-4xl ">
                  Kategoriya
                </h2>
                <div className="flex gap-2.5">
                  <button
                    ref={prevRef}
                    className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    ref={nextRef}
                    className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              className=""
            >
              {categories.data?.map((category, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="w-[100px] h-[120px] lg:w-[195px] lg:h-[210px] p-2 rounded-md lg:rounded-xl border-[#f1f1f1] shadow-[0px_2px_14px_#00000017]">
                    <div className="w-full h-4/5 bg-black overflow-hidden p-3">
                      <img
                        className="w-full h-full object-cover rounded-[8px] "
                        alt={category.name}
                        src={category.image}
                      />
                    </div>
                    <p className=" [font-family:'Poppins',Helvetica] text-black text-base text-center leading-[25px]">
                      {category.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="">
        <div className="container">
          <h2 className="font-medium text-[#102440] text-2xl lg:text-4xl mb-8">
            Sizga yoqadiganlari
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.data?.map((product, index) => (
              <div
                onClick={() => openProductModal(product)}
                key={index}
                className="w-full h-full rounded-[20px]"
              >
                <div className="relative w-full h-[60%] rounded-[20px] overflow-hidden">
                  {/* <button className="absolute top-[15px] right-[15px] bg-white rounded-full p-2.5">
                    <HeartIcon />
                  </button> */}
                  <img
                    className="w-full h-full object-cover"
                    src={`http://localhost:4000${product.images[0].url}`}
                    alt="product"
                    crossOrigin="anonymous"
                  />
                </div>
                <h3 className="mt-[5px] font-semibold text-[#283645] text-xl">
                  {product.name}
                </h3>
                <p className="text-[#61778d] text-sm font-semibold">
                  {product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-10">
        <div className="container">
          <div className="flex items-center justify-between lg:mb-8">
            <h2 className="font-medium text-[#102440] text-2xl lg:text-4xl mb-4">
              Hamkorlarimiz
            </h2>
            <div className="hidden lg:flex gap-2.5">
              <button
                ref={prevRef}
                className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                ref={nextRef}
                className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // assign ref elements to swiper navigation
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            <div className="flex gap-[20px] overflow-x-auto pb-8">
              {partners.map((partner, index) => (
                <SwiperSlide>
                  <div
                    key={index}
                    className="w-[90px] h-[90px] lg:w-[193px] lg:h-[193px] flex-shrink-0 rounded-[10px] border-[#e2e2e2] bg-[#ffffff33]"
                  >
                    <div className="flex items-center justify-center h-full">
                      <img
                        className="max-w-full max-h-full object-cover"
                        alt={`Partner ${index + 1}`}
                        src={partner.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10 mb-20">
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-[#102440] text-xl leading-[43.8px]">
              Mijozlarimiz fikrlar
            </h2>
            <div className="hidden lg:flex gap-2.5">
              <button
                ref={prevRef}
                className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                ref={nextRef}
                className="p-2.5 bg-[#CECFFF] rounded-full cursor-pointer"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // assign ref elements to swiper navigation
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
          >
            <div className="">
              {testimonials.map((testimonial, index) => (
                <SwiperSlide>
                  <div className="p-4 rounded-lg border-[1px] border-[#E2E2E2] border-solid">
                    <h3 className="">{testimonial.name}</h3>
                    <p className="text-textbodylight text-sm leading-[23px] [font-family:'Source_Sans_Pro',Helvetica] mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <img
                          key={star}
                          className="w-4 h-4"
                          alt="Star"
                          src="/star-fill.svg"
                        />
                      ))}
                      <img
                        className="w-4 h-4"
                        alt="Half star"
                        src="/star-half.svg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </section>

      {modalStore.activeModal === "product" &&
        createPortal(<ProductModal product={product} />, document.querySelector("#root"))}
    </>
  );
}

export default Home;
