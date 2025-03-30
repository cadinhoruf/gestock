import {
  Header,
  HeaderLeft,
  HeaderSubtitle,
  HeaderTitle
} from '@/app/components/header-layout'
import { BreadcrumbSidebar } from '@/app/components/breadcrumb-sidebar'
import {
  Container,
  ContainerLayout,
  ContainerContent
} from '@/app/components/container-layout'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  return (
    <ContainerLayout>
      <BreadcrumbSidebar list={[{ name: 'Dashboard', href: '/dashboard' }]} />
      <ContainerContent>
        <Container>
          <Header>
            <HeaderLeft>
              <HeaderSubtitle>Visão geral dos dados</HeaderSubtitle>
              <HeaderTitle>Dashboard</HeaderTitle>
            </HeaderLeft>
          </Header>

          {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
            <Suspense fallback={<SummaryCardSkeleton />}>
              <TotalRevenueCard />
            </Suspense>
            <Suspense fallback={<SummaryCardSkeleton />}>
              <TodayRevenueCard />
            </Suspense>
          </div> */}
          {/* <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
            <Suspense fallback={<SummaryCardSkeleton />}>
              <TotalSalesCard />
            </Suspense>
            <Suspense fallback={<SummaryCardSkeleton />}>
              <TotalInStockCard />
            </Suspense>
            <Suspense fallback={<SummaryCardSkeleton />}>
              <TotalProductsCard />
            </Suspense>
          </div> */}

          {/* <div className='grid grid-cols-1 gap-4 md:h-[40vh] md:grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] md:gap-6'>
            <Suspense
              fallback={
                <Skeleton className='border border-border p-6 dark:bg-sidebar'>
                  <div className='space-y-2'>
                    <div className='h-5 w-[86.26px] rounded-md bg-gray-200' />
                    <div className='h-4 w-48 rounded-md bg-gray-200' />
                  </div>
                </Skeleton>
              }
            >
              <Last14DaysRevenueCard />
            </Suspense>
            <Suspense fallback={<MostSoldProductsSkeleton />}>
              <MostSoldProducts />
            </Suspense>
          </div> */}
          <div>
            <h1>Dashboard</h1>
          </div>
        </Container>
      </ContainerContent>
    </ContainerLayout>
  )
}
