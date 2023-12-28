import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CardEntity } from '../../card/entities/card.entity'; // Kart entity dosyasının yolu
import { TeklifEntity } from '../../teklif/entities/teklif.entity'; // Teklif entity dosyasının yolu

@Entity('yapilanlar')
export class YapilanlarEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CardEntity, card => card.yapilanlar, { nullable: true })
    @JoinColumn({ name: 'card_id' })
    card: CardEntity;

    @ManyToOne(() => TeklifEntity, teklif => teklif.yapilanlar, { nullable: true })
    @JoinColumn({ name: 'teklif_id' })
    teklif: TeklifEntity;

    @Column()
    adet: number;

    @Column()
    parcaAdi: string;

    @Column('decimal', { precision: 10, scale: 2 })
    fiyat: number;

    get toplamFiyat(): number {
        return this.adet * this.fiyat;
    }
}
