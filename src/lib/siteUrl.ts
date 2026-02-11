export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  // fallback aman untuk lokal saja
  if (!raw) {
    // jangan pernah fallback ke localhost jika production
    if (process.env.NODE_ENV === "production") return "https://tpcglobal.io";
    return "http://localhost:3000";
  }

  // normalize tanpa trailing slash
  return raw.replace(/\/+$/, "");
}

export function getAuthRedirectUrl(path = "/login") {
  const base = getSiteUrl();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function validateProductionRedirect(url: string) {
  if (process.env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(url)) {
    throw new Error("Production redirect URL tidak boleh localhost");
  }
  return url;
}
