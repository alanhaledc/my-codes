/*
 * @Author: Hale
 * @Description: Change Value to Reference 将值对象改为引用对象（与将引用对象改为值对象相反） -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  let customer = new Customer(customerData);
}

{
  let customer = customerRepository.get(customerData.id);
}
