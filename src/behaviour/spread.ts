/**
 * 扩散行为，会将所有粒子扩散到给定位置
 */

import { Parcicle } from "../particles";
import { BaseBehaviour } from "./base";


enum BehaviourEunm {
    toTop,
    toBottom,
    toLeft,
    toRight,
    toAround,
}
export class SpreadBehaviour extends BaseBehaviour{
    static BehaviourEunm = BehaviourEunm;
    behaviourType = BehaviourEunm.toAround;

    constructor(behaviourType: BehaviourEunm) {
        super();
        this.behaviourType = behaviourType;
    }
    update(particles: Parcicle[]): void {
        particles.forEach(item => {
            this.toTop();
        });
    }
    toTop() {
        
    }
}