import request from "@/utils/request";

const method = "GET";
const url = "/store/inventory";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function getStoreInventory(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
