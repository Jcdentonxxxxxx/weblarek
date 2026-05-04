import { IBuyer, TPayment, TBuyerErrors } from '../../types';

export class Buyer {
    protected payment: TPayment = '';
    protected address: string = '';
    protected phone: string = '';
    protected email: string = '';

    setProperties(properties: Partial<IBuyer>): void {
        if (properties.payment !== undefined) {
            this.payment = properties.payment;
        }
        if (properties.address !== undefined) {
            this.address = properties.address;
        }
        if (properties.phone !== undefined) {
            this.phone = properties.phone;
        }
        if (properties.email !== undefined) {
            this.email = properties.email;
        }
    }

    getProperties(): IBuyer {
        return {
            payment: this.payment,
            address: this.address,
            phone: this.phone,
            email: this.email
        };
    }

    clearProperties(): void {
        const defaultProperties: IBuyer = {
            payment: '',
            address: '',
            phone: '',
            email: ''
        };
        Object.assign(this, defaultProperties);
    }

    validationProperties(): TBuyerErrors {
        let result: TBuyerErrors = {};

        if (!this.payment.trim()) {
            result.payment = 'Не выбран тип оплаты';
        }
        if (!this.address.trim()) {
            result.address = 'Не указан адрес';
        }
        if (!this.phone.trim()) {
            result.phone = 'Не указан телефон';
        }
        if (!this.email.trim()) {
            result.email = 'Укажите емэйл';
        }

        return result;
    }
}
