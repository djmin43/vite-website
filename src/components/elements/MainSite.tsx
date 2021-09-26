import React, { useState, useEffect, ReactElement, useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import { fruitList } from '../../static/fruit-info'
import FruitAndVege from './FruitAndVege'
import BasicButton from './common/BasicButton'
import { bigButton } from '../../styles/common/BasicButton.styles'


const MainSite = (): ReactElement => {
  
  const clickItem = (item: string): void => {
    console.log(item)
  }

  const history = useHistory()
  const routeToItem = useCallback((id) => history.push(`/${id}`), [history])

  return (
    <div>
      {fruitList.map((item, index) =>
        <div key={index}>
          <button onClick={() => routeToItem(item.id)}>
            {item.name}
          </button>
        </div>
      )}
      asdf
    </div>
  )
}

export default MainSite
