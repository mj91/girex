import { Grid } from '@mui/material'
import { User } from '../../services/github-api/types'
import { UsersListItem } from './UsersListItem'

export const UsersList = ({ users }: { users: User[] }) => (
  <Grid container spacing={2}>
    {users.map((user) => (
      <Grid item xs={12} key={user.login}>
        <UsersListItem user={user} />
      </Grid>
    ))}
  </Grid>
)
