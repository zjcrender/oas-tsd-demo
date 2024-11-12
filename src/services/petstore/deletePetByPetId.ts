import request from "@/utils/request";

const method = "DELETE";
const url = "/pet/{petId}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function deletePetByPetId(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
