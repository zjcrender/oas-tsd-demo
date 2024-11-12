import request from "@/utils/request";

const method = "DELETE";
const url = "/user/{username}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function deleteUserByUsername(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
