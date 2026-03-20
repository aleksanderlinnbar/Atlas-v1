import { organizations } from "../../../data/organizations";

export async function GET() {
  return Response.json(organizations);
}