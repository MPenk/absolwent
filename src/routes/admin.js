import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

export function AdminRoute({children}) {
    return (
        isLogin() ?
           <div>{ children }</div>
            : <Navigate to="/admin/login" />
    );
};