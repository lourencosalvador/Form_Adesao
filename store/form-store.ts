import { create } from "zustand";

type formProps = {
  id: string;
  name: string;
  email: string;
  tickets: string;
};

type FormStore = {
  data_form: formProps | null;
  saveForm_data: (data: formProps) => void;
  removeForm_data: (id: string) => void;
};

export const useFormDta = create<FormStore>((set, get) => ({
  data_form: {
    id: "",
    name: "",
    email: "",
    tickets: "",
  },
  saveForm_data: (data: formProps) => set({ data_form: data }),
  removeForm_data: (id: string) => set({ data_form: null }),
  remove: () => set({ data_form: null }),
}));