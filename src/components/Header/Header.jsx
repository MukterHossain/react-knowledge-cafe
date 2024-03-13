

import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 max-w-6xl mx-auto border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
        
        
        
        
    );
};

export default Header;