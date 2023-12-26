import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CardEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  adSoyad: string;

  @Column({ nullable: true })
  telNo: String;

  @Column({ nullable: true })
  markaModel: string;

  @Column({ nullable: true })
  plaka: string;

  @Column({ nullable: true })
  km: number;

  @Column({ nullable: true })
  sasi: string;

  @Column({ nullable: true })
  renk: string;

  @Column({ nullable: true })
  girisTarihi: Date;

  @Column({ nullable: true })
  notlar: string;

  @Column({ nullable: true })
  adres: string;
}
