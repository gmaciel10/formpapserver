import {
    Column,
    Entity,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Salesman } from "./Salesman";

@Entity("attempt")
class Attempt {
    @PrimaryGeneratedColumn()
    idAttempt: number;

    @CreateDateColumn()
    date: Date;

    @Column()
    time: string;

    @Column()
    status: string;

    @Column()
    description: string;

    @Column()
    scheduled: Date;

    @Column()
    type: string;

    @Column()
    fkIdSalesman: number;

    @CreateDateColumn()
    created_at: Date;

    // relation salesman

    @OneToOne((type) => Salesman)
    @JoinColumn({ name: "fkIdSalesman" })
    salesman: Salesman;
}

export { Attempt };
