import create from 'zustand';

const mainStore = create(() => ({
  actions: {
    idle: true,
    moveForward: false,
    moveBackward: false,
    jump: false,
    attack1: false,
    attack2: false,
    attack3: false,
  },
}));

export default mainStore;
