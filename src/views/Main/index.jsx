/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-cycle */
import { Container, Typography } from '@mui/material'
import { createContext, useContext } from 'react'
import AboutView from '../../components/About'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources'
import Contacts from '../../components/Contacts'
import SiteData from '../../hooks/SiteData'
import Section from '../../components/Section'

const SiteDataContext = createContext()
export const useSiteDataContext = () => useContext(SiteDataContext)

function Main({ pdf, preview }) {
  const siteData = SiteData(preview, pdf)

  return (
    <SiteDataContext.Provider value={siteData}>
      <Container sx={{ py: 5 }}>
        {siteData.sectionsToShow.length === 0 ? (
          <Typography variant="h5">
            {!preview
              ? ''
              : !pdf
              ? 'Please upload pdf'
              : siteData.isParsing
              ? 'Loading...'
              : 'Unable to parse pdf...'}
          </Typography>
        ) : (
          siteData.sectionsToShow.flatMap((section) => {
            if (section.type === 'section')
              return [<Section key={section.text} section={section} />]
            if (section.type === 'about')
              return [<AboutView key={section.type} />]
            if (section.type === 'resources')
              return [<RequirementAccordion key={section.type} />]
            if (section.type === 'additional resources')
              return [<Resources key={section.type} />]
            if (section.type === 'contacts')
              return [<Contacts key={section.type} />]
            return []
          })
        )}
      </Container>
    </SiteDataContext.Provider>
  )
}

export default Main
