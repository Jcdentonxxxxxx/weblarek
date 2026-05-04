import { IBuyer, TPayment } from '../../types';

export class Buyer {
    protected payment: TPayment = '';
    protected address: string = '';
    protected phone: string = '';
    protected email: string = '';

    setProperties(properties: IBuyer): void {
        try {
            Object.keys(properties).forEach((item) => {
                if (!(item in this)) {
                    throw new Error(`Передано недопустимое свойство: ${item}`);
                }
            });
            Object.assign(this, properties);
        } catch (error) {
            console.log(error);
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

    validationProperties(): object {
        let result: {
            payment?: string;
            address?: string;
            phone?: string;
            email?: string;
        } = {};

        if (!this.payment) {
            result.payment = 'Не выбран тип оплаты';
        }
        if (!this.address) {
            result.address = 'Не указан адрес';
        }
        if (!this.phone) {
            result.phone = 'Не указан телефон';
        }
        if (!this.email) {
            result.email = 'Укажите емэйл';
        }

        return result;
    }
}
