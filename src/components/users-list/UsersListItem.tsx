import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { User } from '../../services/github-api'
import { UserRepos } from '../user-repos/UserRepos'

export const UsersListItem = ({ user }: { user: User }) => (
  <Accordion TransitionProps={{ unmountOnExit: true, mountOnEnter: true }}>
    <AccordionSummary expandIcon={<ExpandMore />}>
      {user.login}
    </AccordionSummary>
    <AccordionDetails>
      <UserRepos login={user.login} />
    </AccordionDetails>
  </Accordion>
)
