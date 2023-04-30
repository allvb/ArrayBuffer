export default class ArrayBufferConverter {
  static load(data) { // метод возвращает представление Uint16Array из объекта
    const strData = JSON.stringify(data);
    const buffer = new ArrayBuffer(strData.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < bufferView.length; i += 1) {
      bufferView[i] = strData.charCodeAt(i);
    }
    return bufferView;
  }

  static toString(buffer) { // метод возвращает объект JSON из объекта типа ArrayBuffer
    const bufferView = new Uint16Array(buffer);
    let obj = '';
    for (let i = 0; i < bufferView.length; i += 1) {
      obj += String.fromCharCode(bufferView[i]);
    }
    return obj;
  }
}
