import request from "@/utils/request";

const method = "GET";
const url = "/user/login";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function getUserLogin(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
