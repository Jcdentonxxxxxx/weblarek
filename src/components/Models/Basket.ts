import { IProduct } from '../../types';

export class Basket {
    protected chosenProducts: IProduct[] = [];

    getChosenProducts(): IProduct[] {
        return this.chosenProducts;
    }

    addProduct(product: IProduct): void {
        if (!this.isProductInCart(product.id)) {
            this.chosenProducts.push(product);
        }
    }

    removeProduct(id: string): void {
        this.chosenProducts = this.chosenProducts.filter((item) => {
            return item.id !== id;
        });
    }

    clearBasket(): void {
        this.chosenProducts = [];
    }

    getTotalPrice(): number {
        return this.chosenProducts.reduce((sum, product) => {
            return sum + (product.price ?? 0);
        }, 0);
    }

    getQuantityProducts(): number {
        return this.chosenProducts.length;
    }

    isProductInCart(id: string): boolean {
        return this.chosenProducts.some(item => item.id === id);
    }
}
