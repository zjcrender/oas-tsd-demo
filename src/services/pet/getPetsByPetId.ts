import request from "@/utils/request";

const method = "GET";
const url = "/pets/{petId}";

type Define = API.Operation<
  API.pet.Operations,
  typeof method,
  typeof url
>;

export function getPetsByPetId(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
