import Grid from '@mui/material/Grid'
import { useState } from 'react'
import { SearchUserForm } from '../../forms/search-user-form/SearchUserForm'
import { SearchUserResults } from '../../search-users-results/SearchUserResults'

export const Explore = () => {
  const [username, setUsername] = useState<string>()

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SearchUserForm onSubmit={setUsername} />
      </Grid>
      <Grid item xs={12}>
        {username && <SearchUserResults username={username} />}
      </Grid>
    </Grid>
  )
}
