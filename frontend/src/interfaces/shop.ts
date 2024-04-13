export interface shop {
    id: number;
    user_id: number;
    title: string;
    descriptionShop: string | null;
    avatarshop: string;
}

export type shops = shop[];