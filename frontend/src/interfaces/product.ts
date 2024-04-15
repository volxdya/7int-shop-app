export interface product {
    id: number;
    shop_id: number;
    title: string;
    descriptionproduct: string | null;
    avatarproduct: string;
    price: number;
}

export type products = product[];