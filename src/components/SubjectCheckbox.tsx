import { useEffect, useState } from 'react'
import checkPng from '../assets/checkbox-true.png'

const SubjectCheckbox = () => {

  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    console.log(check)
  }, [check])

  return (
    <div onClick={()=>{setCheck(!check)}} className="flex justify-center items-center min-w-6 max-w-6 min-h-6 max-h-6 border-2 border-color-font-base rounded cursor-pointer">
      {check && <img src={checkPng} alt=""/>}
    </div>
  )
}

export default SubjectCheckbox