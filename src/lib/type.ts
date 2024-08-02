// User type
export interface UserTYpe {
  id: string;
  username: string;
  email: string;
  age: string;
}

interface typeForSize {
  small: string;
  medium: string;
}

export type Product = {
  id: string;
  product: string;
  price: typeForSize;
  stock: typeForSize;
  description: string;
};

type OrderProductInformation = {
  product: string;
  quantity: typeForSize;
};

export type Order = {
  id: string;
  client: string;
  product: [OrderProductInformation];
  total: string;
  date: string;
};
