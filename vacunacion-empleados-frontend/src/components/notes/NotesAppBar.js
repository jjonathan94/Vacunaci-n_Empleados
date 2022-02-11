import React from 'react'

import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const hanleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div className="notes__appbar">

            <i className="far fa-moon-plus"></i>
            <span> Bienvenido al Sitema de Registro de Empleados </span>

            <button
                className="btn"
                onClick={hanleLogout}
            >
                Logout
            </button>
        </div>
    )
}
