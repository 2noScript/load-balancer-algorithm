import { Address } from "../models";
import { Base } from "./base";
export default class RoundRobin extends Base {
    currentIndex: number;
    pick(): Address;
}
