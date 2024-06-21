import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import { Table } from '@tanstack/react-table'
import { DebouncedInput } from './DebouncedInput'
import { ExportButton } from './ExportButton'
import { LazyExportButton } from './LazyExportButton'

interface TableProps<T extends object> {
  data?: T[]
  filename?: string
  fullDataDownloader?: () => Promise<unknown[]>
  table: Table<T>
}

export const TableNavigation = <T extends object>({
  table,
  data,
  filename,
  fullDataDownloader,
}: TableProps<T>) => (
  <>
    <div className='mt-5 h-2' />
    <div className='flex w-full items-center justify-between'>
      <div className='flex w-full flex-col gap-6 sm:hidden'>
        <div className='flex w-full flex-1 justify-between sm:hidden'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className='relative inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-none dark:bg-[#1E254E] dark:text-white'
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className='relative ml-3 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-none dark:bg-[#1E254E] dark:text-white'
          >
            Next
          </button>
        </div>
        <div className='flex w-full justify-between sm:hidden'>
          <div className='w-full'>
            {data && <ExportButton data={data} filename='account-list' />}
          </div>
          <div className='w-full'>
            {fullDataDownloader && (
              <LazyExportButton query={fullDataDownloader} filename={filename ?? 'full-data'} />
            )}
          </div>
        </div>
      </div>
      <div className='hidden sm:flex sm:w-full sm:flex-col sm:items-center sm:justify-between sm:gap-4 lg:flex-row '>
        <div className='hidden justify-between  gap-2   sm:flex sm:flex-1'>
          {data && <ExportButton data={data} filename='account-list' />}
          <div className='flex w-full'>
            {fullDataDownloader && (
              <LazyExportButton query={fullDataDownloader} filename={filename ?? 'full-data'} />
            )}
          </div>
        </div>
        <div className='items-center gap-2 sm:flex sm:flex-1 sm:items-center sm:justify-end'>
          <button
            className='relative mr-[14px] inline-flex cursor-pointer items-center rounded-full bg-white p-2 text-sm font-medium text-[#DE67E4] hover:bg-gray-50 focus:z-20 dark:border-none dark:bg-[#1E254E] dark:text-white'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span>
              <span className='sr-only'>First</span>
              <ChevronDoubleLeftIcon className='size-5' aria-hidden='true' />
            </span>
          </button>
          <button
            className='relative mr-[14px] inline-flex cursor-pointer items-center rounded-full bg-white p-2 text-sm font-medium text-[#DE67E4] hover:bg-gray-50 focus:z-20 dark:border-none dark:bg-[#1E254E] dark:text-white'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span>
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='size-5' aria-hidden='true' />
            </span>
          </button>
          <button
            className='relative mr-[14px] inline-flex cursor-pointer items-center rounded-full bg-white p-2 text-sm font-medium text-[#DE67E4] hover:bg-gray-50 focus:z-20 dark:border-none dark:bg-[#1E254E] dark:text-white'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span>
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='size-5' aria-hidden='true' />
            </span>
          </button>
          <button
            className='relative mr-[14px] inline-flex cursor-pointer items-center rounded-full bg-white p-2 text-sm font-medium text-[#DE67E4] hover:bg-gray-50 focus:z-20 dark:border-none dark:bg-[#1E254E] dark:text-white'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span>
              <span className='sr-only'>Last</span>
              <ChevronDoubleRightIcon className='size-5' aria-hidden='true' />
            </span>
          </button>
          <span className='flex cursor-pointer items-center gap-1'>
            <div className='dark:text-white'>Page</div>
            <strong className='dark:text-white'>
              {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </strong>
          </span>
          <span className='flex items-center gap-1'>
            <div className='dark:text-white'>| Go to page:</div>
            <DebouncedInput
              type='number'
              onChange={(value) => {
                const page = value ? Number(value) - 1 : 0
                table.setPageIndex(page)
              }}
              delay={400}
              value={table.getState().pagination.pageIndex + 1}
              className='w-20 rounded-3xl border-none dark:bg-[#1E254E] dark:text-white'
            />
          </span>
          <select
            className='rounded-3xl border-none dark:bg-[#1E254E] dark:text-white'
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <div className='h-4' />
        </div>
      </div>
    </div>
  </>
)
