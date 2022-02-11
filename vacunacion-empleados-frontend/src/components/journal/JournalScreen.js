import React from 'react';
import { Sidebar } from './Sidebar';
import { EmpleadoScreen } from '../empleado/EmpleadoScreen';
import { NoteScreen } from '../notes/NoteScreen';
import { Slider } from 'antd';


export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar />

        
            <main>

                <NoteScreen /> 
                
                {/*<EmpleadoScreen /> */}

            </main>


        </div>
    )
}
