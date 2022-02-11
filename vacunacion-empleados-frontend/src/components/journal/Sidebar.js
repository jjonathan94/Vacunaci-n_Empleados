import React from 'react'
import { useDispatch } from 'react-redux'

import { JournalEntries } from './JournalEntries'
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">     
            <div className="journal__new-entry">
                <p className="mt-5">
                    Reto Kruger
                </p>
            </div>
        </aside>
    )
}
