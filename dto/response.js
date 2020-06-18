module.exports = class Response {
  data;
  success;
  message;

  constructor(data = {}, success = true, message = null) {
    this.data = data;
    this.success = success;
    this.message = message;
  }

  setData(data) {
    this.data = data;
  }

  setMessage(message) {
    this.message = message;
  }

  setSuccess(success) {
    this.success = success;
  }
}
