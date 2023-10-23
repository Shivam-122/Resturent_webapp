import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'
import Menucard from './Menucard.js'
import Navbar from './Navbar'

const uniquelist = [...new Set(Menu.map((curElem)=>{
  return curElem.category

})),
"All",
]
console.log(uniquelist)
const Resturent = () => {
    const [menuData,setMenuData] =useState(Menu)
    const [menuList,setMenuList] = useState(uniquelist)
    const filterItem =(category) => {
      if (category=="All"){
        setMenuData(Menu)
        return
      }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category == category
        })

          setMenuData(updatedList)
    }
    
  return (
    <>
         
         <Navbar filterItem={filterItem } menuList={menuList}/>
         <Menucard menuData = {menuData}/>
    </>
  )
}

export default Resturent
