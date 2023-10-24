import React, { useMemo } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
// import MOCK_DATA from '../final.json';
import { COLUMNS } from '../constants/Columns';
import './table.css';

function PaginationTable({ resendData, tableData }) {
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => tableData, []);
  


  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0, // Начальный индекс страницы
        pageSize: 10, // Количество элементов на странице
      },
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    state: { pageIndex },
  } = tableInstance;

  return (
    <>
      <main className="result">
      <section className="root__section">
        <h1 className='root__header'>РЕЗУЛЬТАТ АНАЛИЗА</h1>
        <p className='root__subtitle'>Подсказка для уточнения анализа</p>
        <button onClick={resendData} class='root__button'>ПОВТОРИТЬ</button>
      </section>
    </main>
        <div className='filterTable'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span>⇅</span>
                    ) : (
                      <span>⇅</span>
                    )
                  ) : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button className='previous' onClick={() => previousPage()} disabled={!canPreviousPage}>
          НАЗАД
        </button>
        <span className='pagesCount'>
          Страница{' '}
          <strong>
            {pageIndex + 1} of {Math.ceil(data.length / tableInstance.state.pageSize)}
          </strong>
        </span>
        <button className='next' onClick={() => nextPage()} disabled={!canNextPage}>
          ВПЕРЕД
        </button>
      </div>
    </div>
    </>

  );
}

export default PaginationTable;