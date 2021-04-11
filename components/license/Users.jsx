import { IsLoading } from "components/IsLoading"
import { useUsers } from "hooks/useUsers"

const Users = ({ user }) => {
  const { users, isLoading, isError } = useUsers()

  if (isLoading) return <IsLoading />

  return <>
    USERS
    <pre>
      {JSON.stringify(users, null, 2)}
    </pre>
  </>
}

export default Users