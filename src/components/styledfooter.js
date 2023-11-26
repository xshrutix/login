import { styled, IconButton } from '@mui/material';

export const StyledDropDown = styled(IconButton)(({ theme, show }) => ({
  transform: show ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
