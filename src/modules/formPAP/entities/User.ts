import { CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @CreateDateColumn()
    created_at: Date;
}

export { User };
