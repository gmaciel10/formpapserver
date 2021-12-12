import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToMany,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Attempt } from "./Attempt";
import { Attendance } from "./Attendance";

@Entity("attendanceAttempt")
class attendanceAttempt {
    @PrimaryGeneratedColumn()
    idAttendanceAttempt: number;
    @Column()
    fkIdAttendance: number;
    @Column()
    fkIdAttempt: number;
    @CreateDateColumn()
    created_at: Date;

    // relation attempt
    @ManyToMany((type) => Attempt)
    @JoinColumn({ name: "fkIdAttempt" })
    attempt: Attempt;

    // relation attendance
    @ManyToMany((type) => Attendance)
    @JoinColumn({ name: "fkIdAttendance" })
    attendance: Attendance;
}
export { attendanceAttempt };
