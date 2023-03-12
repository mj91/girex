import { Star } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Grid, Box, Link } from '@mui/material'
import { Repo } from '../../services/github-api'

export const Repository = ({ repo }: { repo: Repo }) => {
  const { name, stargazers_count, html_url, description } = repo
  return (
    <Card>
      <CardHeader
        title={
          <Grid container justifyContent="space-between">
            <Grid item>
              <Link href={html_url} target="blank">
                {name}
              </Link>
            </Grid>
            <Grid item xs="auto" container>
              <Box mr={1}>{stargazers_count}</Box>
              <Star fontSize="medium" />
            </Grid>
          </Grid>
        }
      />
      {description && <CardContent>{description}</CardContent>}
    </Card>
  )
}
