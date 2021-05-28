/*
 * @Author: Hale
 * @Description: Homomorphism 同态
 * @Date: 2019/10/27
 * @LastEditTime: 2019/10/27
 */

// A homomorphism is just a structure preserving map.
// In fact, a functor is just a homomorphism between categories as
// it preserves the original category's structure under the mapping.

A.of(f).ap(A.of(x)) == A.of(f(x));

Either.of(_.toUpper).ap(Either.of("oreos")) == Either.of(_.toUpper("oreos"));
