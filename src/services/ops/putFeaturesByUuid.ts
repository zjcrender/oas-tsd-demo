import request from "@/utils/request";

const method = "PUT";
const url = "/ops/features/{uuid}";

type Define = API.Operation<
  API.ops.Operations,
  typeof method,
  typeof url
>;

export function putFeaturesByUuid(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
