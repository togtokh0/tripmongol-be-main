class html {
  forgot(data: any) {
    return `${JSON.stringify(data)}`;
  }
  validation_mail(data: any) {
    return `${JSON.stringify(data.code)}`;
  }
  notf(data: any) {
    return `${JSON.stringify(data)}`;
  }
}
export default new html();
