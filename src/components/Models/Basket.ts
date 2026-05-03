import { IProduct } from "../../types";

export class Basket {
    protected chosenProducts: IProduct[] = [];

    getChosenProducts():IProduct[] {
        return this.chosenProducts;
    }

    addProduct(product: IProduct): void {
        if (!this.isProductInCart(product.id)) {
            this.chosenProducts.push(product);
        }
    }

    removeProduct(product: IProduct): void {
        this.chosenProducts = this.chosenProducts.filter((item) => {
            return item.id !== product.id
        });
    }

    clearBasket(): void {
        this.chosenProducts = [];
    }

    getTotalPrice(): number {
        return this.chosenProducts.reduce((sum, product) => {
            const price = product.price ?? 0;
            return sum + price;
        }, 0);
    }

    getQuantityProducts(): number {
        return this.chosenProducts.length;
    }

    isProductInCart(id: string): boolean {
        return !!this.chosenProducts.find((product) => {
            return product.id === id;
        })
    }
}