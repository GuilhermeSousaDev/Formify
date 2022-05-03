import { IData } from "./interfaces/IData";

export default class Formify {
    private $data: IData;

    constructor (data: IData) {
        this.$data = data;
    }

    private stringValidator (data: string, prop: string): Boolean {
        const target = this.$data[prop];

        if (typeof data !== target.type) {
            new Error(`The attribute ${prop}, should be type ${target.type}`);
        }

        if (target.minlen < data.length) {
            new Error(`The attribute ${prop}, should be greater than ${target.minlen}`);
        }

        if (target.maxLen > data.length) {
            new Error(`The attribute ${prop}, should be less than ${target.maxLen}`);
        }

        return true;
    }

    private numberValidator (data: number, prop: string) {
        const target = this.$data[prop];

        const strData = data.toString();

        if (typeof data !== target.type) {
            new Error(`The attribute ${prop}, should be type ${target.type}`);
        }

        if (target.minlen < strData.length) {
            new Error(`The attribute ${prop}, should be greater than ${target.minlen}`);
        }

        if (target.maxLen > strData.length) {
            new Error(`The attribute ${prop}, should be less than ${target.maxLen}`);
        }

        return true;
    }

    public validate (prop: string, atrValue: string | number) {
        return typeof atrValue === 'string' ?
            this.stringValidator(atrValue, prop) : this.numberValidator(atrValue, prop)
    }
}