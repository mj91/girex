import { Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import { useSearchUsers } from '../../contexts/github'
import { UsersList } from '../users-list/UsersList'
import { grey } from '@mui/material/colors'

export const SearchUserResults = ({ username }: { username: string }) => {
  const { data, error, isLoading } = useSearchUsers(username)

  if (error) return <>{error}</>

  if (isLoading) return <LinearProgress />

  if (!data || !data.items || !data.items.length)
    return (
      <Typography color={grey[700]} mt={2} mb={2}>
        &quot;{username}&quot; did not match any Github user
      </Typography>
    )

  return (
    <>
      <Typography color={grey[700]} mt={2} mb={2}>
        Showing users for &quot;{username}&quot;
      </Typography>
      <UsersList users={data.items} />
    </>
  )
}
