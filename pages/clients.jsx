import { LicenseLayout } from "components/layouts/LicenseLayout"
import Clients from "components/license/Clients"
import { ROUTES } from "config/routes"
import useUser from "hooks/useUser"
import Head from 'next/head'

const ClientsPage = () => {
  const { user } = useUser()

  return (
    <>
      <Head>
        <title>ACES Clients</title>
      </Head>
      <div className="aces-wrap mt-4">
        <div className="aces-geist pb-20">
          <Clients user={user} />
        </div>
      </div>
    </>
  )
}

ClientsPage.suppressFirstRenderFlicker = true
ClientsPage.redirectUnAuthenticatedTo = ROUTES.Home
ClientsPage.getLayout = (page) => <LicenseLayout>{page}</LicenseLayout>
ClientsPage.skeletonLoader = <LicenseLayout isLoading/>

export default ClientsPage