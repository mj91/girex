import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

export const Explore = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={8} md={10}>
        <TextField
          variant="outlined"
          placeholder="Enter username"
          fullWidth
          size="small"
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Button variant="contained" fullWidth>
          Search
        </Button>
      </Grid>
    </Grid>
  )
}
