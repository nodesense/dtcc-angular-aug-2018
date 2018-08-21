// data model, type checking

export interface Address {
    city: string;
    country: string;
    zipcode?: number; // ? optional
}
