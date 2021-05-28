/*
 * @Author: Hale
 * @Description: Move Statements into Callers 搬移语句到调用者（与搬移语句到函数相反） -> 简单示例
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  emitPhotoData(outStream, person.photo);
  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
  }
}

{
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>location: ${person.photo.location}</p>\n`);
  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
  }
}
