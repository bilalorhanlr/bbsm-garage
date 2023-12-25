import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeklifEntity {
    @PrimaryGeneratedColumn()
    teklif_id: number;

    @Column()
    adSoyad: string;

    @Column()
    telNo: number;

    @Column()
    markaModel: string;

    @Column()
    plaka: string;
    
    @Column()
    km: number;

    @Column()
    sasi: string;

    @Column()
    renk: string;

    @Column()
    girisTarihi: Date;

    @Column()
    notlar: string;

    @Column()
    adres: string;
}
