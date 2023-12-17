import { IsTypeEqual, IsTypeAssignable, FirstArgument, typeAssert } from 'type-assertions';
import { api, promisify, ApiResponse, promisifyAll } from './index';

typeAssert<
    IsTypeAssignable<
        FirstArgument<typeof promisify>,
        (callback: (response: ApiResponse<number>) => void) => void
    >
>();
typeAssert<
    IsTypeAssignable<
        FirstArgument<typeof promisify>,
        (callback: (response: ApiResponse<string>) => void) => void
    >
>();
typeAssert<
    IsTypeAssignable<
        ReturnType<typeof promisify>,
        () => Promise<number>
    >
>();
typeAssert<
    IsTypeAssignable<
        ReturnType<typeof promisify>,
        () => Promise<string>
    >
>();

typeAssert<
    IsTypeEqual<
        typeof api.requestAdmins,
        () => Promise<number>
    >
>();

typeAssert<
    IsTypeEqual<
        typeof api.requestUsers,
        () => Promise<string>
    >
>();

const promisifiedOldApi = promisifyAll(oldApi);

typeAssert<
    IsTypeEqual<
        typeof promisifiedOldApi.requestAdmins,
        () => Promise<number>
    >
>();

typeAssert<
    IsTypeEqual<
        typeof promisifiedOldApi.requestUsers,
        () => Promise<string>
    >
>();
