import { Typography, Stack, Box } from '@mui/material'
import VeteranAccordion from './VeteranAccordion'
import IndividualAccordion from './IndividualAccordion'
import FamilyAccordion from './FamilyAccordion'

export default function RequirementAccordion() {
  return (
    <Stack alignItems="center" my={5}>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Resources
      </Typography>
      <Box mt={4}>
        <FamilyAccordion />
        <IndividualAccordion />
        <VeteranAccordion />
      </Box>
    </Stack>
  )
}
