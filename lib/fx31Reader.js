const SmartBuffer = require('smart-buffer');

class Fx31Reader {
  constructor(buffer) {
    this.rawBuffer = new SmartBuffer(buffer);
  }

  get rawBuffer() {
    return this.rawBuffer;
  }

  readString() {
    const length = this.readLength();
    if (length) {
      return this.rawBuffer.readBuffer(length).toString();
    }
    return null;
  }

  readLength() {
    return this.rawBuffer.readUInt32BE();
  }

  readBuffer() {
    const length = this.readLength();
    if (length) {
      return this.rawBuffer.readBuffer(length);
    }
    return null;
  }
}

module.exports = Fx31Reader;
