import { CardService } from './card.service';
import { CardEntity } from './entities/card.entity';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    create(createCardDto: CardEntity): Promise<CardEntity>;
    findAll(): Promise<CardEntity[]>;
    findOne(id: string): Promise<CardEntity[]>;
    update(id: string, updateCardDto: CardEntity): string;
    removeAll(): Promise<import("typeorm").DeleteResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
