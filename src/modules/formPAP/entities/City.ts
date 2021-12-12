import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity("city")
class City {
    @PrimaryGeneratedColumn()
    idCity: number;

    @Column()
    nameCity: string;

    @CreateDateColumn()
    created_at: Date;
}
export { City };
