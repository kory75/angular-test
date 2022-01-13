export interface Product {
  id: number;
  name: string;
  price: number;
}

export function createProductData(): Product[] {
  return [
    { id: 1, name: 'Filo Mix', price: 7 },
    { id: 2, name: 'Camembert Pierrot', price: 34 },
    { id: 3, name: 'Mascarpone Fabioli', price: 32 },
    { id: 4, name: 'Röd Kaviar', price: 15 },
    { id: 5, name: 'Chocolade', price: 12.75 },
    { id: 6, name: 'Ipoh Coffee', price: 46 },
  ];
}
