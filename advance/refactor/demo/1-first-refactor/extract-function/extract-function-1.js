/*
 * @Author: Hale
 * @Description: Extract Function 提炼函数 -> 简单示例
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();
    // print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}

{
  function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();
    printDetails(outstanding);

    function printDetails(outstanding) {
      console.log(`name: ${invoice.customer}`);
      console.log(`amount: ${outstanding}`);
    }
  }
}
