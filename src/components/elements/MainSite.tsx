import React, { useState, useEffect, ReactElement, useCallback } from 'react'
import {useHistory} from 'react-router-dom';
import { fruitList } from '../../static/fruit-info'


const MainSite = (): ReactElement => {

  const history = useHistory()
  const routeToItem = useCallback((id) => history.push(`/main/${id}`), [history])

  return (
    <div>
      {fruitList.map((item, index) =>
        <div key={index}>
          <button onClick={() => routeToItem(item.id)}>
            {item.name}
          </button>
        </div>
      )}
    </div>
  )
}

export default MainSite
