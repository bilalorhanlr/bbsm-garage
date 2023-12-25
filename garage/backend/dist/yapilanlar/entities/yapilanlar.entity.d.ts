import { CardEntity } from '../../card/entities/card.entity';
import { TeklifEntity } from '../../teklif/entities/teklif.entity';
export declare class YapilanlarEntity {
    id: number;
    kart: CardEntity;
    teklif: TeklifEntity;
    adet: number;
    parcaAdi: string;
    fiyat: number;
    get toplamFiyat(): number;
}
