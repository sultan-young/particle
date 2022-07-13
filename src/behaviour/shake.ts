/**
 * 将粒子进行抖动
 */

import { Parcicle } from "../particles";
import { BaseBehaviour } from "./base";

export class ShakeBehaviour extends BaseBehaviour {
  private range = 1;
  constructor(range: number) {
    super();
    this.range = range;
  }
  update(particles: Array<Parcicle>) {
    particles.forEach((item) => {
      item.offsetX = Math.random() * this.range;
      item.offsetY = Math.random() * this.range;
    });
  }
}
