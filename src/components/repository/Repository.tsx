import { Star } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Grid, Box } from '@mui/material'
import { Repo } from '../../services/github-api'

export const Repository = ({ repo }: { repo: Repo }) => {
  return (
    <Card>
      <CardHeader
        title={
          <Grid container justifyContent="space-between">
            <Grid item>{repo.name}</Grid>
            <Grid item xs="auto" container>
              <Box mr={1}>{repo.stargazers_count}</Box>
              <Star fontSize="medium" />
            </Grid>
          </Grid>
        }
      />
      <CardContent>{repo.description}</CardContent>
    </Card>
  )
}
