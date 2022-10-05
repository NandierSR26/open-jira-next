import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { DragEvent, FC, useContext } from 'react'
import { UIContext } from '../../context/ui'
import { Entry } from '../../interfaces'

interface Props { 
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext( UIContext )

    const onDragStart = ( e:DragEvent ) => {
        e.dataTransfer.setData('text', entry._id)

        // TODO: modificar el estado, para indicar que estoy haciendo drag
        startDragging();
        
    }

    const onDragEnd = () => {
        endDragging()
    }

    return (
        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }} >{ entry.description }</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
