import ClassName from 'classnames'

interface ButtonA {
    href:string, 
    title:string, 
    color:string, 
    icon:string
}

const ButtonComponent = ({href, color, title, icon}:ButtonA) => {
    const classText:string = ClassName("btn", color)
    const htmlObject = { __html: icon }
    return (
        <a 
            href={href} 
            className={classText}
            data-toggle="modal"
        > <span dangerouslySetInnerHTML={htmlObject} /><span>{title}</span></a>
    )
}
export default ButtonComponent