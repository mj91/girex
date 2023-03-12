import { Grid, TextField, Button } from '@mui/material'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'

export const SearchUserForm = ({
  onSubmit,
}: {
  onSubmit: (username: string | undefined) => void
}) => {
  const [searchTerm, setSearchTerm] = useState<string>()
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.currentTarget.value),
    []
  )
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSubmit(searchTerm)
    },
    [onSubmit, searchTerm]
  )

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={10}>
          <TextField
            variant="outlined"
            placeholder="Enter username"
            fullWidth
            onChange={handleChange}
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Button type="submit" variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
