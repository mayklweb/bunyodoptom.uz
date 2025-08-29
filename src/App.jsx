import { ArrowUpIcon } from "lucide-react";
import React from "react";
import Header from "./components/header";
import { routes } from "./utils/routes";
import { Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import Footer from "./components/footer";
import { modalStore } from "./store/ModalStore";
import { observer } from "mobx-react-lite";
import { Filter, LogIn, MenuModal, ProductModal, SignUp } from "./components/modals";

const App = observer(() => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <Header />
      <main className="mt-[100px] flex-auto">
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} element={route.component} path={route.path} />
          ))}
        </Routes>
      </main>
      <Footer />

      {/* Scroll To Top Button */}
      <button
        size="icon"
        className="fixed bottom-4 right-4 bg-[#2E3192] rounded-full p-[15px] shadow-[0px_4px_10px_#0000001a] hidden lg:block"
      >
        <ArrowUpIcon className="w-6 h-6  text-white" />
      </button>

      <MenuModal />
      <Filter />

      {/* ✅ Render Modals */}
      {modalStore.activeModal === "signUp" &&
        createPortal(<SignUp />, document.querySelector("#root"))}

      {modalStore.activeModal === "login" &&
        createPortal(<LogIn />, document.querySelector("#root"))}

      {modalStore.activeModal === "product" &&
        createPortal(<ProductModal />, document.querySelector("#root"))}
    </div>
  );
});

export default App;
