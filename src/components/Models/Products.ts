import { IProduct } from '../../types';

export class Products {
    protected allProducts: IProduct[] = [];
    protected chosenProduct: IProduct | null = null;

    saveProducts(products: IProduct[]): void {
        this.allProducts = products;
    }

    getProducts(): IProduct[] {
        return this.allProducts;
    }

    getProduct(id: string): IProduct | undefined {
        return this.allProducts.find((item) => {
            return item.id === id;
        });
    }

    saveChosenProduct(product: IProduct): void {
        this.chosenProduct = product;
    }

    getChosenProduct(): IProduct | null {
        return this.chosenProduct;
    }
}
