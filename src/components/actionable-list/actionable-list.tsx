'use client'

import './actionable-list.css'

interface Props {
  dataList: {left: string, right: string, id: string}[] | undefined
  action: (value: string) => void
  actionBgColor?: string
}

const ActionableList = ({dataList, action, actionBgColor}: Props) => {
  return (
    <div className='actionable-list'>
      {
        dataList ? dataList.map((item, i) => (
          <div key={i} className='actionable-item'>
            <div className='actionable-item-content'>
              <p>{item.left}</p>
              <p>{item.right}</p>
            </div>
            <div className='action-button' style={{backgroundColor: (actionBgColor || 'white')}} onClick={() => action(item.id)}>
              X
            </div>
          </div>
        )) : (
          <div>
            <p>No available payment methods</p>
          </div>
        )
      }
    </div>
  )
}

export default ActionableList
