export interface FormProps<T> {
  handleSubmit: (payload: T) => Promise<void>;
}

export interface ClassificationFormData {
  message: string;
}
