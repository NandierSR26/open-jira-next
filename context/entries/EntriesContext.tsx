import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface contextProps {
    entries: Entry[];

    // methods
    addNewEntry: ( description: string ) => void;
    updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as contextProps)