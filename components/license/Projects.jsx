import { IsLoading } from "components/IsLoading"
import { useProjects } from "hooks/useProjects"

const Projects = ({ user }) => {
  const { projects, isLoading, isError } = useProjects()

  if (isLoading) return <IsLoading />

  return <>
    PROJECTS
    <pre>
    {JSON.stringify(projects, null, 2)}
    </pre>
  </>
}

export default Projects