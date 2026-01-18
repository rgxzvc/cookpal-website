import { forwardRef } from 'react'
import { Container } from './Container'

type SectionPadding = 'sm' | 'md' | 'lg' | 'xl'
type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  padding?: SectionPadding
  containerSize?: ContainerSize
  children: React.ReactNode
}

const paddings: Record<SectionPadding, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      padding = 'md',
      containerSize = 'xl',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    return (
      <section ref={ref} className={`${paddings[padding]} ${className}`} {...props}>
        <Container size={containerSize}>{children}</Container>
      </section>
    )
  }
)

Section.displayName = 'Section'
