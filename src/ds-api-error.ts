export class DsApiError extends Error {
  static title = "GraphQL Error from DS-API.";
  graphQlRequest: any;
  graphQlResponse: any;
  errors: {
    message?: string;
    locations?: any[];
    path?: any[];
    extensions?: any;
  }[];

  private _buildMessage() {
    this.message = [
      DsApiError.title,
      ...this.errors.map((e) => e.message),
    ].join("\n");
  }

  constructor(e: any) {
    super(DsApiError.title);
    if ("response" in e) {
      const gqlResponse = e;
      this.graphQlRequest = gqlResponse.request;
      this.graphQlResponse = gqlResponse.response;
      console.log(
        JSON.stringify({
          title: DsApiError.title,
          error: gqlResponse.response,
        }),
      );
      this.errors =
        gqlResponse?.response?.errors || gqlResponse?.response?.error
          ? [{ message: gqlResponse.response.error }]
          : [];
    } else {
      this.errors = [e];
    }
    this._buildMessage();
  }
}
