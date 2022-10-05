import type { NextPage } from 'next'

import { Grid, Card, CardHeader } from '@mui/material';

import { Layout } from '../components/layouts';
import { EntriyList, NewEntry } from '../components/ui';

const HomePage: NextPage = () => {
  

  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendientes" />

            {/* agregar una nueva tarea */}
            {/* listado de las entradas */}
            <NewEntry />
            <EntriyList status='pending' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="En Progreso" />
            <EntriyList status='in-progress' />

          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Completadas" />
            <EntriyList status='finished' />
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}


export default HomePage