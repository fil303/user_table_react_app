import classNames from "classnames"

type props = {
    classText:Array<string>
}

const TableRow = ({ classText }: props) => {
    const classtext = classNames(...classText)
    return (
        <tr className={classtext}>

        </tr>
    )
}

export default TableRow