import { LicenseLayout } from "components/layouts/LicenseLayout"
import Projects from "components/license/Projects"
import { ROUTES } from "config/routes"
import useUser from "hooks/useUser"
import Head from 'next/head'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>ACES Dashboard</title>
      </Head>
      <div className="aces-wrap mt-4">
        <div className="aces-geist pb-20">
          <Projects user={user} />
        </div>
      </div>
    </>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.redirectUnAuthenticatedTo = ROUTES.Home
Dashboard.getLayout = (page) => <LicenseLayout>{page}</LicenseLayout>
Dashboard.skeletonLoader = <LicenseLayout isLoading/>

export default Dashboard