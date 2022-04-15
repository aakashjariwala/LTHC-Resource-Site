/* eslint-disable import/no-cycle */
import { Grid, Typography } from '@mui/material'
import { useSiteDataContext } from '../../views/Main'

export default function landlordTable() {
  const { contactsText } = useSiteDataContext()

  return (
    <>
      <hr style={{ marginTop: 20 }} />
      <Typography variant="h6" textAlign="center" mt={5} mb={2}>
        Landlord Contacts
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(contactsText).map(([contactType, contacts]) => (
          <Grid item xs={12} sm={6} key={contactType}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, textAlign: 'center' }}
            >
              {contactType}
            </Typography>

            <Grid container spacing={1} columnSpacing={2} mt={1}>
              {contacts.map(({ name, phone, description }) => (
                <Grid item xs={6} key={`${name}${phone}`} mb={1}>
                  <Typography
                    variant="body2"
                    dangerouslySetInnerHTML={{ __html: name }}
                  />
                  {phone && (
                    <Typography variant="body2">
                      <a
                        href={`tel:${
                          phone.replace(/-/g, '').length === 7 ? '765' : ''
                        }${phone.replace(/-/g, '')}`}
                      >
                        {phone}
                      </a>
                    </Typography>
                  )}
                  {description && (
                    <Typography
                      variant="caption"
                      component="p"
                      color="text.secondary"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
