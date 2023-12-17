import { IsTypeEqual, IsTypeAssignable, Not, typeAssert } from 'type-assertions';
import {
    ApiResponse,
    requestAdmins,
    requestUsers,
    requestCoffeeMachineQueueLength,
    requestCurrentServerTime
} from './index';
import {Admin} from "../6";

typeAssert<
    IsTypeAssignable<
        ApiResponse<number>,
        { status: 'success'; data: number }
    >
>();
typeAssert<
    IsTypeAssignable<
        ApiResponse<number>,
        { status: 'error'; error: string }
    >
>();
typeAssert<
    IsTypeAssignable<
        ApiResponse<boolean>,
        { status: 'success'; data: boolean }
    >
>();
typeAssert<
    IsTypeAssignable<
        ApiResponse<boolean>,
        { status: 'error'; error: string }
    >
>();
typeAssert<
    Not<
        IsTypeEqual<
            ApiResponse<number>,
            unknown
        >
    >
>();

typeAssert<
    IsTypeEqual<
        typeof requestAdmins,
        (
            callback: (response: ApiResponse<Admin[]>) => void
        ) => void
    >
>();

typeAssert<
    IsTypeEqual<
        typeof requestUsers,
        (
            callback: (response: ApiResponse<User[]>) => void
        ) => void
    >
>();

typeAssert<
    IsTypeEqual<
        typeof requestCurrentServerTime,
        (
            callback: (response: ApiResponse<number>) => void
        ) => void
    >
>();

typeAssert<
    IsTypeEqual<
        typeof requestCoffeeMachineQueueLength,
        (
            callback: (response: ApiResponse<number>) => void
        ) => void
    >
>();
