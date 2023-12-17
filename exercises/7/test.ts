import { IsTypeEqual, typeAssert, FirstArgument } from 'type-assertions';
import { logPerson, Person, persons, filterPersons } from './index';

typeAssert<
    IsTypeEqual<
        FirstArgument<typeof filterPersons>,
        [Person[], 'user' | 'admin', Partial<Omit<Person, 'type'>>],
        'Arguments of filterPersons should be Person[], "user" or "admin", and Partial<Omit<Person, "type">>'
    >
>();

const filtered1 = filterPersons(persons, 'user', {});
typeAssert<
    IsTypeEqual<
        typeof filtered1,
        Person[],
        'Result should be an array of Person objects'
    >
>();

const filtered2 = filterPersons(persons, 'user', { name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' });
typeAssert<
    IsTypeEqual<
        typeof filtered2,
        Person[],
        'Result should be an array of Person objects'
    >
>();

const filtered3 = filterPersons(persons, 'admin', {});
typeAssert<
    IsTypeEqual<
        typeof filtered3,
        Person[],
        'Result should be an array of Person objects'
    >
>();

const filtered4 = filterPersons(persons, 'admin', { name: 'Jane Doe', age: 32, role: 'Administrator' });
typeAssert<
    IsTypeEqual<
        typeof filtered4,
        Person[],
        'Result should be an array of Person objects'
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
