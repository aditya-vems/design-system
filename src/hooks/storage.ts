export function setStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // silently fail (SSR, private browsing, storage full)
  }
}

export function getStorage<T>(key: string): T | null {
  try {
    const item = localStorage.getItem(key);
    return item !== null ? (JSON.parse(item) as T) : null;
  } catch {
    return null;
  }
}

export function removeStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch {
    // silently fail
  }
}

export function clearStorage(): void {
  try {
    localStorage.clear();
  } catch {
    // silently fail
  }
}

export function hasStorage(key: string): boolean {
  try {
    return localStorage.getItem(key) !== null;
  } catch {
    return false;
  }
}