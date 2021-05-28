/*
 * @Author: Hale
 * @Description: Isomorphism 同构
 * @Date: 2019/07/26
 * @LastEditTime: 2019/10/27
 */

// A pair of transformations between 2 types of objects that is structural in nature and no data is lost.
// For example, 2D coordinates could be stored as an array [2,3] or object {x: 2, y: 3}.

// Providing functions to convert in both directions makes them isomorphic.
const pairToCoords = (pair) => ({ x: pair[0], y: pair[1] });

const coordsToPair = (coords) => [coords.x, coords.y];

coordsToPair(pairToCoords([1, 2])); // [1, 2]

pairToCoords(coordsToPair({ x: 1, y: 2 })); // {x: 1, y: 2}
