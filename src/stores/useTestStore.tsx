import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface Skill {
  name: string;
  level: number;
}

interface State {
  name: string;
  age: number;
}

interface Store extends State {
  initializeState: () => void;
  setName: (name: string) => void;
  setAge: (age: number) => void;
}

const defaultState: State = {
  name: '',
  age: 0,
};

const useTestStore = create<Store>()(
  devtools(
    (set) => ({
      ...defaultState,
      initializeState: () => {
        set((state) => ({
          ...state,
          name: '',
          age: 0,
          skills: [],
        }));
      },
      setName: (name: string) => {
        set((state) => ({
          ...state,
          name,
        }));
      },
      setAge: (age: number) => {
        set((state) => ({
          ...state,
          age,
        }));
      },
    }),

    {
      name: 'test-store',
    }
  )
);

export default useTestStore;
