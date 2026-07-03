const KEY = "roomCode";
const EXPIRE_MS = 30 * 24 * 60 * 60 * 1000;

const listeners = new Set<() => void>();

// localStorage 변경을 같은 탭 안에서도 React에 알려주기 위한 구독자 목록.
// 브라우저의 storage 이벤트는 다른 탭/창에서 변경될 때만 발생한다.
function notify() {
  listeners.forEach((listener) => listener());
}

/**
 * 현재 저장된 방코드를 반환한다.
 * 값이 없거나, 만료됐거나, 파싱에 실패하면 null 을 반환하고 저장값을 정리한다.
 */
export function getRoomCodeSnapshot() {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(KEY);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);

    if (Date.now() > data.expiresAt) {
      localStorage.removeItem(KEY);
      return null;
    }

    return data.value as string;
  } catch {
    localStorage.removeItem(KEY);
    return null;
  }
}

/**
 * 방코드를 30일 만료 시간과 함께 저장된다.
 */
export function setRoomCode(roomCode: string) {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      value: roomCode,
      expiresAt: Date.now() + EXPIRE_MS,
    }),
  );

  notify();
}

/**
 * 저장된 방코드를 삭제한다.
 */
export function removeRoomCode() {
  localStorage.removeItem(KEY);
  notify();
}

/**
 * 방코드 저장값 변경을 구독한다.
 * 같은 탭 변경은 notify로, 다른 탭 변경은 storage 이벤트로 감지한다.
 */
export function subscribeRoomCode(listener: () => void) {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === KEY) listener();
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}
