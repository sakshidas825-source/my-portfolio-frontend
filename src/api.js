const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function getPortfolio() {
  const res = await fetch(`${BASE_URL}/api/portfolio`);
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
}
