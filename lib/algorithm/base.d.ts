import { Address, Pool } from "../models";
export declare class Base {
    private readonly _pool;
    constructor(pool: Pool);
    pick(): Address;
    get pool(): Pool;
    get size(): number;
}
