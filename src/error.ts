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

export {
    HttpError,
    apiNotFoundError,
}