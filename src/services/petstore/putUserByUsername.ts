import request from "@/utils/request";

const method = "PUT";
const url = "/user/{username}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function putUserByUsername(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
