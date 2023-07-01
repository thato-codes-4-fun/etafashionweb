import logo from '../images/Eta by Eta Logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const TopNav = () => {
    return (
      <div className='p-10'>
        <div className='flex items-center justify-between'>
          <img src={logo} alt='eta by eta' width={200} height={100}/> 
          <div className='flex flex-row'>
            <p className='px-5 hover:underline'>Home</p>
            <p className='px-5 hover:underline'>Re-Introduction Collection</p>
            <p className='px-5 hover:underline'>Get Intouch</p>
          </div>
          <div className='px-10 ml-20'>
            <FontAwesomeIcon icon={faMagnifyingGlass}width={35} height={35} onClick={()=>console.log('search')}/>
            <FontAwesomeIcon icon={faBagShopping}  width={35} height={35} onClick={()=>console.log('shopping')}/>
          </div>
        </div>
      </div>
    )
  }

export default TopNav
