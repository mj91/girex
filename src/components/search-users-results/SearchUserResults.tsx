import { useSearchUsers } from '../../contexts/github'
import { UsersList } from '../users-list/UsersList'

export const SearchUserResults = ({ username }: { username: string }) => {
  const { data } = useSearchUsers(username)

  if (!data || !data.items) return null

  return <UsersList users={data.items} />
}
