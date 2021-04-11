import { getClients } from "lib/queries/getClients"
import { getLicense } from "lib/queries/getLicense"
import { getProjects } from "lib/queries/getProjects"
import { getUsers } from "lib/queries/getUsers"
import withSession from "lib/session"

const ACCEPTED_QUERIES = {
  'get-license': getLicense,
  'get-clients': getClients,
  'get-users': getUsers,
  'get-projects': getProjects,

  // 'get-groups': getGroups,
  // 'get-guests': getGuests,
  // 'get-license': getLicense,
  // 'get-modules': getModules,
  // 'get-modules-meta': getModulesMeta,
  // 'get-persona': getPersona,
  // 'get-personae': getPersonae,
  // 'get-personae-with-schedules': getPersonaeWithSchedules,
  // 'get-credentials': getPersonaeCredentials,
  // 'get-project': getProject,
  // 'get-simple-projects': getSimpleProjects,
  // 'get-user': getUser,
}

export default withSession(async (req, res) => {
  // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  const apiUser = req.session.get('user')
  const { q } = req.query

  if (!apiUser || apiUser.isLoggedIn === false) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }

  console.log(new Date(), q)

  if (!q || !ACCEPTED_QUERIES[q]) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  const task = ACCEPTED_QUERIES[q]

  return task (apiUser, req.query, res)
})