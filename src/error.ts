class HttpError extends Error {
    public status: number;
    public message: string;
    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

const apiNotFoundError = new HttpError("API not found", 404);
const invalidParameterError = new HttpError("Invalid parameter", 400);
const invalidLoginInformationError = new HttpError("Invalid id or password", 403);

export {
    HttpError,
    apiNotFoundError,
    invalidParameterError,
    invalidLoginInformationError
}