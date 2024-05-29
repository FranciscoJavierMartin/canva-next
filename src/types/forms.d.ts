type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
};

type RegisterFormState<T> = {
  message: string;
  error: { [key in keyof T]?: string[] | undefined };
};
