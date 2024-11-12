import request from "@/utils/request";

const method = "GET";
const url = "/pets";

type Define = API.Operation<
  API.pet.Operations,
  typeof method,
  typeof url
>;

export function getPets(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
