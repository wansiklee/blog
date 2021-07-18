import React from 'react'
import { css } from '@emotion/react'

interface ICardListProps {
  children: React.ReactNode
}

const CardList: React.FC<ICardListProps> = (props) => {
  const { children } = props

  return (
    <section css={cardListStyle}>
      <div css={gridStyle}>{children}</div>
    </section>
  )
}

const cardListStyle = css``

const gridStyle = css`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: minmax(160px, auto);
  grid-gap: 2rem;
  margin-bottom: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(15.5rem, 1fr));
`

export default CardList
