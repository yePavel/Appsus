
export function Textbox({ handleChange,name,txt }) {

    function onSetTxt({target}) {
        const txt = target.value
        handleChange({ target: { name: 'txt', value: txt, type: 'text' } })
    }

    return (
        <textarea
            name={name}
            style={{
                width: '100%',
                height: 'auto',
                minHeight: '100px',
                resize: 'vertical',
                border: 'none',
                outline: 'none',
                backgroundColor: 'transparent'
            }}
            value={txt}
            type= 'text'
            onChange={onSetTxt}
            placeholder='Take a note...'
        ></textarea>
    )

}