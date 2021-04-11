import { useClients } from "hooks/useClients"

const Clients = ({ user }) => {
  const { clients, isLoading, isError } = useClients()

  return <>
    CLIENTS
    <pre>
      {JSON.stringify(clients, null, 2)}
    </pre>
  </>
}

export default Clients