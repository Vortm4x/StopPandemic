import React from 'react'

const React = require('react');

const styles = require('./admin-header.css'); 

const AdminHeader = () => {
    return (
        <header
            className={styles['admin-header']}
        >
            <div className={styles['logo-title']}>
                <div className={styles['logo']}>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={styles['border-shield']}
                    >
                        <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={styles['inner-shield']}
                    >
                        <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256z"></path>
                    </svg>
                    <svg
                        viewBox="0 0 1024 1024"
                        className={styles['inner-cross']}
                    >
                        <path d="M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z"></path>
                    </svg>
                </div>
                <div className={styles['title-text']}>
                    <span
                        className={` ${styles['title-1']} ${styles['title']} ${styles['title-left']} ${styles['header-text']} `}
                    >
                        STO
                    </span>
                    <span
                        className={` ${styles['title-2']} ${styles['title']} ${styles['title-left']} ${styles['header-text']} ${styles['title-right']} `}
                    >
                        P
                    </span>
                    <span
                        className={` ${styles['title-3']} ${styles['title']} ${styles['header-text']} ${styles['title-right']} `}
                    >
                        andemic
                    </span>
                </div>
            </div>
            <div className={styles['header-content']}>
                <span
                    className={` ${styles['header-content-text']} ${styles['header-text']} `}
                >
                    Admin dashboad
                </span>
            </div>
        </header>
    );
};

module.exports = AdminHeader;