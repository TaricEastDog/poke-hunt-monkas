import React from 'react'

import classes from './About.module.css'

const about = () => {
  return (
    <div className={classes.Container}>
      <h2>Something about Poke Hunt monkaS</h2>
      <p>description lorem ipsum hehexd</p>
      <img src='https://lh3.googleusercontent.com/proxy/ybn5NH4XKjyAJWDqGVktKrAjptbH6KRIZcd9YjQJp7AjU2oI5QFeWPazltDVA2240v8fnD1rz39_oGVgBmuglu6HtJxXfTdYQIELSopyJeShrK9Utwv6rLBVW-cR' alt='Pikachu' />
      <img src='https://lh3.googleusercontent.com/proxy/MCsASxdbG80dElGu4rBZRcYAnQh8Xi24uZMFOFmRO4CGI88BBZTmtTQiaB35PE_s3MHDjkeeNPE3JNoM8hrGp6TG0rzFwdGAsCW9onmnMRgOM04Scvs' alt='squirlte' />
    </div>
  )
}

export default about
