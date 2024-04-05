import { ArrowLeft } from '@/assets/icon/ArrowLeft'
import { ArrowRight } from '@/assets/icon/ArrowRight'
import { Select, SelectProps } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './pagination.module.scss'

import { DOTS, usePagination } from './usePagination'

export type PaginationProps = {
  className?: string
  currentPage: number
  onChangePage: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
} & SelectProps
export const Pagination = ({
  className,
  currentPage,
  onChangePage,
  pageSize,
  siblingCount = 1,
  totalCount,
  ...rest
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    pageSize,
    siblingCount,
    totalCount,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNextHandler = () => {
    onChangePage(currentPage + 1)
  }

  const onPreviousHandler = () => {
    onChangePage(currentPage - 1)
  }

  const changePageHandler = (pageNumber: number) => () => onChangePage(pageNumber)

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === paginationRange[paginationRange.length - 1]

  const classNames = {
    buttonLeft: clsx(s.item, { [s.disabled]: isFirstPage }),
    buttonRight: clsx(s.item, { [s.disabled]: isLastPage }),
    dots: clsx(s.item, s.dots),
    wrapper: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.wrapper}>
      <div className={s.wrapperButtons}>
        <button
          className={classNames.buttonLeft}
          disabled={isFirstPage}
          onClick={onPreviousHandler}
        >
          <ArrowLeft className={s.arrowLeft} />
        </button>
        {paginationRange.map((pageNumber, i) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <span className={classNames.dots} key={i}>
                &#8230;
              </span>
            )
          }

          // Render our Page Pills
          return (
            <button
              className={clsx(s.item, pageNumber === currentPage && s.selected)}
              key={i}
              onClick={changePageHandler(pageNumber)}
            >
              <Typography
                as={'span'}
                className={clsx(s.item, pageNumber === currentPage && s.selected)}
                variant={'body2'}
              >
                {pageNumber}
              </Typography>
            </button>
          )
        })}
        <button className={classNames.buttonRight} disabled={isLastPage} onClick={onNextHandler}>
          <ArrowRight className={s.arrowRight} />
        </button>
      </div>

      <Typography as={'div'} className={s.wrapperSelect} variant={'body2'}>
        Показать
        <Select {...rest} pagination />
        на странице
      </Typography>
    </div>
  )
}
