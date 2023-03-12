import { User } from '../../services/github-api/types'

export const UsersList = ({ users }: { users: User[] }) => (
  <>
    {users.map((user) => (
      <div key={user.login}>{user.login}</div>
    ))}
  </>
)
