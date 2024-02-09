import Link from 'next/link';


const Card = (props) => {
    return ( 
        <div className='bg-cyan-200 min-w-52 min-h-52 items-center flex flex-col flex-grow h-52 justify-center p-2 gap-2 rounded-xl '>
            <h1 className='text-center w-fit font-bold'>{props.title}</h1>
            <p className='w-fit min-w-40'>{props.conntent}</p>
            <p className='w-fit min-w-40'>{props.conntent1}</p>
            <p className='w-fit min-w-40'>{props.conntent2}</p>
            <Link href={props.path} className='bg-gradient-to-r min-w-40 text-center from-blue-950 from-50% to-indigo-900 p-2 pr-6 pl-6 text-white rounded-xl hover:text-cyan-100'>{props.butname}</Link>
        </div>
    )
}


export default Card;