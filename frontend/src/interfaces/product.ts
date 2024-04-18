export interface product {
    id: number;
    shop_id: number;
    title: string;
    descriptionproduct: string | null;
    avatarproduct: string;
    price: number;
    categoryproduct: string;
    count: number;
}

export type products = product[];