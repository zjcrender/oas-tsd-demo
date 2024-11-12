import request from "@/utils/request";

const method = "POST";
const url = "/pet/{petId}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postPetByPetId(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
