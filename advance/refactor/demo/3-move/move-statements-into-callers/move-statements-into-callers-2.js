/*
 * @Author: Hale
 * @Description: Move Statements into Callers 搬移语句到调用者（与搬移语句到函数相反） -> 简单示例 2
 * @Date: 2020/03/06
 * @LastEditTime: 2020/03/06
 */

{
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
  }
  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
      });
  }
  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
  }
}

{
  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location}</p>\n`);
  }
  function listRecentPhotos(outStream, photos) {
    photos
      .filter((p) => p.date > recentDateCutoff())
      .forEach((p) => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write(`<p>location: ${p.location}</p>\n`);
        outStream.write("</div>\n");
      });
  }

  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
  }
}
