import moment from 'moment/moment';
import logo from '/images/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto'/>
            <p>Journalism without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            
        </div>
    );
};

export default Header;