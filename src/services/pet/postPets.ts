import request from "@/utils/request";

const method = "POST";
const url = "/pets";

type Define = API.Operation<
  API.pet.Operations,
  typeof method,
  typeof url
>;

export function postPets(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
