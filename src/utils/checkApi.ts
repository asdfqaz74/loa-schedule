import { ApiErrorResponse } from "@/types/api.types";

export function checkUrl(
  url: string | undefined,
  name = "환경변수",
): asserts url is string {
  if (!url) {
    throw new Error(`${name}가 설정되지 않았습니다.`);
  }
}

function isApiErrorResponse(result: unknown): result is ApiErrorResponse {
  if (!result || typeof result !== "object") return false;

  const value = result as Partial<ApiErrorResponse>;

  return typeof value.code === "string" && typeof value.message === "string";
}

export function checkError<TData>(
  response: Response,
  result: TData | ApiErrorResponse | unknown,
  fallbackMessage = "요청 처리에 실패했습니다.",
): asserts result is TData {
  if (!response.ok) {
    if (isApiErrorResponse(result)) {
      throw new Error(`[${result.code}] ${result.message}`);
    }

    throw new Error(`${fallbackMessage} (${response.status})`);
  }

  if (isApiErrorResponse(result)) {
    throw new Error(`[${result.code}] ${result.message}`);
  }
}
