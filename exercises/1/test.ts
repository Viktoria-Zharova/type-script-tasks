import { IsTypeEqual, typeAssert } from 'type-assertions';
import { User, logPerson, users } from './index';

typeAssert<IsTypeEqual<User, { name: string; age: number; occupation: string }>>();
typeAssert<IsTypeEqual<typeof users, User[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: User) => void>>();