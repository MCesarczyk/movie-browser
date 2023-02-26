export const fixedEncodeURIComponentHelper = (str: string) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16);
  });
};

export const watForMsHelper = (ms: number) => new Promise(res => setTimeout(res, ms));
