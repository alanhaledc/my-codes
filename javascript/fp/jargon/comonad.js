/*
 * @Author: Hale
 * @Description: Comonad 余单子
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// An object that has extract and extend functions.

const CoIdentity = (v) => ({
  val: v,
  extract() {
    return this.val;
  },
  extend(f) {
    return CoIdentity(f(this));
  },
});

// Extract takes a value out of a functor.

CoIdentity(1).extract(); // 1

// Extend runs a function on the comonad. The function should return the same type as the comonad.

CoIdentity(1).extend((co) => co.extract() + 1); //  === CoIdentity(2)
