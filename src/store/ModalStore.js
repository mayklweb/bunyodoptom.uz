import { makeAutoObservable } from "mobx";

class ModalStore {
  modals = {};
  activeModal = null;

  constructor() {
    makeAutoObservable(this);
  }

  open(name) {
    this.modals[name] = true;
    this.activeModal = name;
  }

  close(name) {
    this.modals[name] = false;
    if (this.activeModal === name) {
      this.activeModal = null;
    }
  }

  toggle(name) {
    const newState = !this.modals[name];
    this.modals[name] = newState;
    this.activeModal = newState ? name : null;
  }

  isOpen(name) {
    return !!this.modals[name];
  }
}

export const modalStore = new ModalStore();
