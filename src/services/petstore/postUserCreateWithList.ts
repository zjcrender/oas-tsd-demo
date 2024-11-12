import request from "@/utils/request";

const method = "POST";
const url = "/user/createWithList";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postUserCreateWithList(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
