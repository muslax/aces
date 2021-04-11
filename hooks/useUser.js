import { API_ROUTES } from "config/routes";
import useSWR from "swr";

export default function useUser() {
  const { data: user, mutate: mutateUser, error } = useSWR(API_ROUTES.User)

  const isLoading = !user && !error

  return { user, mutateUser, isLoading}
}