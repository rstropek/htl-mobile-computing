export interface IPerson {
    firstName: string;
    lastName: string;
    age?: number;               // Note optional member
}

export interface IPersonWithDescription extends IPerson {
    getDescription(): string;
}
