const SmartBuffer = require('smart-buffer');

class Fx31Writer {
  constructor() {
    this.rawBuffer = new SmartBuffer();
  }

  get rawBuffer() {
    return this.rawBuffer;
  }

  writeString(s) {
    if (s && s.length) {
      this.writeBuffer(new Buffer(s));
    } else {
      this.writeLength(0);
    }
  }

  writeLength(length) {
    this.rawBuffer.writeUInt32BE(length);
  }

  writeBuffer(buffer) {
    if (buffer && buffer.length) {
      this.writeLength(buffer.length);
      this.rawBuffer.writeBuffer(buffer);
    } else {
      this.writeLength(0);
    }
  }
}

module.exports = Fx31Writer;
