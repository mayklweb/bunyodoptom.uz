import { X } from "lucide-react";
import { modalStore } from "../../store/ModalStore";
import Counter from "../Counter";
import { cartStore } from "../../store/CartStore";
import { observer } from "mobx-react-lite";

function ProductModal({ product }) {
  console.log(product);

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-[100] transition-all duration-300 ${
        modalStore.activeModal === "product"
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        <div
          onClick={() => modalStore.close("product")}
          className="w-full h-full bg-black/50 absolute top-0 left-0"
        ></div>

        <div className="w-2/4 rounded-xl p-10 bg-white relative z-10">
          <div className="w-full flex justify-end absolute top-6 right-6">
            <button
              onClick={() => modalStore.close("product")}
              className="cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="w-full flex gap-4 items-center">
            <div className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={`http://localhost:4000${product.images[0].url}`}
                alt={product.name}
                crossOrigin="anonymous"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, commodi!
              </p>

              <p className="font-semibold">KATEGORYA: {product.category_id}</p>
              <p className="text-lg font-semibold">
                NARXI: {product.price} so'm
              </p>

              <div className="flex gap-4 items-center">
                <Counter product={product} />
                <button
                  onClick={() => cartStore.addToCart(product)}
                  className="w-full py-3 text-white bg-[#2E3192] rounded-[10px]"
                >
                  Savatga
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(ProductModal);
