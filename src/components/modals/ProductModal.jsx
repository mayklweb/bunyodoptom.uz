import { X } from "lucide-react";
import { modalStore } from "../../store/ModalStore"; // yo‘lni tekshir

function ProductModal() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
      <div className="w-full h-full relative flex items-center justify-center">
        <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>

        <div className="w-2/4 rounded-xl p-10 bg-white relative z-10">
          <div className="w-full flex justify-end absolute top-6 right-6 ">
            <button
              onClick={() => modalStore.close("product")}
              className="cursor-pointer"
            >
              <X />
            </button>
          </div>

          <div className="w-full flex gap-4 items-center">
            <div className="w-1/2">
              <img className="w-full h-full object-cover" src="/product.jfif" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <h3>Snickers mini</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing quisque laoreet tempus amet, convallis. Tincidunt
                facilisis mollis arcu volutpat, feugiat ultrices.
              </p>

              <button className="w-full mt-4 py-3 text-white bg-[#2E3192] rounded-[10px]">
                Savatga
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
