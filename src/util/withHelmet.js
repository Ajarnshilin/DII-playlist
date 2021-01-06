import React from 'react'
import { Helmet } from 'react-helmet'

function withHelmet (title) {
  return Component => props => (
    <>
      <Helmet>
      <link href='https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&family=Nunito:wght@300&display=swap' rel='stylesheet' />
        <title>{title}</title>
      </Helmet>
      <Component {...props} />
    </>
  )
}

export default withHelmet