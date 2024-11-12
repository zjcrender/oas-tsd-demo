import request from "@/utils/request";

const method = "POST";
const url = "/pet";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postPet(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
