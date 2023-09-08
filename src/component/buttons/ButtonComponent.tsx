import ClassName from 'classnames'

interface ButtonA {
    href:string, 
    title:string, 
    color:string, 
    icon:string|React.ReactNode
}

const ButtonComponent = ({href, color, title, icon}:ButtonA) => {
    const classText:string = ClassName("btn", color)
    return (
        <a 
            href={href} 
            className={classText}
            data-toggle="modal"
        > 
            <span>{icon}</span>
            <span>{title}</span>
        </a>
    )
}
export default ButtonComponent