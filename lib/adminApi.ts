const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost:5000";

const TOKEN_KEY = "kbs_admin_token";
const USER_KEY = "kbs_admin_user";

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function getStoredUser(): { id: number; name: string; email: string; role: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as { id: number; name: string; email: string; role: string }) : null;
  } catch {
    return null;
  }
}

export function setStoredUser(user: { id: number; name: string; email: string; role: string }) {
  if (typeof window === "undefined") return;
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

interface FetchOptions extends RequestInit {
  requireAuth?: boolean;
  skipAuthRedirect?: boolean;
}

export async function adminFetch(
  path: string,
  options: FetchOptions = {}
): Promise<Response> {
  const { requireAuth = true, skipAuthRedirect = false, headers, ...rest } = options;

  const mergedHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  if (requireAuth) {
    const token = getToken();
    if (!token) {
      if (!skipAuthRedirect && typeof window !== "undefined") {
        window.location.href = "/admin/login";
      }
      throw new Error("Not authenticated");
    }
    mergedHeaders["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...rest,
    headers: mergedHeaders,
  });

  if (res.status === 401 || res.status === 403) {
    clearToken();
    if (!skipAuthRedirect && typeof window !== "undefined") {
      window.location.href = "/admin/login";
    }
  }

  return res;
}

export async function adminFetchJson<T = unknown>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const res = await adminFetch(path, options);
  const text = await res.text();
  let data: T;
  try {
    data = text ? (JSON.parse(text) as T) : (undefined as unknown as T);
  } catch {
    throw new Error("Invalid JSON response");
  }
  if (!res.ok) {
    const err = (data as { message?: string })?.message || `Request failed with status ${res.status}`;
    throw new Error(err);
  }
  return data;
}
