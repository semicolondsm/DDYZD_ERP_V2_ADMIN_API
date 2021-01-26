import { Schema } from "joi";

import { invalidParameterError } from "../../../error";
import { NextFunction, Request, Response } from "express";

const verify = async ({ schema, value }: { schema: Schema; value: any }) => {
  await schema.validateAsync(value);
};

export enum Property {
  BODY = "body",
  PARAMS = "params",
  HEADERS = "headers",
  QUERY = "query",
}

export default ({
  schema,
  property,
}: {
  schema: Schema;
  property: Property;
}) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await verify({ schema, value: req[property] });
    next();
  } catch {
    next(invalidParameterError);
  }
};