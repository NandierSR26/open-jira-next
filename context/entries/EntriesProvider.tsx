import { FC, ReactNode, useReducer, useEffect } from 'react';

import { entriesApi } from '../../apis';
import { useSnackbar } from 'notistack';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

interface Props {
    children: ReactNode
}

export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}
export const EntriesProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
    const { enqueueSnackbar } = useSnackbar();

    const addNewEntry = async( description: string ) => {
        
        const { data } = await entriesApi.post<Entry>('/entries', { description })
        dispatch({ type: '[Entries] - Add-Entry', payload: data })
    }

    const updateEntry = async( { _id, description, status }: Entry, showSnackbar = false ) => {
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ _id }`, { description, status })
            dispatch({ type: '[Entries] - Entry-Updated', payload: data })

            // mostrar snakbar
            if( showSnackbar ) {
                enqueueSnackbar('Entrada Actualizada', {
                    variant: 'success',
                    autoHideDuration: 1500,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
            }
            
        } catch (error) {
            console.log({error});
        }
    }

    const refreshEntries = async() => {
        try {
            const { data } = await entriesApi.get<Entry[]>('/entries');
            dispatch({ type: '[Entries] - Refresh-Data', payload: data })
        } catch (error) {
            console.log({error});
            
        }
    }

    useEffect(() => {
        refreshEntries()
    }, [])
    

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}