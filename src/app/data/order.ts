export interface Order {
  id: number;
  date: string;
  customerId: number;
  productId: number;
}

export function createOrderData(): Order[] {
  return [
    {
      id: 11079,
      customerId: 1,
      date: new Date(2019, 5, 6).toISOString(),
      productId: 1,
    },
    {
      id: 11077,
      customerId: 1,
      date: new Date(2019, 5, 7).toISOString(),
      productId: 2,
    },
    {
      id: 11076,
      customerId: 2,
      date: new Date(2019, 6, 9).toISOString(),
      productId: 3,
    },
    {
      id: 11075,
      customerId: 2,
      date: new Date(2019, 4, 3).toISOString(),
      productId: 4,
    },
    {
      id: 11074,
      customerId: 3,
      date: new Date(2021, 6, 7).toISOString(),
      productId: 5,
    },
    {
      id: 11073,
      customerId: 3,
      date: new Date(2021, 4, 8).toISOString(),
      productId: 6,
    },
  ];
}
