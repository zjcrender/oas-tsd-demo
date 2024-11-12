import request from "@/utils/request";

const method = "GET";
const url = "/ops/features";

type Define = API.Operation<
  API.ops.Operations,
  typeof method,
  typeof url
>;

export function getFeatures(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
