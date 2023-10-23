import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export const MainHeader = () => {
    return (
        <>
            <header className='bg-primary px-4 py-2 w-full z-20 fixed'>
                <div className='flex justify-center'>
                    <Link to={'/'}>
                        <span className='font-bold text-primary-100 cursor-pointer'>
                            DOC<i className='text-dark'>.js</i>
                        </span>
                    </Link>
                </div>
            </header>
        </>
    )
}
