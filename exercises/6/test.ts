// test.ts

import { IsTypeEqual, typeAssert, FirstArgument } from 'type-assertions';
import { logPerson, Person, persons, filterPersons, User, Admin } from './index';

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof filterPersons>,
        [Person[], 'user' | 'admin', Partial<Omit<Person, 'type'>>]
    >
>();

const filtered1 = filterPersons(persons, 'user', {});
typeAssert<
    IsTypeEqual<
        typeof filtered1,
        User[],
        'Result should be an array of User objects'
    >
>();

const filtered2 = filterPersons(persons, 'user', { name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' });
typeAssert<
    IsTypeEqual<
        typeof filtered2,
        User[],
        'Result should be an array of User objects'
    >
>();

const filtered3 = filterPersons(persons, 'admin', {});
typeAssert<
    IsTypeEqual<
        typeof filtered3,
        Admin[],
        'Result should be an array of Admin objects'
    >
>();

const filtered4 = filterPersons(persons, 'admin', { name: 'Jane Doe', age: 32 });
typeAssert<
    IsTypeEqual<
        typeof filtered4,
        Admin[],
        'Result should be an array of Admin objects'
    >
>();

typeAssert<
    IsTypeEqual<
        Person,
        { name: string; age: number } & ({ type: 'user'; occupation: string } | { type: 'admin'; role: string })
    >
>();

typeAssert<
    IsTypeEqual<
        typeof persons,
        ({ name: string; age: number } & ({ type: 'user'; occupation: string } | { type: 'admin'; role: string }))[]
    >
>();

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof logPerson>,
        { name: string; age: number } & ({ type: 'user'; occupation: string } | { type: 'admin'; role: string })
    >
>();

typeAssert<
    IsTypeEqual<
        ReturnType<typeof logPerson>,
        void
    >
>();
