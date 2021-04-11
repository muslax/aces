import { LicenseLayout } from "components/layouts/LicenseLayout"
import Billing from "components/license/Billing"
import { ROUTES } from "config/routes"
import useUser from "hooks/useUser"
import Head from 'next/head'

const BillingPage = () => {
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>ACES Billing</title>
      </Head>
      <div className="aces-wrap mt-4">
        <div className="aces-geist pb-20">
          <Billing user={user} />
        </div>
      </div>
    </>
  )
}

BillingPage.suppressFirstRenderFlicker = true
BillingPage.redirectUnAuthenticatedTo = ROUTES.Home
BillingPage.getLayout = (page) => <LicenseLayout>{page}</LicenseLayout>
BillingPage.skeletonLoader = <LicenseLayout isLoading/>

export default BillingPage