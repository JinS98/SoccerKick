export interface IFormData {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags: [string];
  images: [string];
  useditemAddress?: {
    address: string;
    addressDetail: string;
    lat: number;
    lng: number;
  };
}
