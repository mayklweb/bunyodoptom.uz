import { X } from "lucide-react";
import { observer } from "mobx-react-lite";
import { modalStore } from "../../store/ModalStore";

function MenuModal() {
  const active = modalStore.activeModal === "menu";

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-screen h-screen transition-all duration-300 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div className="w-full h-full bg-black/50"></div>

      {/* Sidebar */}
      <div
        className={`w-[300px] h-full bg-white absolute top-0 right-0 transition-transform duration-300 ${
          active ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => modalStore.close("menu")}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <div className="p-4 mt-10">
          <h3 className="text-2xl font-semibold">Asosiy</h3>
          <h3 className="text-2xl font-normal">Biz haqimizda</h3>
          <h3 className="text-2xl font-normal">Mahsulotlar</h3>
        </div>
      </div>
    </div>
  );
}

export default observer(MenuModal);
