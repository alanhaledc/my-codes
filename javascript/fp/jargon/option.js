/*
 * @Author: Hale
 * @Description: option 选项
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// Option is a sum type with two cases often called Some and None.
// Option is useful for composing functions that might not return a value.

// Naive definition
const Some = (v) => ({
  val: v,
  map(f) {
    return Some(f(this.val));
  },
  chain(f) {
    return f(this.val);
  },
});

const None = () => ({
  map(f) {
    return this;
  },
  chain(f) {
    return this;
  },
});

// maybeProp :: (String, {a}) -> Option a
const maybeProp = (key, obj) =>
  typeof obj[key] === "undefined" ? None() : Some(obj[key]);

// Use chain to sequence functions that return Option s

// getItem :: Cart -> Option CartItem
const getItem = (cart) => maybeProp("item", cart);

// getPrice :: Item -> Option Number
const getPrice = (item) => maybeProp("price", item);

// getNestedPrice :: cart -> Option a
const getNestedPrice = (cart) => getItem(cart).chain(getPrice);

getNestedPrice({}); // None()
getNestedPrice({ item: { foo: 1 } }); // None()
getNestedPrice({ item: { price: 9.99 } }); // Some(9.99)

// Option is also known as Maybe. Some is sometimes called Just. None is sometimes called Nothing.
