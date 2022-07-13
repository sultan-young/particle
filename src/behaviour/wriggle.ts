/**
 * 所有粒子按照时间进行循环蠕动
 */

import { Parcicle } from "../particles";
import { BaseBehaviour } from "./base";

export class WriggleBehaviour extends BaseBehaviour {
  constructor() {
    super();
    this.init();
  }
  init() {}
  update(particles: Parcicle[]): void {
    particles.forEach((item) => {
      let dynamicRadius =
        3 + 2 * Math.sin(((Date.now() / 1000) % 1000) * item.radius);
      if (dynamicRadius < 0) {
        dynamicRadius = 0;
      }
      item.dynamicRadius = dynamicRadius;
    });
  }
}
