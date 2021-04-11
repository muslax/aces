import { LicenseLayout } from "components/layouts/LicenseLayout"
import { ROUTES } from "config/routes"
import { useLicense } from "hooks/useLicense"
import useUser from "hooks/useUser"
import Head from 'next/head'

const Dashboard = () => {
  const { user } = useUser()
  const { license, isLoading, isError } = useLicense()

  return (
    <>
      <Head>
        <title>ACES Dashboard</title>
      </Head>
      <div className="aces-wrap mt-4">
        <div className="aces-geist pb-20">
          <pre>
            {JSON.stringify(license, null, 2)}
          </pre>
        </div>
      </div>
    </>
  )
}

Dashboard.suppressFirstRenderFlicker = true
Dashboard.redirectUnAuthenticatedTo = ROUTES.Login
Dashboard.getLayout = (page) => <LicenseLayout>{page}</LicenseLayout>
Dashboard.skeletonLoader = <LicenseLayout isLoading></LicenseLayout>
// Dashboard.skeletonLoader = <>SKELETON</>

export default Dashboard