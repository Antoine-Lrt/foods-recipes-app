import { View, Text } from 'react-native'
import React, {useRef, useEffect} from 'react'

export default function useMounted() {
 const filteredList = useMemo(
    () => {
      if (category === 'NONE') return list
      return list.filter(item => category === item.category)
    },
    [category, list]
  )

  
}
