import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { City } from "./City";
import { Client } from "./Client";

@Entity("address")
class Address {
    @PrimaryGeneratedColumn()
    idAddress: number;
    @Column()
    postalCode: string;
    @Column()
    district: string;
    @Column()
    street: string;
    @Column()
    number: number;
    @Column()
    complement: string;
    @Column()
    condominium: string;
    @Column()
    fkIdCity: number;
    @CreateDateColumn()
    created_at: Date;

    // relation address
    @OneToOne((type) => Client, (address) => Address)
    client: Client;

    // relation city
    @ManyToOne((type) => City)
    @JoinColumn({ name: "fkIdCity" })
    city: City;
}
export { Address };
