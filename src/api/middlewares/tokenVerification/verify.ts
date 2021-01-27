import { string } from "joi";
import jwt from "jsonwebtoken";
import { invalidTokenError, notAccessTokenError } from "../../../error";
import { TokenPayload } from "../../../interfaces";

function tokenDataTypeCheck(token: string) {
    if(!token || typeof token !== "string") {
        throw invalidTokenError;
    }
}

function tokenBearerCheck(splitToken: string[]) {
    if(splitToken[0] !== "Bearer") {
        throw invalidTokenError;
    }
}

function tokenAccessCheck(payload: TokenPayload) {
    if(payload.type !== "access") {
        throw notAccessTokenError;
    }
}

export default ({ token, jwtSecret }: { token: string; jwtSecret: string }) => {
    tokenDataTypeCheck(token);
    const splitToken = token.split(" ");
    tokenBearerCheck(splitToken);
    const payload: any = jwt.verify(splitToken[1], jwtSecret);
    tokenAccessCheck(payload);
    return payload;
}