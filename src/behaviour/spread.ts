/**
 * 扩散行为，会将所有粒子扩散到给定位置
 */

import { Parcicle } from "../particles";
import { BaseBehaviour } from "./base";


enum BehaviourEunm {
    
}
export class SpreadBehaviour extends BaseBehaviour{
    

    constructor() {
        super();
        this.init()
    }
    init() {

    }
    update(particles: Parcicle[]): void {
        particles.forEach(item => {
        });
    }
}