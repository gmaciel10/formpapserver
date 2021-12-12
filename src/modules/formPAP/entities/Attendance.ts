import {
    Entity,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Client } from "./Client";
import { Salesman } from "./Salesman";

@Entity("attendance")
class Attendance {
    @PrimaryGeneratedColumn()
    idAttendance: number;

    @Column()
    expirationDate: Date;

    @Column()
    period: string;

    @Column()
    observation: string;

    @Column()
    fkIdClient: number;

    @Column()
    fkIdSalesman: number;

    @Column()
    fkIdAttempt: number;

    @CreateDateColumn()
    created_at: Date;

    // relation client

    @ManyToOne((type) => Client)
    @JoinColumn({ name: "fkIdClient" })
    client: Client;

    // relation salesman

    @OneToOne((type) => Salesman)
    @JoinColumn({ name: "fkIdSalesman" })
    salesman: Salesman;
}

export { Attendance };
