/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const deepClone = obj => {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        const temp1 = [];
        for (let i = 0; i < obj.length; i += 1) {
            temp1.push(deepClone(obj[i]));
        }
        return temp1;
    }
    if (!Array.isArray(obj)) {
        const temp2 = {};
        const objKeys = Object.keys(obj);
        for (let i = 0; i < objKeys.length; i += 1) {
            temp2[objKeys[i]] = deepClone(obj[objKeys[i]]);
        }
        return temp2;
    }
    return obj;
};
const Pagination = ({ range, activePage, totalCount, itemsPerPage, onPaginate }) => {
    const perPageItems = itemsPerPage > totalCount ? totalCount : itemsPerPage;
    const numberOfPagesPossible = Math.ceil(totalCount / perPageItems);
    const pageRange = range > numberOfPagesPossible ? numberOfPagesPossible : range;

    const getPageNationItems = () => {
        const items = [];
        for (let i = 1; i <= pageRange; i += 1) {
            items.push(i);
        }
        return items;
    };
    const [paginationItems, setPaginationItems] = useState(getPageNationItems());
    useEffect(
        () => {
            const currentPaginationItems = deepClone(paginationItems);
            const pageRangeFirstItem = currentPaginationItems[0];
            const pageRangeLastItem = currentPaginationItems[pageRange - 1];
            if (activePage > pageRangeLastItem) {
                currentPaginationItems.push(activePage);
                currentPaginationItems.shift();
            } else if (activePage < pageRangeFirstItem) {
                currentPaginationItems.unshift(activePage);
                currentPaginationItems.pop();
            }
            setPaginationItems(currentPaginationItems);
        },
        [activePage]
    );

    const onPagination = pageNum => {
        if (pageNum === activePage || pageNum === 0 || pageNum > numberOfPagesPossible) {
            return;
        }
        if (typeof onPaginate === 'function') {
            onPaginate(pageNum);
        }
    };
    const buttonStyle = {
        height: '100%',
        padding: '0 12px',
        border: 'none',
        ':focus': {
            outline: 'none'
        },
        cursor: 'pointer'
    };
    const listStyle = {
        flex: 1,
        'margin-right': '8px',
        ':last-child': {
            'margin-right': '0px'
        }
    };
    const getStyleObject = pageId =>
        activePage === pageId
            ? {
                  background: '#bda770',
                  ...buttonStyle
              }
            : { background: '#f2f2f2', ...buttonStyle };

    const renderPaginationItems = () =>
        paginationItems.map(pageId => (
            <li key={pageId} style={listStyle}>
                <button
                    type="button"
                    className="_page_nv_btn"
                    onClick={() => {
                        onPagination(pageId);
                    }}
                    style={getStyleObject(pageId)}
                >
                    {pageId}
                </button>
            </li>
        ));

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        ._page_nv_btn:focus{
                            outline:none
                        }`
                }}
            />
            <ul
                style={{
                    display: 'flex',
                    'flex-direction': 'row',
                    height: '100%'
                }}
            >
                <li style={listStyle}>
                    <button
                        type="button"
                        className="_page_nv_btn"
                        style={{ ...buttonStyle, border: '1px solid #eee' }}
                        onClick={() => {
                            const pageId = activePage - 1;
                            onPagination(pageId);
                        }}
                    >
                        {`<`}
                    </button>
                </li>
                {renderPaginationItems()}
                <li style={{ ...listStyle, 'margin-right': '0px' }}>
                    <button
                        type="button"
                        className="_page_nv_btn"
                        style={{ ...buttonStyle, border: '1px solid #eee' }}
                        onClick={() => {
                            const pageId = activePage + 1;
                            onPagination(pageId);
                        }}
                    >
                        {`>`}
                    </button>
                </li>
            </ul>
        </>
    );
};

export default Pagination;
