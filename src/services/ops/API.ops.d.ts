declare namespace API {
  declare namespace ops {
    interface Operations {
      /** GET /ops/features */
      "GET /ops/features": {
        params: unknown;
        body: unknown;
        response: featureListFeaturesResponse;
      };

      /** PUT /ops/features/:uuid */
      "PUT /ops/features/{uuid}": {
        params: {
          "uuid": string;
        };
        body: protobufStruct;
        response: featureUpdateFeatureResponse;
      };
    }

    interface featureFeature {
      "app_id": string;

      "args": string[];

      "enabled": boolean;

      "extra_data": protobufStruct;

      "method": featureFeatureFetchMethod;

      "requirements": string[];

      "type": featureFeatureType;

      "updated_at": string;

      "uuid": string;
    }

    type featureFeatureFetchMethod = "UNKNOWN_METHOD" | "GET";

    type featureFeatureType = "UNKNOWN_FEATURE_TYPE" | "URL";

    interface featureListFeaturesRequest {
    }

    interface featureListFeaturesResponse {
      "features": featureFeature[];
    }

    interface featureUpdateFeatureRequest {
      "extra_data": protobufStruct;

      "token": string;

      "uuid": string;
    }

    interface featureUpdateFeatureResponse {
      "feature": featureFeature;
    }

    /**
     * `ListValue` is a wrapper around a repeated field of values.
     *
     * The JSON representation for `ListValue` is JSON array.
     */
    interface protobufListValue {
      /** Repeated field of dynamically typed values. */
      "values": protobufValue[];
    }

    /**
     * `NullValue` is a singleton enumeration to represent the null value for the
     * `Value` type union.
     *
     *  The JSON representation for `NullValue` is JSON `null`.
     *
     *  - NULL_VALUE: Null value.
     */
    type protobufNullValue = "NULL_VALUE";

    /**
     * `Struct` represents a structured data value, consisting of fields
     * which map to dynamically typed values. In some languages, `Struct`
     * might be supported by a native representation. For example, in
     * scripting languages like JS a struct is represented as an
     * object. The details of that representation are described together
     * with the proto support for the language.
     *
     * The JSON representation for `Struct` is JSON object.
     */
    interface protobufStruct {
      /** Unordered map of dynamically typed values. */
      "fields": {};
    }

    /**
     * `Value` represents a dynamically typed value which can be either
     * null, a number, a string, a boolean, a recursive struct value, or a
     * list of values. A producer of value is expected to set one of that
     * variants, absence of any variant indicates an error.
     *
     * The JSON representation for `Value` is JSON value.
     */
    interface protobufValue {
      /** Represents a boolean value. */
      "bool_value": boolean;

      "list_value": protobufListValue;

      "null_value": protobufNullValue;

      /** Represents a double value. */
      "number_value": number;

      /** Represents a string value. */
      "string_value": string;

      "struct_value": protobufStruct;
    }
  }
}
