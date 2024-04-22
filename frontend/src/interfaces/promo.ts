export interface Promo {
    title: string;
    user_id: number;
    isactivated: boolean;
    sale: number;
    id: number
}

export type Promos = Promo[];