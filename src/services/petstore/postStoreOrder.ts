import request from "@/utils/request";

const method = "POST";
const url = "/store/order";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postStoreOrder(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
