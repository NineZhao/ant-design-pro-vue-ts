interface ResponseBodyType {
  _headers?: {};
  _status?: number;
  result: any;
  message: string;
  timestamp: number;
  code: number;
}

const responseBody: ResponseBodyType = {
  message: "",
  timestamp: 0,
  result: {},
  code: 0
};

export const builder = (
  data: {
    id?: string;
    name?: string;
    username?: string;
    password?: string;
    avatar?: string;
    status?: number;
    telephone?: string;
    lastLoginIp?: string;
    lastLoginTime?: number;
    creatorId?: string;
    createTime?: number;
    merchantCode?: string;
    deleted?: number;
    roleId?: string;
    token?: string;
    role?: {};
    captcha?: {};
    stepCode?: {};
  } | null,
  message: string | null | undefined,
  code = 0,
  headers = {}
) => {
  responseBody.result = data;
  if (message !== undefined && message !== null) {
    responseBody.message = message;
  }
  if (code !== undefined && code !== 0) {
    responseBody.code = code;
    responseBody._status = code;
  }
  if (headers !== null && typeof headers === "object" && Object.keys(headers).length > 0) {
    responseBody._headers = headers;
  }
  responseBody.timestamp = new Date().getTime();
  return responseBody;
};

export const getQueryParameters = (options: { url: string }) => {
  const url = options.url;
  const search = url.split("?")[1];
  if (!search) {
    return {};
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

export const getBody = (options: { body: string }) => {
  return options.body && JSON.parse(options.body);
};
