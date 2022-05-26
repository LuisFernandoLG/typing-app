import styled from 'styled-components'
// numColumns, gap, autoFit, autoFill, minMax, columnWith
export const GridContainer = styled.div`
display:grid;
grid-template-columns: repeat( auto-fill, ${({ minMax }) => `minmax(${minMax})`});
gap:${({ gap }) => gap};
padding:${({ pd }) => pd};
`
