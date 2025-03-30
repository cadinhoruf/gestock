import { cn } from '@/lib/utils'

const ContainerLayout = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('mr-4 flex w-full flex-col pl-4', className)}>
      {children}
    </div>
  )
}

const ContainerContent = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn('custom-container mb-2 h-full', className)}>
      {children}
    </div>
  )
}

const Container = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'h-full w-full space-y-8 rounded-lg border bg-background p-8',
        className
      )}
    >
      {children}
    </div>
  )
}

export { ContainerLayout, ContainerContent, Container }
