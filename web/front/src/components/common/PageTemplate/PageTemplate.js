import React from 'react'
import styles from './PageTemplate.module.scss';
import classNames from 'classnames/bind';

import Header from './Header';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
    return (
        <div className={cx('page-template')}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
};

export default PageTemplate;