import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("salesman")
class Salesman {
    @PrimaryGeneratedColumn()
    idSalesman: number;
    @Column()
    type: string;
    @Column()
    fkIdUser: number;
    @CreateDateColumn()
    created_at: Date;

    // relation user
    @ManyToOne((type) => User)
    @JoinColumn({ name: "fkIdUser" })
    user: User;
}
export { Salesman };
