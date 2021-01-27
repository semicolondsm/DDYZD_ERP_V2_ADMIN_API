class HttpError extends Error {
    public status: number;
    public message: string;
    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

const invalidParameterError = new HttpError("Invalid parameter", 400);
const invalidTokenError = new HttpError("Invalid token", 401);
const invalidLoginInformationError = new HttpError("Invalid id or password", 403);
const notAccessTokenError = new HttpError("Authorization is not access token", 403);
const apiNotFoundError = new HttpError("API not found", 404);
const expiredTokenError = new HttpError("Expired token", 410);

export {
    HttpError,
    apiNotFoundError,
    invalidParameterError,
    invalidLoginInformationError,
    invalidTokenError,
    notAccessTokenError,
    expiredTokenError,
}