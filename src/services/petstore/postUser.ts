import request from "@/utils/request";

const method = "POST";
const url = "/user";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postUser(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
