import request from "@/utils/request";

const method = "PUT";
const url = "/pet";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function putPet(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
