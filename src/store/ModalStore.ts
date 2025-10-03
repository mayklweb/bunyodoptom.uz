import { makeAutoObservable } from "mobx";

class ModalStore {
  modals: Record<string, boolean> = {};
  activeModal: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  open(name: any) {
    this.modals[name] = true;
    this.activeModal = name;
  }

  close(name: string): void {
    this.modals[name] = false;
    if (this.activeModal === name) {
      this.activeModal = null;
    }
  }

  toggle(name: string): void {
    const newState: boolean = !this.modals[name];
    this.modals[name] = newState;
    this.activeModal = newState ? name : null;
  }

  isOpen(name: string): boolean {
    return !!this.modals[name];
  }
}

export const modalStore = new ModalStore();
