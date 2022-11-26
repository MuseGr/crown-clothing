import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () =>{
    return (
      <Fragment> {/* Umesto fragmenta se nista ne renderuje sluzi da zadrzi formu jednog elementa */}
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className="nav-links-container">
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation