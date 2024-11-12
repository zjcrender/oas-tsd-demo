import request from "@/utils/request";

const method = "GET";
const url = "/pet/findByTags";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function getPetFindByTags(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
