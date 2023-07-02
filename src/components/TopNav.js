import logo from '../images/Eta by Eta Logo.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping , faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';


const TopNav = () => {
    const [showSearch , setShowSearch] = useState(false);

    const handleMenuClick = ()=> {
      console.log('before ',showSearch)
      setShowSearch(()=>!showSearch)
      console.log('after ',showSearch)
    }

    const handleSearchClick= ()=>  {
      console.log('searching...')
    }

    const handleCartClick = ()=> {
      console.log('shopping cart...')
    }

    return (
      <div >
        <div className='flex flex-row pt-2 px-7 justify-between items-center'>
          <FontAwesomeIcon size='lg' icon={faBars} color='grey' onClick={handleMenuClick} className='hover:scale-125'/>
          <a href='/'>
            <img src={logo} alt='eta logo' width={200} height={200}/>
          </a>
          <div>
            <FontAwesomeIcon size='lg' icon={faMagnifyingGlass} className='mr-4' color='grey' onClick={handleSearchClick}/>
            <FontAwesomeIcon size='lg' icon={faBagShopping} color='grey' onClick={handleCartClick}/>
          </div>
        </div>
        {
          showSearch?
          <input 
            
          />:
          null
        }
      </div>

    )
  }

export default TopNav
