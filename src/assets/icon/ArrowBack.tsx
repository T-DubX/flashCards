import { ComponentPropsWithRef } from 'react'

type Props = ComponentPropsWithRef<'svg'>

export const ArrowBack = ({ className, onClick, ...rest }: Props) => {
  return (
    <svg
      className={className}
      fill={'none'}
      height={'16'}
      onClick={onClick}
      viewBox={'0 0 16 16'}
      width={'16'}
      xmlns={'http://www.w3.org/2000/svg'}
      {...rest}
    >
      <path
        d={
          'M12.6667 7.33335H4.76008L7.18008 4.42669C7.29324 4.29054 7.34768 4.11502 7.33143 3.93874C7.31518 3.76245 7.22956 3.59985 7.09341 3.48669C6.95727 3.37353 6.78175 3.31909 6.60547 3.33534C6.42918 3.35159 6.26657 3.43721 6.15341 3.57335L2.82008 7.57335C2.79766 7.60517 2.7776 7.63859 2.76008 7.67335C2.76008 7.70669 2.76008 7.72669 2.71341 7.76002C2.6832 7.83646 2.66738 7.91783 2.66675 8.00002C2.66738 8.08221 2.6832 8.16358 2.71341 8.24002C2.71341 8.27335 2.71341 8.29335 2.76008 8.32669C2.7776 8.36145 2.79766 8.39487 2.82008 8.42669L6.15341 12.4267C6.2161 12.5019 6.29459 12.5625 6.38331 12.6039C6.47203 12.6454 6.56881 12.6668 6.66675 12.6667C6.82252 12.667 6.97347 12.6127 7.09341 12.5134C7.16092 12.4574 7.21672 12.3887 7.25762 12.3111C7.29852 12.2335 7.32372 12.1487 7.33177 12.0613C7.33982 11.974 7.33057 11.886 7.30454 11.8022C7.27851 11.7185 7.23622 11.6407 7.18008 11.5734L4.76008 8.66669H12.6667C12.8436 8.66669 13.0131 8.59645 13.1382 8.47143C13.2632 8.3464 13.3334 8.17683 13.3334 8.00002C13.3334 7.82321 13.2632 7.65364 13.1382 7.52862C13.0131 7.40359 12.8436 7.33335 12.6667 7.33335Z'
        }
        fill={'white'}
      />
    </svg>
  )
}
