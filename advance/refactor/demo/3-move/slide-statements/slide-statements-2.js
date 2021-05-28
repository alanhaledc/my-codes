/*
 * @Author: Hale
 * @Description: Slide Statement 移动语句 -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  function fn() {
    let result;
    if (availableResources.length === 0) {
      result = createResource();
      allocatedResources.push(result);
    } else {
      result = availableResources.pop();
      allocatedResources.push(result);
    }
    return result;
  }
}

{
  function fn() {
    let result;
    if (availableResources.length === 0) {
      result = createResource();
    } else {
      result = availableResources.pop();
    }
    allocatedResources.push(result);
    return result;
  }
}
