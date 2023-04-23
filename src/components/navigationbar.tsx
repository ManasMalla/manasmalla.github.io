import Link from 'next/link';
import { Mail } from 'react-feather'

export default function NavigationBar(){
    return (<div className="flex justify-between  py-10">
        <Link href="mailto:manasmalla.dev@gmail.com"><div className="flex gap-4 items-center">
        <Mail className='w-5 h-5'/>
        <a>manasmalla.dev@gmail.com</a>
        </div></Link>
        <div className="flex gap-14">
        <a className="text-[#005AC1]">Home</a>
        <a>Resume</a>
        <a>Achievements</a>
        <a>Stories</a>
        <a>Blogs</a>
        </div>
    </div>);
}