/*
 * @Author: Hale
 * @Description: Inline Function 内联函数（和提炼函数相反） -> 简单示例 2
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
  }

  function gatherCustomerData(out, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
  }
}

{
  function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
  }
}
