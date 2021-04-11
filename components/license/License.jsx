import { IsLoading } from "components/IsLoading"
import { useLicense } from "hooks/useLicense"

const License = ({ user }) => {
  const { license, isError, isLoading } = useLicense()

  if (isLoading) return <IsLoading />

  return <>
    LICENSE
    <pre>
      {JSON.stringify(license, null, 2)}
    </pre>
  </>
}

export default License