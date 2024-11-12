import request from "@/utils/request";

const method = "POST";
const url = "/pet/{petId}/uploadImage";

type Define = API.Operation<
  API.petstore.Operations,
  typeof method,
  typeof url
>;

export function postPetByPetIdUploadImage(config: RequestConfig<Define>) {
  return request<Define>({
    ...config,
    url,
    method,
  });
}
