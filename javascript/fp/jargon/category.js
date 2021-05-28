/*
 * @Author: Hale
 * @Description: Category 范畴
 * @Date: 2019/10/26
 * @LastEditTime: 2019/10/26
 */

// A category in category theory is a collection of objects and morphisms between them.
// In programming, typically types act as the objects and functions as morphisms.

// To be a valid category 3 rules must be met:

// 1. There must be an identity morphism that maps an object to itself.
// Where a is an object in some category, there must be a function from a -> a.

// 2. Morphisms must compose. Where a, b, and c are objects in some category,
// and f is a morphism from a -> b, and g is a morphism from b -> c;
// g(f(x)) must be equivalent to (g • f)(x).

// 3. Composition must be associative f • (g • h) is the same as (f • g) • h

// Since these rules govern composition at very abstract level,
//  category theory is great at uncovering new ways of composing things.
