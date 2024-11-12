import request from "@/utils/request";

const method = "DELETE";
const url = "/store/order/{orderId}";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function deleteStoreOrderByOrderId(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
