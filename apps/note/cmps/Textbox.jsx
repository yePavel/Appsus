
export function Textbox({ handleChange, txt }) {

    function onSetTxt({target}) {
        const txt = target.value
        handleChange({ target: { name: 'txt', value: txt, type: 'text' } })
    }

    return (
        <textarea
            name='txt'
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
        ></textarea>
    )

}