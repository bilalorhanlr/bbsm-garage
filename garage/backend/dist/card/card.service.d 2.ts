import { CardEntity } from './entities/card.entity';
import { Repository } from 'typeorm';
export declare class CardService {
    private databaseRepository;
    constructor(databaseRepository: Repository<CardEntity>);
    create(CreateCardDto: CardEntity): Promise<CardEntity>;
    findAll(): Promise<CardEntity[]>;
    findOne(id: number): Promise<CardEntity[]>;
    update(id: number, updateCardDto: CardEntity): string;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
