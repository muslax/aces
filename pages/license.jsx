import { LicenseLayout } from "components/layouts/LicenseLayout"
import License from "components/license/License"
import { ROUTES } from "config/routes"
import useUser from "hooks/useUser"
import Head from 'next/head'

const LicensePage = () => {
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>ACES License</title>
      </Head>
      <div className="aces-wrap mt-4">
        <div className="aces-geist pb-20">
          <License user={user} />
        </div>
      </div>
    </>
  )
}

LicensePage.suppressFirstRenderFlicker = true
LicensePage.redirectUnAuthenticatedTo = ROUTES.Home
LicensePage.getLayout = (page) => <LicenseLayout>{page}</LicenseLayout>
LicensePage.skeletonLoader = <LicenseLayout isLoading/>

export default LicensePage