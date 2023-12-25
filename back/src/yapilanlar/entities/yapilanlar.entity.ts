import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CardEntity } from '../../card/entities/card.entity'; // Kart entity dosyasının yolu
import { TeklifEntity } from '../../teklif/entities/teklif.entity'; // Teklif entity dosyasının yolu

@Entity('yapilanlar')
export class YapilanlarEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CardEntity) // Eğer kart ile ilişkilendirilecekse
    @JoinColumn({ name: 'kart_id' })
    kart: CardEntity;

    @ManyToOne(() => TeklifEntity) // Eğer teklif ile ilişkilendirilecekse
    @JoinColumn({ name: 'teklif_id' })
    teklif: TeklifEntity;

    @Column()
    adet: number;

    @Column()
    parcaAdi: string;

    @Column('decimal', { precision: 10, scale: 2 })
    fiyat: number;

    @Column('decimal', { precision: 10, scale: 2 })
    get toplamFiyat(): number {
        return this.adet * this.fiyat;
    }
}
