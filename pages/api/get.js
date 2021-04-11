import { getLicense } from "lib/queries/getLicense"
import withSession from "lib/session"

const ACCEPTED_QUERIES = {
  'get-license': getLicense,
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