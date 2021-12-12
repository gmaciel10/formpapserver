interface ICreateAddressDTO {
    postalCode: string;
    district: string;
    street: string;
    number: number;
    complement: string;
    condominium: string;
    fkIdCity: number;
}

export { ICreateAddressDTO };
