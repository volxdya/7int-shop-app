export function price(priceProduct: number, sale: number): number {

    if (sale) {
        return priceProduct * (1 - sale / 100);
    }

    return priceProduct;
}