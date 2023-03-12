import { Grid, LinearProgress } from '@mui/material'
import { useUsersRepos } from '../../contexts/github'
import { User } from '../../services/github-api'
import { Repository } from '../../components/repository/Repository'

export const UserRepos = ({ login }: Pick<User, 'login'>) => {
  const { data, isLoading, error } = useUsersRepos(login)

  if (error) return <>{error}</>

  if (isLoading) return <LinearProgress />

  if (!data) return null

  if (!data.length)
    return <>No repositories found for user &quot;{login}&quot;</>

  return (
    <Grid container spacing={1}>
      {data.map((repo) => (
        <Grid key={repo.name} item xs={12}>
          <Repository repo={repo} />
        </Grid>
      ))}
    </Grid>
  )
}
