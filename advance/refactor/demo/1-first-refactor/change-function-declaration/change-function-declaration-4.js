/*
 * @Author: Hale
 * @Description: Change Function Declaration 改变函数声明（函数重命名） -> 把参数改为属性
 * @Date: 2020/03/04
 * @LastEditTime: 2020/03/04
 */

{
  function inNewEngland(aCustomer) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(
      aCustomer.address.state
    );
  }

  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
}

{
  function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state;
    return xxNEWinNewEngland(stateCode);
  }

  function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }

  const newEnglanders = someCustomers.filter((c) => inNewEngland(c));
}

{
  function xxNEWinNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }

  const newEnglanders = someCustomers.filter((c) =>
    xxNEWinNewEngland(c.address.state)
  );
}

// rename
{
  function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
  }

  const newEnglanders = someCustomers.filter((c) =>
    inNewEngland(c.address.state)
  );
}
