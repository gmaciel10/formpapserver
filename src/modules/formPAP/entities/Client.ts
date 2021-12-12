import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Address } from "./Address";

@Entity("client")
class Client {
    @PrimaryGeneratedColumn()
    idClient: number;
    @Column()
    name: string;
    @Column()
    document: string;
    @Column()
    phoneA: string;
    @Column()
    phoneB: string;
    @Column()
    email: string;
    @Column()
    schooling: string;
    @Column()
    frontDocument: string;
    @Column()
    backDocument: string;
    @Column()
    selfieDocument: string;
    @CreateDateColumn()
    created_at: Date;
    @Column()
    fkIdAddress: number;

    // relation address
    @OneToOne((type) => Address, (client) => Client, { eager: true })
    @JoinColumn({ name: "fkIdAddress" })
    address: Address;
}
export { Client };
