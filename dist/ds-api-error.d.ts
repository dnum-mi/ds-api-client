export declare class DsApiError extends Error {
    static title: string;
    graphQlRequest: any;
    graphQlResponse: any;
    errors: {
        message?: string;
        locations?: any[];
        path?: any[];
        extensions?: any;
    }[];
    private _buildMessage;
    constructor(gqlResponse: any);
}
