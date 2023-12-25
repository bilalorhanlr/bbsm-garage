import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';
import { AuthDto } from './auth.dto';
export declare class AuthController {
    private readonly databaseService;
    constructor(databaseService: AuthService);
    getAll(): any;
    setOne(Auth: AuthDto): Promise<AuthEntity>;
    setController(Auth: AuthDto): Promise<boolean>;
}
