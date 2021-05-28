/*
 * @Author: Hale
 * @Description: Extract Function 提炼函数 -> 局部变量
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function printOwing(invoice) {
    let outstanding = 0;
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
    // calculate outstanding
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
    // record due date
    const today = Clock.today;
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}

{
  function printOwing(invoice) {
    let outstanding = 0;

    printBanner();

    // calculate outstanding
    for (const o of invoice.orders) {
      outstanding += o.amount;
    }
    // record due date
    const today = Clock.today;
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
    printDetail();

    // 放在里面（有局部变量）
    function printDetail() {
      console.log(`name: ${invoice.customer}`);
      console.log(`amount: ${outstanding}`);
      console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
    }
  }

  // 放在外面（无局部变量）
  function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
  }
}
