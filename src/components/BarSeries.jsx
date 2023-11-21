import styled from "styled-components"


const HeaderHome = styled.header`
font-family: sans-serif;
color: white;
background-color: #3f3f3f;
display: flex;

`
const HomeH1 = styled.h1 `
  position: relative;
  left: 12%;
  font-size: 23px;
`

export const BarSeries = () => {
  return (
    <HeaderHome>
          <HomeH1>Series</HomeH1>
    </HeaderHome>
  )
}
