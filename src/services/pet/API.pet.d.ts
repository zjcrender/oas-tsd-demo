declare namespace API {
  declare namespace pet {
    interface Operations {
      /** List all pets */
      "GET /pets": {
        params: {
          /** How many items to return at one time (max 100) */
          "limit": number;
        };
        body: unknown;
        response: Pets;
      };

      /** Create a pet */
      "POST /pets": {
        params: unknown;
        body: unknown;
        response: unknown;
      };

      /** Info for a specific pet */
      "GET /pets/{petId}": {
        params: {
          /** The id of the pet to retrieve */
          "petId": string;
        };
        body: unknown;
        response: Pets;
      };
    }

    interface Pet {
      "id": number;

      "name": string;

      "tag": string;
    }

    type Pets = Pet[];
  }
}
