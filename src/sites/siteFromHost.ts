export type Site = "landing" | "profile" | "querium";

const SITES: Site[] = ["landing", "profile", "querium"];

/**
 * One build serves three hostnames, so the entry point picks a site from the
 * subdomain instead of the path:
 *
 *   underway.sh / www  -> landing
 *   alex.underway.sh   -> Alex's profile (the router in main.tsx)
 *   q.underway.sh      -> Querium
 *
 * `?site=` overrides it, which is the only way to preview all three from a
 * single dev server on localhost.
 */
export const resolveSite = (
  hostname: string = window.location.hostname,
  search: string = window.location.search,
): Site => {
  const forced = new URLSearchParams(search).get("site") as Site | null;
  if (forced && SITES.includes(forced)) return forced;

  const sub = hostname.toLowerCase().split(".")[0];
  if (sub === "q") return "querium";
  if (sub === "alex") return "profile";
  return "landing";
};
