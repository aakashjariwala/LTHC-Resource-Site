import { Container } from '@mui/material'
import { useEffect } from 'react'
import FirstView from '../../components/About'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources'
import Contacts from '../../components/Contacts'
import SiteData from '../../hooks/SiteData'

function Main() {
  const siteData = SiteData()

  useEffect(() => {}, [])

  return (
    <Container sx={{ py: 5 }}>
      <FirstView />
      <RequirementAccordion />
      <Resources />
      <Contacts />
    </Container>
  )
}

export default Main
