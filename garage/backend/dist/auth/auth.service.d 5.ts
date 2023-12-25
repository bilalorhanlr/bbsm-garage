import { Repository } from 'typeorm';
import { AuthEntity } from './auth.entity';
import { AuthDto } from './auth.dto';
export declare class AuthService {
    private databaseRepository;
    constructor(databaseRepository: Repository<AuthEntity>);
    findAll(): any;
    addOne(database: AuthDto): Promise<AuthEntity>;
    findUserPass(database: AuthDto): Promise<boolean>;
}
