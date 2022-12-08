// import Dropdown from "./Dropdown";
import Link from "./Links";

function Sidebar(){
    const links =[
        {label:'Dropdown', path:'/'},
        {label:'Accordion', path: '/accordion'},
        {label:'Button', path:'/buttons'}
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Link 
                key={link.label} 
                to={link.path} 
                className='mb-3'
                activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            >
                {link.label}
            </Link>
        );

    });
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {/* <Link />
            <Link />
            <Link />
            <Link />
            <Link /> */}
            {renderedLinks}
        </div>
    )

}
export default Sidebar;