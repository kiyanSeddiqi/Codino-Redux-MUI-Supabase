import { checkUserExists } from "../services/authServices";

export function useCheckUserExists() {
  async function check(identifier) {
    return await checkUserExists(identifier);
  }

  return { check };
}
