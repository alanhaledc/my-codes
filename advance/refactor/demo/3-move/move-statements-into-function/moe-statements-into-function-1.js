/*
 * @Author: Hale
 * @Description: Move Statements into Function 搬移语句到函数 -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.concat(photoData(person.photo));
  function photoData(aPhoto) {
    return [
      `<p>location: ${aPhoto.location}</p>`,
      `<p>date: ${aPhoto.date.toDateString()}</p>`,
    ];
  }
}

{
  result.concat(photoData(person.photo));
  function photoData(aPhoto) {
    return [
      `<p>title: ${aPhoto.title}</p>`,
      `<p>location: ${aPhoto.location}</p>`,
      `<p>date: ${aPhoto.date.toDateString()}</p>`,
    ];
  }
}
