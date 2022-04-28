import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 30px;
color: white;
background-color: teal;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500
`

const Annoucement = () => {
  return (
    <Container>
        GET YOUR EXTRA DEALS ONLY TODAY! 
    </Container>
  )
}

export default Annoucement