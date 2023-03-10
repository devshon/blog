import styled from 'styled-components'

const common = { display: 'flex' }

export const Column = styled.div`
  ${common}
  flex-direction: column;
`

export const Row = styled.div`
  ${common}
  flex-direction: row;
`

export const Grid = styled.div`
  display: grid;
`

export const Media = styled.div`
  @media ${(p) => p.theme.media.desktop} {
    width: 1060px;
    margin: 0 auto;
  }
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
  }
`
