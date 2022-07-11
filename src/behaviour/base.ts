import { Parcicle } from "../particles";

export abstract class BaseBehaviour {
     abstract update(particles: Array<Parcicle>): void;
}