import type { SerializedError } from "@reduxjs/toolkit";

interface AxiosBaseQueryError {
  status?: number;
  data?: unknown;
}

const getErrorMessage = (error: unknown): string => {
  if (!error) return "Something went wrong.";

  if (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error
  ) {
    const err = error as AxiosBaseQueryError;

    if (err.data && typeof err.data === "object" && "message" in err.data) {
      return (
        (err.data as { message?: string }).message ?? "Unknown server error"
      );
    }

    if (typeof err.data === "string") return err.data;

    return `Error ${err.status ?? "unknown"}`;
  }

  if (typeof error === "object" && error !== null && "message" in error) {
    const err = error as SerializedError;
    return err.message ?? "Something went wrong.";
  }

  if (error instanceof Error) return error.message;

  return String(error);
};

export default getErrorMessage;
