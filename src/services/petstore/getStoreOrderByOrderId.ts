import request from "@/utils/request";

const method = "GET";
const url = "/store/order/{orderId}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function getStoreOrderByOrderId(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
