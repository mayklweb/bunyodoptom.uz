import { X } from "lucide-react";
import { modalStore } from "../../store/ModalStore";

function MenuModal() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-[100] transition-all ease-in-out duration-200">
      {/* Overlay */}
      <div className="w-full h-full bg-black/50 absolute top-0 left-0"></div>

      {/* Panenpm l */}
      <div className="absolute top-0 right-0 h-full w-[400px] bg-white shadow-lg rounded-l-xl p-6 transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="w-full flex justify-end">
          <button
            onClick={() => modalStore.close("menu")}
            className="cursor-pointer"
          >
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full">
            <img className="w-full h-48 object-cover rounded-lg" src="/product.jfif" />
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Snickers mini</h3>
            <p className="text-gray-600 text-sm">
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
  );
}

export default MenuModal;
