import { BeforeInsert, BeforeUpdate, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
//import { Product } from '../../products/entities';


@Entity('users')
export class User {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;


    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['USER']
    })
    roles: string[];

    @ManyToOne(() => User, (user) => user.lastUpdateByUser, {nullable: true, lazy: true})
    @JoinColumn({name: 'lastUpdateByUser' })
    lastUpdateByUser?: User;

    //@OneToMany(
        //() => Product,
        //( product ) => product.user
    //)
    //product: Product;


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
