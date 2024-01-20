import React, { useState } from 'react';

const Pagination = ({ render, max }) => {
    const Render = render;
    const [page, setPage] = useState(1);
    const pages = Array.from({ length: max }, (_, index) => index + 1);

    const pageChange = (newPage) => {
        // Заборона виходу за межі максимальної сторінки та менше 1
        if (newPage >= 1 && newPage <= max) {
            setPage(newPage);
        }
    };

    return (
        <div>
            <Render page={page} />
            <div>
                {/* Кнопки "попередня" та "перша сторінка" */}
                <button onClick={() => pageChange(1)}>{'<<'}</button>
                <button onClick={() => pageChange(page - 1)}>{'<'}</button>

                {/* Виводимо кнопки для кожної сторінки */}
                {pages.map((page) => (
                    <button key={page} onClick={() => pageChange(page)}>
                        {page}
                    </button>
                ))}

                {/* Кнопки "наступна" та "остання сторінка" */}
                <button onClick={() => pageChange(page + 1)}>{'>'}</button>
                <button onClick={() => pageChange(max)}>{'>>'}</button>
            </div>
        </div>
    );
};

export default Pagination;