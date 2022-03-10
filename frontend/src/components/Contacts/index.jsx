import { Grid, Typography } from '@mui/material'
import Contacts from '../../constants/contacts.json'

export default function landlordTable() {
  return (
    <>
      <hr style={{ marginTop: 20 }} />
      <Typography variant="h6" textAlign="center" mt={5} mb={2}>
        Landlord Contacts
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(Contacts).map(([contactType, contacts]) => (
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
                  <Typography variant="body2">{name}</Typography>
                  <Typography variant="body2">
                    <a
                      href={`tel:${
                        phone.replace(/-/g, '').length === 7 ? '765' : ''
                      }${phone.replace(/-/g, '')}`}
                    >
                      {phone}
                    </a>
                  </Typography>
                  <Typography
                    variant="caption"
                    component="p"
                    color="text.secondary"
                  >
                    {description}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
    // <List
    //   sx={{
    //     maxWidth: 720,
    //     bgcolor: 'background.paper',
    //     position: 'relative',
    //     overflow: 'auto',
    //     maxHeight: 600,
    //     '& ul': { padding: 0 },
    //   }}
    //   subheader={<li />}
    // >
    //   {['Apartments'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftApartment.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText // The left column in desktop view
    //               sx={{ maxWidth: 240 }} // Sets margins for text so it doesn't spill into right column
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText // The right column in desktop view
    //               // Sets right column offset from the left
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               // Uses indexof to avoid having to use a counter
    //               // Need to make sure # of elements in right = left
    //               // and if it doesn't, make an empty item at the end
    //               // of the respective json category in apartments.js
    //               // This is the case for all of the desktop view
    //               // info.
    //               primary={rightApartment[leftApartment.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>
    //                     {rightApartment[leftApartment.indexOf(item)].phone}
    //                   </div>
    //                   <div>
    //                     {
    //                       rightApartment[leftApartment.indexOf(item)]
    //                         .description
    //                     }
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Subsidized Housing'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftSubsidized.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightSubsidized[leftSubsidized.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>
    //                     {rightSubsidized[leftSubsidized.indexOf(item)].phone}
    //                   </div>
    //                   <div>
    //                     {
    //                       rightSubsidized[leftSubsidized.indexOf(item)]
    //                         .description
    //                     }
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Mobile Home Parks'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftMobile.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightMobile[leftMobile.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightMobile[leftMobile.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightMobile[leftMobile.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Private Landlords'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftLords.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightLords[leftLords.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightLords[leftLords.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightLords[leftLords.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Complexes and Rentals'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftComplex.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightComplex[leftComplex.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightComplex[leftComplex.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightComplex[leftComplex.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    // </List>
  )
}
