declare namespace API {
  declare namespace petstore {
    interface Operations {
      /** Update an existing pet */
      "PUT /pet": {
        params: unknown;
        body: Pet;
        response: Pet;
      };

      /** Add a new pet to the store */
      "POST /pet": {
        params: unknown;
        body: Pet;
        response: Pet;
      };

      /** Finds Pets by status */
      "GET /pet/findByStatus": {
        params: {
          /** Status values that need to be considered for filter */
          "status": string;
        };
        body: unknown;
        response: Pet[];
      };

      /** Finds Pets by tags */
      "GET /pet/findByTags": {
        params: {
          /** Tags to filter by */
          "tags": string[];
        };
        body: unknown;
        response: Pet[];
      };

      /** Find pet by ID */
      "GET /pet/{petId}": {
        params: {
          /** ID of pet to return */
          "petId": number;
        };
        body: unknown;
        response: Pet;
      };

      /** Updates a pet in the store with form data */
      "POST /pet/{petId}": {
        params: {
          /** ID of pet that needs to be updated */
          "petId": number;

          /** Name of pet that needs to be updated */
          "name": string;

          /** Status of pet that needs to be updated */
          "status": string;
        };
        body: unknown;
        response: unknown;
      };

      /** Deletes a pet */
      "DELETE /pet/{petId}": {
        params: {
          "api_key": string;

          /** Pet id to delete */
          "petId": number;
        };
        body: unknown;
        response: unknown;
      };

      /** uploads an image */
      "POST /pet/{petId}/uploadImage": {
        params: {
          /** ID of pet to update */
          "petId": number;

          /** Additional Metadata */
          "additionalMetadata": string;
        };
        body: unknown;
        response: ApiResponse;
      };

      /** Returns pet inventories by status */
      "GET /store/inventory": {
        params: unknown;
        body: unknown;
        response: {};
      };

      /** Place an order for a pet */
      "POST /store/order": {
        params: unknown;
        body: Order;
        response: Order;
      };

      /** Find purchase order by ID */
      "GET /store/order/{orderId}": {
        params: {
          /** ID of order that needs to be fetched */
          "orderId": number;
        };
        body: unknown;
        response: Order;
      };

      /** Delete purchase order by ID */
      "DELETE /store/order/{orderId}": {
        params: {
          /** ID of the order that needs to be deleted */
          "orderId": number;
        };
        body: unknown;
        response: unknown;
      };

      /** Create user */
      "POST /user": {
        params: unknown;
        body: User;
        response: unknown;
      };

      /** Creates list of users with given input array */
      "POST /user/createWithList": {
        params: unknown;
        body: User[];
        response: User;
      };

      /** Logs user into the system */
      "GET /user/login": {
        params: {
          /** The user name for login */
          "username": string;

          /** The password for login in clear text */
          "password": string;
        };
        body: unknown;
        response: string;
      };

      /** Logs out current logged in user session */
      "GET /user/logout": {
        params: {};
        body: unknown;
        response: unknown;
      };

      /** Get user by user name */
      "GET /user/{username}": {
        params: {
          /** The name that needs to be fetched. Use user1 for testing. */
          "username": string;
        };
        body: unknown;
        response: User;
      };

      /** Update user */
      "PUT /user/{username}": {
        params: {
          /** name that needs to be updated */
          "username": string;
        };
        body: User;
        response: unknown;
      };

      /** Delete user */
      "DELETE /user/{username}": {
        params: {
          /** The name that needs to be deleted */
          "username": string;
        };
        body: unknown;
        response: unknown;
      };
    }

    interface Order {
      "id": number;

      "petId": number;

      "quantity": number;

      "shipDate": string;

      /** Order Status */
      "status": string;

      "complete": boolean;
    }

    interface Customer {
      "id": number;

      "username": string;

      "address": Address[];
    }

    interface Address {
      "street": string;

      "city": string;

      "state": string;

      "zip": string;
    }

    interface Category {
      "id": number;

      "name": string;
    }

    interface User {
      "id": number;

      "username": string;

      "firstName": string;

      "lastName": string;

      "email": string;

      "password": string;

      "phone": string;

      /** User Status */
      "userStatus": number;
    }

    interface Tag {
      "id": number;

      "name": string;
    }

    interface Pet {
      "id": number;

      "name": string;

      "category": Category;

      "photoUrls": string[];

      "tags": Tag[];

      /** pet status in the store */
      "status": string;
    }

    interface ApiResponse {
      "code": number;

      "type": string;

      "message": string;
    }
  }
}
